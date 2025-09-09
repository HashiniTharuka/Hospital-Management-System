import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import axios from 'axios';
import DoctorCard from './DoctorCard';
import './Doctors_view.css'; // Ensure this file is styled properly

const Doctors_view = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const navigate = useNavigate(); // For navigation

    useEffect(() => {
        axios
            .get('http://localhost:5000/doctors')
            .then(response => {
                setDoctors(response.data);
                setLoading(false); // Data fetched, stop loading
            })
            .catch(err => {
                console.error('Error fetching doctors:', err);
                setError('Failed to load doctors. Please try again later.');
                setLoading(false);
            });
    }, []);

    const handleAddAppointment = () => {
        navigate('/add-appointment'); // Navigate to add appointment page
    };

    if (loading) {
        return <div className="loading">Loading doctors...</div>; // Show loading indicator
    }

    if (error) {
        return <div className="error">{error}</div>; // Show error message
    }

    return (
        <div className="doctors-view">
            <header className="doctors-view-header">
                <h1>Meet Our Doctors</h1>
                <p>Discover the skilled professionals who are ready to assist you with your medical needs.</p>
                <img src="https://aquinahealth.com/wp-content/uploads/2018/09/Pulse_91918.jpeg" alt="Doctors" />
            </header>
            <div className="doctors-view-section">
                <h3>Your Trusted Medical Team </h3>
              
                <div className="doctor-list">
                    {doctors.length > 0 ? (
                        doctors.map(doctor => (
                            <DoctorCard
                                key={doctor._id}
                                id={doctor._id}
                                name={doctor.name}
                                specialization={doctor.specialization}
                                availability={doctor.availability}
                                image={doctor.image}
                                description={doctor.description}
                                givepermisiontoeditanddelete={false}
                            />
                        ))
                    ) : (
                        <p>No doctors available at the moment. Please check back later.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Doctors_view;
