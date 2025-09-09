# Hospital Management System - Setup Instructions

## Overview
This is a comprehensive Hospital Management System with proper authentication, user roles, and full CRUD operations for patients, doctors, and appointments.

## Features
- **User Authentication**: Secure login/registration with JWT tokens
- **Role-based Access**: Separate admin and user interfaces
- **Patient Management**: Add, edit, delete, and view patient information
- **Doctor Management**: Manage doctor profiles and specialties
- **Appointment System**: Book and manage medical appointments
- **Photo Upload**: Upload patient photos
- **Responsive Design**: Modern, mobile-friendly interface

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the backend directory:
   ```env
   MONGO_URI=mongodb://localhost:27017/hospital-management
   JWT_SECRET=your-super-secret-jwt-key
   PORT=5000
   ```

4. **Create admin user:**
   ```bash
   node createAdmin.js
   ```
   This creates an admin user with:
   - Email: admin@hospital.com
   - Password: admin123

5. **Start the backend server:**
   ```bash
   npm start
   ```
   The server will run on http://localhost:5000

## Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd myapp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will run on http://localhost:3000

## Usage

### For Regular Users
1. Visit http://localhost:3000
2. Click "Register" to create an account
3. Fill in your details and register
4. Login with your credentials
5. Book appointments and view your profile

### For Administrators
1. Visit http://localhost:3000/adminlogin
2. Login with admin credentials:
   - Email: admin@hospital.com
   - Password: admin123
3. Access admin dashboard to manage:
   - Patients
   - Doctors
   - Appointments

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile
- `POST /api/auth/logout` - Logout user

### Patients (Admin only)
- `GET /api/patients` - Get all patients
- `POST /api/patients/add` - Add new patient
- `POST /api/patients/update/:id` - Update patient
- `DELETE /api/patients/delete/:id` - Delete patient
- `POST /api/patients/upload` - Upload patient photo

### Doctors (Admin only)
- `GET /api/doctors` - Get all doctors
- `POST /api/doctors/add` - Add new doctor
- `PUT /api/doctors/:id` - Update doctor
- `DELETE /api/doctors/:id` - Delete doctor

### Appointments
- `GET /api/appointments` - Get appointments (user's own or all for admin)
- `POST /api/appointments/add` - Add new appointment
- `POST /api/appointments/update/:id` - Update appointment
- `DELETE /api/appointments/delete/:id` - Delete appointment

## Security Features
- Password hashing with bcrypt
- JWT token authentication
- Role-based access control
- Input validation
- CORS protection

## File Structure
```
Hospital-Management-System/
├── backend/
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Authentication & upload middleware
│   ├── uploads/         # Uploaded files
│   └── server.js        # Main server file
├── myapp/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── contexts/    # React contexts
│   │   └── App.js       # Main app component
│   └── public/          # Static files
└── README.md
```

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error:**
   - Ensure MongoDB is running
   - Check the MONGO_URI in .env file
   - Verify network connectivity

2. **Authentication Issues:**
   - Check JWT_SECRET is set in .env
   - Verify token is being sent in headers
   - Ensure user exists in database

3. **CORS Errors:**
   - Backend CORS is configured for localhost:3000
   - Check if frontend is running on correct port

4. **File Upload Issues:**
   - Ensure uploads directory exists
   - Check file size limits
   - Verify file type restrictions

## Development

### Adding New Features
1. Create new models in `backend/models/`
2. Add routes in `backend/routes/`
3. Create React components in `myapp/src/components/`
4. Update authentication context if needed

### Database Schema
- **Users**: Authentication and profile data
- **Patients**: Patient information and photos
- **Doctors**: Doctor profiles and specialties
- **Appointments**: Appointment scheduling

## Production Deployment

1. Set production environment variables
2. Use a production MongoDB instance
3. Set up proper JWT secrets
4. Configure CORS for production domain
5. Set up file storage (AWS S3, etc.)
6. Use HTTPS in production

## Support
For issues or questions, please check the troubleshooting section or create an issue in the repository.
