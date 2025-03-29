const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const { Pool } = require('pg');

// Setup PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'ipo_app',
  password: process.env.DB_PASSWORD || 'password',
  port: process.env.DB_PORT || 5432,
});

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Change in production
const JWT_EXPIRES_IN = '1h';

// Rate limiting for login attempts
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 login attempts per window
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many login attempts, please try again after 15 minutes'
});

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.header('x-auth-token');
  
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

// Helper function to check if account is locked
const isAccountLocked = (lockUntil) => {
  return lockUntil && lockUntil > Date.now();
};

// Route: POST /api/auth/register
// Description: Register a new user
// Access: Public
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  
  try {
    // Check if user already exists
    const userCheck = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    
    if (userCheck.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Insert new user
    const newUser = await pool.query(
      'INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, username, email, role',
      [username, email, hashedPassword, 'user']
    );
    
    // Create JWT payload
    const payload = {
      user: {
        id: newUser.rows[0].id,
        role: newUser.rows[0].role
      }
    };
    
    // Sign token
    jwt.sign(
      payload,
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route: POST /api/auth/login
// Description: Login user & get token
// Access: Public
router.post('/login', loginLimiter, async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Get user by email
    const userResult = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    
    if (userResult.rows.length === 0) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    const user = userResult.rows[0];
    
    // Check if account is locked
    if (isAccountLocked(user.lock_until)) {
      return res.status(403).json({
        message: 'Account is temporarily locked. Try again later.'
      });
    }
    
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      // Increment login attempts
      const loginAttempts = user.login_attempts + 1;
      let lockUntil = null;
      
      // Lock account after 5 attempts
      if (loginAttempts >= 5) {
        lockUntil = Date.now() + 60 * 60 * 1000; // 1 hour
      }
      
      await pool.query(
        'UPDATE users SET login_attempts = $1, lock_until = $2 WHERE id = $3',
        [loginAttempts, lockUntil, user.id]
      );
      
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Reset login attempts on successful login
    if (user.login_attempts > 0) {
      await pool.query(
        'UPDATE users SET login_attempts = 0, lock_until = NULL WHERE id = $1',
        [user.id]
      );
    }
    
    // Create JWT payload
    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    };
    
    // Sign token
    jwt.sign(
      payload,
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route: GET /api/auth/me
// Description: Get current user info
// Access: Private
router.get('/me', verifyToken, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, username, email, role, created_at FROM users WHERE id = $1',
      [req.user.id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route: POST /api/auth/logout
// Description: Invalidate token (client-side)
// Access: Public
router.post('/logout', (req, res) => {
  // JWT tokens cannot be invalidated server-side without additional storage
  // This endpoint is for client logging and tracking purposes
  res.json({ message: 'Logout successful' });
  
  // For a more secure approach, you could implement a token blacklist using Redis
  // or use the refresh_tokens table we created
});

// Route: POST /api/auth/refresh-token
// Description: Get a new access token using refresh token
// Access: Public
router.post('/refresh-token', async (req, res) => {
  const { refreshToken } = req.body;
  
  if (!refreshToken) {
    return res.status(400).json({ message: 'Refresh token is required' });
  }
  
  try {
    // Check if refresh token exists and is valid
    const tokenResult = await pool.query(
      'SELECT * FROM refresh_tokens WHERE token = $1 AND expires_at > NOW()',
      [refreshToken]
    );
    
    if (tokenResult.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid or expired refresh token' });
    }
    
    const token = tokenResult.rows[0];
    
    // Get user information
    const userResult = await pool.query(
      'SELECT id, role FROM users WHERE id = $1',
      [token.user_id]
    );
    
    if (userResult.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    const user = userResult.rows[0];
    
    // Create new access token
    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    };
    
    jwt.sign(
      payload,
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN },
      (err, newToken) => {
        if (err) throw err;
        res.json({ token: newToken });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
