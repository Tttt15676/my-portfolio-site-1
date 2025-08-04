// Middleware to check if the user is authenticated as an admin
function requireAdminAuth(req, res, next) {
    if (req.session && req.session.isAdmin) {
        return next();
    } else {
        return res.status(401).json({ message: "Unauthorized: Admin access required" });
    }
}

module.exports = {
    requireAdminAuth
};