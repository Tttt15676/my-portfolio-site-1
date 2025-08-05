const nodemailer = require("nodemailer");

// Create transporter (adjust with your actual credentials or use env vars)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, // e.g., your Gmail address
        pass: process.env.EMAIL_PASS // e.g., an App Password for Gmail
    }
});

/**
 * Send confirmation email
 * @param {Object} options - email options
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} options.text - Plain text body
 * @param {string} [options.html] - Optional HTML body
 */
const sendEmail = async ({ to, subject, text, html }) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
        html
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.response);
        return { success: true, response: info.response };
    } catch (error) {
        console.error("Email error:", error);
        return { success: false, error };
    }
};

module.exports = sendEmail;