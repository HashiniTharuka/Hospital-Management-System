import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AdminLogin.css';

const AdminLogin = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin ID:', adminId);
    console.log('Password:', password);

    if (adminId === '1' && password === 'tharuka') {
      toast.success('Login Successful', { position: 'top-center' });
      setTimeout(() => {
        navigate('/admin');
      }, 2000); // Wait for 2 seconds before navigating
    } else {
      toast.error('Invalid credentials', { position: 'top-center' });
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input
              type="text"
              placeholder="adminId"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
            />
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
