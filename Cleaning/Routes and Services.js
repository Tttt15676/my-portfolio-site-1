const express = require("express");
const router = express.Router();

// Sample list of services (this could be replaced by DB data later)
const services = [
    { id: 1, name: "General House Cleaning", description: "Basic cleaning for all rooms." },
    { id: 2, name: "Kitchen Cleaning", description: "Detailed kitchen scrub including appliances." },
    { id: 3, name: "Bathroom Cleaning", description: "Deep clean and sanitization of bathrooms." },
    { id: 4, name: "Window Cleaning", description: "Interior and/or exterior window washing." },
    { id: 5, name: "Move-In/Out Cleaning", description: "Thorough cleaning before or after moving." },
    { id: 6, name: "Custom Area Cleaning", description: "Pick specific areas to focus on." }
];

// GET /services
router.get("/", (req, res) => {
    res.json(services);
});

module.exports = router;