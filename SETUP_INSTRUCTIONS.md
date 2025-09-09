# Hospital Management System - Setup Instructions

## Overview
This is a full-stack hospital management system with React frontend and Node.js/Express backend with MongoDB database.

## Features Fixed
✅ **Appointment Management**: Users can add appointments, admins can view and manage them
✅ **Doctor Management**: Admins can add doctors, users can view them
✅ **Real-time Data**: All data is fetched from the API, not hardcoded
✅ **Proper Field Mapping**: Frontend and backend field names are now consistent
✅ **Enhanced UI**: Better appointment cards with status indicators

## Setup Instructions

### Backend Setup
1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the Backend directory with:
   ```
   MONGO_URI=mongodb+srv://your_username:your_password@cluster0.mongodb.net/hospital_management?retryWrites=true&w=majority
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the myapp directory:
   ```bash
   cd myapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

## How to Use

### For Users:
1. Visit the homepage
2. Go to "Appointments" to book an appointment
3. Select a doctor from the dropdown (fetched from database)
4. Fill in patient name and date
5. Submit the appointment

### For Admins:
1. Click "Admin Login" (no authentication implemented yet)
2. Go to "Manage Doctors" to add/edit/delete doctors
3. Go to "Manage Appointments" to view all appointments
4. Edit or delete appointments as needed

## Key Fixes Made

1. **Appointment Form**: Now fetches real doctors from the API instead of using hardcoded data
2. **Doctor Management**: Fixed field mapping between frontend (`specialization`) and backend (`specialization`)
3. **User Appointments**: Properly fetches and displays all appointments with delete functionality
4. **Enhanced Appointment Model**: Added status, time, notes, and timestamps
5. **Better UI**: Improved appointment cards with status indicators and better styling

## API Endpoints

### Doctors
- `GET /doctors` - Get all doctors
- `POST /doctors/add` - Add new doctor
- `PUT /doctors/update/:id` - Update doctor
- `DELETE /doctors/delete/:id` - Delete doctor

### Appointments
- `GET /appointments` - Get all appointments
- `POST /appointments/add` - Add new appointment
- `POST /appointments/update/:id` - Update appointment
- `DELETE /appointments/delete/:id` - Delete appointment

## Database Schema

### Doctor
- name (String, required)
- specialization (String, required)
- availability (String, required)
- description (String, required)
- image (String, optional)
- dateAdded (Date, default: now)

### Appointment
- patientName (String, required)
- doctorName (String, required)
- date (Date, required)
- time (String, optional)
- status (String, default: 'Scheduled')
- notes (String, optional)
- createdAt (Date, default: now)
- updatedAt (Date, default: now)

## Troubleshooting

1. **CORS Issues**: Make sure the backend is running on port 5000
2. **Database Connection**: Check your MongoDB connection string
3. **API Calls Failing**: Ensure both frontend and backend are running
4. **Doctors Not Loading**: Check if doctors are added in the admin panel first

## Next Steps for Enhancement

1. Add user authentication
2. Add patient management
3. Add appointment time slots
4. Add email notifications
5. Add search and filtering
6. Add data validation
7. Add error handling improvements
