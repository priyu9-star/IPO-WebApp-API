const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const IPO = require('../models/IPO');
const dotenv = require('dotenv');
const router = express.Router();

dotenv.config();

// ✅ Multer Configuration for File Upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');  // Store logos in "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

// ✅ Email Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// ✅ POST: Register new IPO
router.post('/register', upload.single('logo'), async (req, res) => {
  try {
    const { companyName, pricePerShare, totalShares, openDate, closeDate } = req.body;
    const logo = req.file ? req.file.filename : null;

    if (!logo) {
      return res.status(400).json({ message: 'Logo upload failed' });
    }

    // Validate required fields
    if (!companyName || !pricePerShare || !totalShares || !openDate || !closeDate) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const ipo = new IPO({
      companyName,
      pricePerShare,
      totalShares,
      openDate,
      closeDate,
      logo
    });

    await ipo.save();

    // Send Email Notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'admin@example.com',
      subject: 'New IPO Registered',
      text: `A new IPO has been registered: ${companyName}`
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'IPO registered successfully', ipo });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ GET: Fetch All IPOs
router.get('/', async (req, res) => {
  try {
    const ipos = await IPO.find();
    res.status(200).json(ipos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch IPOs' });
  }
});

module.exports = router;




    






