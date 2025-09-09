// src/components/Admin.js
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FaUsers, FaUserMd, FaSignOutAlt, FaCalendarAlt } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';
import './Admin.css';

const Admin = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/home');
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-user-info">
          <span>Welcome, {user?.name}</span>
        </div>
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
