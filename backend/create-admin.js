// Script to create initial admin user
const mongoose = require('mongoose');
const Admin = require('./models/Admin');

// MongoDB connection
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://your_user:your_password@cluster0.mongodb.net/hospital_management?retryWrites=true&w=majority';

async function createInitialAdmin() {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ username: 'admin' });
        if (existingAdmin) {
            console.log('Admin user already exists!');
            console.log('Username: admin');
            console.log('Email:', existingAdmin.email);
            process.exit(0);
        }

        // Create initial admin
        const admin = new Admin({
            username: 'admin',
            email: 'admin@hospital.com',
            password: 'admin123', // This will be hashed automatically
            fullName: 'System Administrator',
            role: 'super_admin'
        });

        await admin.save();
        console.log('✅ Initial admin created successfully!');
        console.log('Username: admin');
        console.log('Email: admin@hospital.com');
        console.log('Password: admin123');
        console.log('Role: super_admin');
        console.log('\n⚠️  Please change the password after first login!');

    } catch (error) {
        console.error('Error creating admin:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
        process.exit(0);
    }
}

// Run the script
createInitialAdmin();
