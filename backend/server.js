const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // To load environment variables

const upload = require('./middleware/upload'); // Import the upload middleware (ensure it's implemented correctly)

const patientsRouter = require('./routes/patients');
const doctorsRouter = require('./routes/doctors');
const appointmentsRouter = require('./routes/appointments');
const contactsRouter = require('./routes/contacts');
const adminRouter = require('./routes/admin');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Use CORS and body-parser middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files for uploaded photos
app.use('/uploads', express.static('uploads'));

// MongoDB connection
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://your_user:your_password@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB database connection established successfully');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// API Routes
app.use('/patients', patientsRouter);
app.use('/doctors', doctorsRouter);
app.use('/appointments', appointmentsRouter);
app.use('/contacts', contactsRouter);
app.use('/admin', adminRouter);
app.use('/api/users', userRoutes);

// Error handling middleware for undefined routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// General error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong, please try again later' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
