const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pool = require("./config/db"); // Import database connection


const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again after 15 minutes'
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(globalLimiter);

// ✅ Test API
app.get("/", (req, res) => {
    res.send("IPO Web App API is Running!");
});

// ✅ API to fetch all IPOs
app.get("/api/ipos", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM ipos");
        res.json(result.rows);
    } catch (err) {
        console.error("Error fetching IPOs:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ API to fetch a single IPO by ID (View)
app.get("/api/ipos/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("SELECT * FROM ipos WHERE id = $1", [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: "IPO not found" });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Error fetching IPO:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ API to delete an IPO by ID
app.delete("/api/ipos/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM ipos WHERE id = $1 RETURNING *", [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: "IPO not found" });
        }
        res.json({ message: "IPO deleted successfully", deletedIPO: result.rows[0] });
    } catch (err) {
        console.error("Error deleting IPO:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ API to update an IPO by ID
app.put("/api/ipos/:id", async (req, res) => {
    const { id } = req.params;
    const { company, price, open, close, size, type, listing, status } = req.body;

    try {
        const result = await pool.query(
            "UPDATE ipos SET company=$1, price=$2, open=$3, close=$4, size=$5, type=$6, listing=$7, status=$8 WHERE id=$9 RETURNING *",
            [company, price, open, close, size, type, listing, status, id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ error: "IPO not found" });
        }
        res.json({ message: "IPO updated successfully", updatedIPO: result.rows[0] });
    } catch (err) {
        console.error("Error updating IPO:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


const authRoutes = require("./routes/authRoutes");
app.use('/api/auth', authRoutes);
const ipoRoutes = require("./routes/ipoRoutes");
const path = require("path");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/ipos", ipoRoutes);

app.get("/", (req, res) => {
  res.send("IPO Registration API is running...");
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const Broker = require("../models/Broker");
const dotenv = require("dotenv");

dotenv.config();
const router = express.Router();

// ✅ Multer for File Upload
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// ✅ Email Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ POST: Register new Broker
router.post("/register", upload.single("license"), async (req, res) => {
  try {
    const { name, company, email, phone, licenseNumber, status } = req.body;
    const licenseFile = req.file ? req.file.filename : null;

    if (!licenseFile) {
      return res.status(400).json({ message: "License upload failed" });
    }

    const broker = await Broker.create({
      name,
      company,
      email,
      phone,
      licenseNumber,
      status,
      licenseFile,
    });

    // Send Email Notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "admin@example.com",
      subject: "New Broker Registered",
      text: `A new broker has been registered: ${name}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Broker registered successfully", broker });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ GET: Fetch All Brokers
router.get("/", async (req, res) => {
  try {
    const brokers = await Broker.findAll();
    res.status(200).json(brokers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch brokers" });
  }
});

// ✅ GET: Fetch Single Broker by ID
router.get("/:id", async (req, res) => {
  try {
    const broker = await Broker.findByPk(req.params.id);
    if (!broker) {
      return res.status(404).json({ message: "Broker not found" });
    }
    res.status(200).json(broker);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch broker" });
  }
});

// ✅ PUT: Update Broker by ID
router.put("/:id", async (req, res) => {
  try {
    const { name, company, email, phone, licenseNumber, status } = req.body;
    const broker = await Broker.findByPk(req.params.id);
    if (!broker) {
      return res.status(404).json({ message: "Broker not found" });
    }

    await broker.update({ name, company, email, phone, licenseNumber, status });
    res.status(200).json({ message: "Broker updated successfully", broker });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update broker" });
  }
});

// ✅ DELETE: Remove Broker by ID
router.delete("/:id", async (req, res) => {
  try {
    const broker = await Broker.findByPk(req.params.id);
    if (!broker) {
      return res.status(404).json({ message: "Broker not found" });
    }

    await broker.destroy();
    res.status(200).json({ message: "Broker deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete broker" });
  }
});

module.exports = router;
