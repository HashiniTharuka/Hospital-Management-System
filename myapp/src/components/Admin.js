// src/components/Admin.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaUsers, FaUserMd, FaSignOutAlt, FaCalendarAlt } from 'react-icons/fa'; // Importing the calendar icon
import './Admin.css'; // Make sure to create and style this file

const Admin = () => {
  const handleLogout = () => {
    // Clear authentication tokens or session data here
    localStorage.removeItem('authToken'); // Adjust based on your authentication method

    // Redirect to login page or home page
    window.location.href = '/home'; // Adjust the path based on your app's routing
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
      </header>
      
      <div className="admin-navigation">
        <Link to="/doctors" className="nav-button">
          <FaUserMd className="icon" /> Manage Doctors
        </Link>
       
        <Link to="/userappointments" className="nav-button">
          <FaCalendarAlt className="icon" /> Manage Appointments
        </Link>
        <button onClick={handleLogout} className="logout-button">
          <FaSignOutAlt className="icon" /> Logout
        </button>
      </div>

      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
