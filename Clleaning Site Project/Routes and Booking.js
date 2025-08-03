const express = require("express");
const router = express.Router();

// POST /book
router.post("/", (req, res) => {
    const bookingData = req.body;
    console.log("New booking received:", bookingData);

    // TODO: Save to database or forward via email

    // If it's an AJAX request
    if (req.headers.accept.includes("application/json")) {
        return res.json({ success: true, message: "Booking received successfully!" });
    }

    // If it's a standard form post
    res.redirect("/thank-you.html");
});

module.exports = router;