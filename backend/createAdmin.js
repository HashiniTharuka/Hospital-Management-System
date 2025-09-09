const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const createAdmin = async () => {
  try {
    // Connect to MongoDB
    const mongoURI = process.env.MONGO_URI || 'mongodb+srv://your_user:your_password@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority';
    
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@hospital.com' });
    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    // Create admin user
    const admin = new User({
      name: 'Hospital Admin',
      email: 'admin@hospital.com',
      password: 'admin123', // This will be hashed automatically
      role: 'admin',
      phone: '+1234567890',
      address: 'Hospital Administration'
    });

    await admin.save();
    console.log('Admin user created successfully');
    console.log('Email: admin@hospital.com');
    console.log('Password: admin123');
    
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    mongoose.connection.close();
  }
};

createAdmin();
