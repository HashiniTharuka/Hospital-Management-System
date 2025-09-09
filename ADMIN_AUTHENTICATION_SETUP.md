# 🔐 Admin Authentication System Setup

## Overview
Complete admin authentication system with MongoDB storage, JWT tokens, and secure login/logout functionality.

## ✅ Features Implemented

### Backend Features:
- **Admin Model**: Secure admin user storage in MongoDB
- **Password Hashing**: bcryptjs for secure password storage
- **JWT Authentication**: Token-based authentication system
- **Protected Routes**: Middleware to protect admin endpoints
- **Login/Logout**: Complete authentication flow
- **Role-based Access**: Support for different admin roles

### Frontend Features:
- **Secure Login**: Real authentication with backend
- **Token Management**: Automatic token storage and validation
- **Auto-redirect**: Redirects to login if not authenticated
- **Loading States**: User-friendly loading indicators
- **Error Handling**: Proper error messages and validation

## 🚀 Setup Instructions

### 1. Install Dependencies
```bash
cd Backend
npm install bcryptjs jsonwebtoken
```

### 2. Create Initial Admin
```bash
cd Backend
node create-admin.js
```

This will create an admin with:
- **Username**: `admin`
- **Email**: `admin@hospital.com`
- **Password**: `admin123`
- **Role**: `super_admin`

### 3. Start the Backend
```bash
cd Backend
npm start
```

### 4. Start the Frontend
```bash
cd myapp
npm start
```

## 🔑 How to Use

### For Admins:
1. Go to `http://localhost:3000/adminlogin`
2. Enter credentials:
   - Username: `admin` (or email: `admin@hospital.com`)
   - Password: `admin123`
3. Click "Login"
4. You'll be redirected to the admin dashboard
5. Only authenticated admins can access admin features

### Admin Features:
- **Manage Doctors**: Add, edit, delete doctors
- **Manage Appointments**: View and manage all appointments
- **Secure Access**: Only logged-in admins can access
- **Auto-logout**: Session expires after 24 hours
- **Profile Display**: Shows admin name and role

## 🛡️ Security Features

### Password Security:
- Passwords are hashed with bcryptjs
- Salt rounds: 10
- No plain text passwords stored

### Token Security:
- JWT tokens with 24-hour expiration
- Secret key for signing tokens
- Automatic token validation
- Secure logout (token removal)

### Access Control:
- Protected admin routes
- Authentication middleware
- Role-based permissions
- Session management

## 📊 Database Schema

### Admin Collection:
```json
{
  "username": "admin",
  "email": "admin@hospital.com",
  "password": "hashed_password",
  "fullName": "System Administrator",
  "role": "super_admin",
  "isActive": true,
  "lastLogin": "2024-01-15T10:30:00Z",
  "createdAt": "2024-01-01T00:00:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

## 🔧 API Endpoints

### Authentication:
- `POST /admin/register` - Register new admin
- `POST /admin/login` - Admin login
- `POST /admin/logout` - Admin logout
- `GET /admin/verify` - Verify token
- `GET /admin/profile` - Get admin profile

### Protected Routes:
- All admin management features require authentication
- Token must be sent in `x-auth-token` header
- Automatic redirect to login if not authenticated

## 🎯 User Flow

### Login Process:
1. User enters username/email and password
2. Frontend sends credentials to backend
3. Backend validates credentials against MongoDB
4. If valid, JWT token is generated and returned
5. Token is stored in localStorage
6. User is redirected to admin dashboard

### Access Control:
1. Every admin page checks for valid token
2. Token is verified with backend
3. If invalid/expired, user is redirected to login
4. If valid, admin can access all features

### Logout Process:
1. User clicks logout button
2. Token is removed from localStorage
3. User is redirected to login page
4. All admin access is revoked

## 🔒 Security Best Practices

### Implemented:
- Password hashing with salt
- JWT token expiration
- Secure token storage
- Input validation
- Error handling
- Session management

### Recommended for Production:
- Use environment variables for JWT secret
- Implement rate limiting
- Add HTTPS
- Regular password updates
- Audit logging
- Two-factor authentication

## 🐛 Troubleshooting

### Common Issues:

1. **"Invalid credentials" error**:
   - Check username/email and password
   - Ensure admin exists in database
   - Run `node create-admin.js` to create admin

2. **"Token expired" error**:
   - Login again to get new token
   - Tokens expire after 24 hours

3. **"Access denied" error**:
   - Make sure you're logged in
   - Check if token is valid
   - Clear localStorage and login again

4. **Backend connection error**:
   - Ensure backend is running on port 5000
   - Check MongoDB connection
   - Verify all dependencies are installed

## 📝 Adding New Admins

### Method 1: Using API
```bash
curl -X POST http://localhost:5000/admin/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "newadmin",
    "email": "newadmin@hospital.com",
    "password": "password123",
    "fullName": "New Administrator",
    "role": "admin"
  }'
```

### Method 2: Direct Database
```javascript
const admin = new Admin({
  username: 'newadmin',
  email: 'newadmin@hospital.com',
  password: 'password123',
  fullName: 'New Administrator',
  role: 'admin'
});
await admin.save();
```

## 🎉 Success!

Your hospital management system now has:
- ✅ Secure admin authentication
- ✅ MongoDB user storage
- ✅ JWT token-based security
- ✅ Protected admin routes
- ✅ Professional login interface
- ✅ Automatic session management

Only authenticated admins can now access the admin panel, and all admin data is securely stored in MongoDB!
