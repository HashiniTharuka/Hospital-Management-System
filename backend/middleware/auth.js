const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';

const auth = async (req, res, next) => {
    try {
        // Get token from header
        const token = req.header('Authorization')?.replace('Bearer ', '') || 
                     req.header('x-auth-token');

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'No token provided, access denied'
            });
        }

        // Verify token
        const decoded = jwt.verify(token, JWT_SECRET);
        
        // Check if admin still exists and is active
        const admin = await Admin.findById(decoded.adminId);
        if (!admin || !admin.isActive) {
            return res.status(401).json({
                success: false,
                message: 'Token is no longer valid'
            });
        }

        // Add admin info to request
        req.adminId = decoded.adminId;
        req.username = decoded.username;
        req.role = decoded.role;

        next();

    } catch (error) {
        console.error('Auth middleware error:', error);
        
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                success: false,
                message: 'Invalid token'
            });
        }
        
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: 'Token expired'
            });
        }

        res.status(500).json({
            success: false,
            message: 'Server error during authentication'
        });
    }
};

module.exports = auth;
