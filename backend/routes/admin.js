const express = require('express');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const auth = require('../middleware/auth');

const router = express.Router();

// JWT Secret (in production, use environment variable)
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';

// Register new admin (only for super admin or initial setup)
router.post('/register', async (req, res) => {
    try {
        const { username, email, password, fullName, role = 'admin' } = req.body;

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({
            $or: [{ email }, { username }]
        });

        if (existingAdmin) {
            return res.status(400).json({
                success: false,
                message: 'Admin with this email or username already exists'
            });
        }

        // Create new admin
        const admin = new Admin({
            username,
            email,
            password,
            fullName,
            role
        });

        await admin.save();

        // Generate JWT token
        const token = jwt.sign(
            { 
                adminId: admin._id, 
                username: admin.username, 
                role: admin.role 
            },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(201).json({
            success: true,
            message: 'Admin registered successfully',
            token,
            admin: {
                id: admin._id,
                username: admin.username,
                email: admin.email,
                fullName: admin.fullName,
                role: admin.role
            }
        });

    } catch (error) {
        console.error('Admin registration error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error during registration',
            error: error.message
        });
    }
});

// Admin login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find admin by username or email
        const admin = await Admin.findOne({
            $or: [{ username }, { email: username }],
            isActive: true
        });

        if (!admin) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Check password
        const isPasswordValid = await admin.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Update last login
        admin.lastLogin = new Date();
        await admin.save();

        // Generate JWT token
        const token = jwt.sign(
            { 
                adminId: admin._id, 
                username: admin.username, 
                role: admin.role 
            },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            success: true,
            message: 'Login successful',
            token,
            admin: {
                id: admin._id,
                username: admin.username,
                email: admin.email,
                fullName: admin.fullName,
                role: admin.role,
                lastLogin: admin.lastLogin
            }
        });

    } catch (error) {
        console.error('Admin login error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error during login',
            error: error.message
        });
    }
});

// Get current admin profile
router.get('/profile', auth, async (req, res) => {
    try {
        const admin = await Admin.findById(req.adminId).select('-password');
        
        if (!admin) {
            return res.status(404).json({
                success: false,
                message: 'Admin not found'
            });
        }

        res.json({
            success: true,
            admin
        });

    } catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
});

// Verify token
router.get('/verify', auth, (req, res) => {
    res.json({
        success: true,
        message: 'Token is valid',
        admin: {
            id: req.adminId,
            username: req.username,
            role: req.role
        }
    });
});

// Logout (client-side token removal)
router.post('/logout', (req, res) => {
    res.json({
        success: true,
        message: 'Logout successful'
    });
});

// Get all admins (only for super admin)
router.get('/all', auth, async (req, res) => {
    try {
        if (req.role !== 'super_admin') {
            return res.status(403).json({
                success: false,
                message: 'Access denied. Super admin required.'
            });
        }

        const admins = await Admin.find().select('-password');
        res.json({
            success: true,
            admins
        });

    } catch (error) {
        console.error('Get admins error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
});

module.exports = router;
