// src/components/Admin.js
import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FaUsers, FaUserMd, FaSignOutAlt, FaCalendarAlt, FaUser, FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [adminInfo, setAdminInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        navigate('/adminlogin');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/admin/verify', {
          headers: { 'x-auth-token': token }
        });

        if (response.data.success) {
          setAdminInfo(response.data.admin);
        } else {
          localStorage.removeItem('adminToken');
          localStorage.removeItem('adminInfo');
          navigate('/adminlogin');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminInfo');
        navigate('/adminlogin');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/admin/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminInfo');
      navigate('/adminlogin');
    }
  };

  if (loading) {
    return (
      <div className="admin-container">
        <div className="loading">
          <FaSpinner className="spinner" />
          <h2>Verifying authentication...</h2>
        </div>
      </div>
    );
  }

  if (!adminInfo) {
    return null; // Will redirect to login
  }

  return (
    <div className="admin-container">
      <header className="admin-header">
        <div className="admin-welcome">
          <h1>Admin Dashboard</h1>
          <div className="admin-info">
            <FaUser className="admin-avatar" />
            <div className="admin-details">
              <span className="admin-name">{adminInfo.fullName}</span>
              <span className="admin-role">{adminInfo.role}</span>
            </div>
          </div>
        </div>
      </header>
      
      <div className="admin-navigation">
        <Link to="/doctors" className="nav-button">
          <FaUserMd className="icon" /> Manage Doctors
        </Link>
       
        <Link to="/user-appointments/1" className="nav-button">
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
