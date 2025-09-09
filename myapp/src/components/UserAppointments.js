// src/components/UserAppointmentsView.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppointmentCard from './AppointmentCard';
import Loading from './Loading';
import Error from './Error';
import './UserAppointmentsView.css';

const UserAppointmentsView = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/appointments')
            .then(response => {
                setAppointments(response.data);
                setLoading(false); // Data fetched, stop loading
            })
            .catch(err => {
                console.error('Error fetching appointments:', err);
                setError('Failed to load appointments. Please try again later.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading message="Loading appointments..." />;
    }

    if (error) {
        return <Error message={error} onRetry={() => window.location.reload()} />;
    }

    return (
        <div className="user-appointments-view">
            <div className="appointments-section">
                <h3>Your Upcoming Appointments</h3>
                <div className="appointment-list">
                    {appointments.length > 0 ? (
                        appointments.map(appointment => (
                            <AppointmentCard
                                key={appointment._id}
                                id={appointment._id}
                                patientName={appointment.patientName}
                                doctorName={appointment.doctorName}
                                date={appointment.date}
                            />
                        ))
                    ) : (
                        <p>No appointments found. <a href="/appointments">Book an appointment</a></p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserAppointmentsView;
