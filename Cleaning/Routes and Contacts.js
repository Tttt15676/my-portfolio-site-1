const express = require("express");
const router = express.Router();

// POST /contact
router.post("/", (req, res) => {
    const { name, email, message } = req.body;

    console.log("New contact inquiry received:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // TODO: Email the message to the business owner or store it

    // Respond to AJAX request
    if (req.headers.accept.includes("application/json")) {
        return res.json({ success: true, message: "Message received. We'll get back to you soon!" });
    }

    // Respond to normal form submission
    res.redirect("/thank-you.html");
});

module.exports = router;
