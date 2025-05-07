require("dotenv").config();

const { verify } = require("jsonwebtoken");
const User = require("../models/User");

const protectedRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized! No token provided."
            });
        }

        const decoded = await verify(token, process.env.JWT_SECRET_KEY);

        if (!decoded || !decoded.id) {
            return res.status(401).json({
                success: false,
                message: "Invalid token!"
            });
        }

        const user = await User.findById(decoded.id);
        
        req.user = user;

        next();

    } catch (e) {
        console.error("Authentication error:", e);
        
        if (e.name === 'JsonWebTokenError') {
            return res.status(401).json({
                success: false,
                message: "Invalid token!"
            });
        }
        
        if (e.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: "Token expired!"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Authentication failed"
        });
    }
};

module.exports = protectedRoute;