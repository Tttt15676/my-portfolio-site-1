const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // Optional: for hashed password comparison
const session = require('express-session');

// Dummy admin credentials – replace with DB lookup in real apps
const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "password123"; // You should hash this in production

// Middleware to check if admin is logged in
function isAuthenticated(req, res, next) {
    if (req.session && req.session.isAdmin) {
        next();
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
}

// Admin login
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        req.session.isAdmin = true;
        res.json({ message: "Login successful" });
    } else {
        res.status(401).json({ message: "Invalid email or password" });
    }
});

// Admin logout
router.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: "Logout failed" });
        }
        res.json({ message: "Logged out" });
    });
});

// Protected route example: get all appointments
router.get("/appointments", isAuthenticated, (req, res) => {
    // Example: fetch appointments from DB
    res.json([{ id: 1, name: "John Doe", date: "2025-05-22", time: "2:00 PM" }]);
});

module.exports = router;
