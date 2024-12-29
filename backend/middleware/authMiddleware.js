// Import necessary modules
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");

// Middleware to protect routes
const protect = asyncHandler(async (req, res, next) => {
    let token;

    // Check if authorization header is present and starts with "Bearer"
    if (req.headers.authorization && req.headers.authorization.startsWith(`Bearer`)) {
        try {
            // Extract token from authorization header
            token = req.headers.authorization.split(" ")[1];

            // Verify token and decode it
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Find user by decoded ID and attach to request object, excluding password
            req.user = await User.findById(decoded.id).select("-password");

            // Call the next middleware or route handler
            next();
        } catch (error) {
            // Log error and send unauthorized response if token verification fails
            console.error(error);
            res.status(401);
            throw new Error("Not authorized");
        }
    } else {
        // Send unauthorized response if no token is provided
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});

// Export the protect middleware
module.exports = { protect };