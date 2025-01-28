const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Ensure the middleware for file uploads is implemented
const upload = require('./middleware/upload'); 

// Import routes
const patientsRouter = require('./routes/patients');
const doctorsRouter = require('./routes/doctors');
const appointmentsRouter = require('./routes/appointments');
const contactsRouter = require('./routes/contacts');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());  // Parses JSON request bodies

// Serve static files for uploaded photos (if file uploads are used in your app)
app.use('/uploads', express.static('uploads'));

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://your_user:your_password@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB database connection established successfully'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit process on failure
  });

// Routes
app.use('/patients', patientsRouter);
app.use('/doctors', doctorsRouter);
app.use('/appointments', appointmentsRouter);
app.use('/contacts', contactsRouter);

// Undefined Route Handler for all unhandled routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// General Error Handler (Improved)
app.use((err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    message: 'Something went wrong, please try again later',
    error: err.message,
  });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
