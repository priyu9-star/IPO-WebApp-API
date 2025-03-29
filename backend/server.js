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

