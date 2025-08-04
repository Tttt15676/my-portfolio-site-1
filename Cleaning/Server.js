const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public"))); // Serve HTML/CSS/JS

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/book", (req, res) => {
    const bookingData = req.body;
    console.log("Booking received:", bookingData);

    // TODO: Save booking to database or email logic here

    // For AJAX requests, respond with JSON
    if (req.headers.accept.includes("application/json")) {
        return res.json({ success: true, message: "Booking submitted!" });
    }

    // For standard form posts, redirect to thank you page
    res.redirect("/thank-you.html");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});