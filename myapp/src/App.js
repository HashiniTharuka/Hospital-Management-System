import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Appointments from './components/Appointments';
import Doctors from './components/Doctors';
import Patients from './components/Patients';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import CardiologyDetail from './components/CardiologyDetail';
import PediatricsDetail from './components/PediatricsDetail';
import OrthopedicsDetail from './components/OrthopedicsDetail';
import GeneralCheckupsDetail from './components/GeneralCheckupsDetail';
import EmergencyServicesDetail from './components/EmergencyServicesDetail';
import SurgeryDetail from './components/SurgeryDetail';
import Footer from './components/Footer';
import Admin from './components/Admin';
import AdminLogin from './components/AdminLoginPage';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import './components/NavBar.css';
import Doctors_view from './components/Doctors_view';
import UserAppointments from './components/UserAppointments';

import { FaHome, FaUserMd, FaClipboardList, FaUsers, FaInfoCircle, FaPhoneAlt, FaCog, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

// Conditional NavBar rendering based on the route
const ConditionalNavBar = () => {
    const location = useLocation();
    const { isAuthenticated, user, logout } = useAuth();
    const hideNavBarPaths = ['/admin', '/adminlogin', '/login', '/register', '/doctors', '/patients_view', '/userappointments'];

    const shouldHideNavBar = hideNavBarPaths.includes(location.pathname);

    if (shouldHideNavBar) {
        return null;
    }

    return (
        <nav>
            <ul>
                <li className={location.pathname === '/home' ? 'active' : ''}>
                    <Link to="/home">
                        <FaHome className="icon" /> Home
                    </Link>
                </li>
                <li className={location.pathname === '/about' ? 'active' : ''}>
                    <Link to="/about">
                        <FaInfoCircle className="icon" /> About
                    </Link>
                </li>
                <li className={location.pathname === '/contact' ? 'active' : ''}>
                    <Link to="/contact">
                        <FaPhoneAlt className="icon" /> Contact
                    </Link>
                </li>
                <li className={location.pathname === '/services' ? 'active' : ''}>
                    <Link to="/services">
                        <FaCog className="icon" /> Services
                    </Link>
                </li>
                {isAuthenticated && (
                    <>
                        <li className={location.pathname === '/appointments' ? 'active' : ''}>
                            <Link to="/appointments">
                                <FaClipboardList className="icon" /> Appointments
                            </Link>
                        </li>
                        <li className={location.pathname === '/doctorview' ? 'active' : ''}>
                            <Link to="/doctorview">
                                <FaUserMd className="icon" /> Doctors
                            </Link>
                        </li>
                    </>
                )}
            </ul>

            <div className="nav-auth">
                {isAuthenticated ? (
                    <div className="user-menu">
                        <span>Welcome, {user?.name}</span>
                        {user?.role === 'admin' && (
                            <Link to="/admin" className="admin-link">
                                <FaUserMd className="icon" /> Admin
                            </Link>
                        )}
                        <button onClick={logout} className="logout-button">
                            <FaSignOutAlt className="icon" /> Logout
                        </button>
                    </div>
                ) : (
                    <div className="auth-buttons">
                        <Link to="/login" className="login-button">
                            <FaSignInAlt className="icon" /> Login
                        </Link>
                        <Link to="/register" className="register-button">
                            Register
                        </Link>
                        <Link to="/adminlogin" className="admin-login-button">
                            Admin Login
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div className="container">
                    <ConditionalNavBar />

                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/services/cardiology" element={<CardiologyDetail />} />
                        <Route path="/services/pediatrics" element={<PediatricsDetail />} />
                        <Route path="/services/orthopedics" element={<OrthopedicsDetail />} />
                        <Route path="/services/general-checkups" element={<GeneralCheckupsDetail />} />
                        <Route path="/services/emergency-services" element={<EmergencyServicesDetail />} />
                        <Route path="/services/surgery" element={<SurgeryDetail />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/adminlogin" element={<AdminLogin />} />
                        
                        {/* Protected Routes */}
                        <Route path="/appointments" element={
                            <ProtectedRoute>
                                <Appointments />
                            </ProtectedRoute>
                        } />
                        <Route path="/doctorview" element={<Doctors_view />} />
                        <Route path="/userappointments" element={
                            <ProtectedRoute>
                                <UserAppointments />
                            </ProtectedRoute>
                        } />
                        
                        {/* Admin Routes */}
                        <Route path="/admin" element={
                            <ProtectedRoute requireAdmin={true}>
                                <Admin />
                            </ProtectedRoute>
                        } />
                        <Route path="/doctors" element={
                            <ProtectedRoute requireAdmin={true}>
                                <Doctors />
                            </ProtectedRoute>
                        } />
                        <Route path="/patients" element={
                            <ProtectedRoute requireAdmin={true}>
                                <Patients />
                            </ProtectedRoute>
                        } />
                        
                        <Route path="/" element={<Home />} />
                    </Routes>

                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
