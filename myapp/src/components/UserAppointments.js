// src/components/UserAppointments.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppointmentCard from './AppointmentCard';
import './UserAppointments.css';

const UserAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching the appointments from the API
  useEffect(() => {
    axios.get('http://localhost:5000/appointments')
      .then(response => {
        setAppointments(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
        setError('Failed to load appointments. Please try again later.');
        setLoading(false);
      });
  }, []);

  // Handle edit and delete appointment actions
  const handleEditAppointment = (appointment) => {
    console.log('Edit appointment:', appointment);
    // You can implement edit functionality here if needed
  };

  const handleDeleteAppointment = (appointmentId) => {
    axios.delete(`http://localhost:5000/appointments/delete/${appointmentId}`)
      .then(response => {
        setAppointments(appointments.filter(appointment => appointment._id !== appointmentId));
      })
      .catch(error => {
        console.error('Error deleting appointment:', error);
        setError('Failed to delete appointment. Please try again.');
      });
  };

  if (loading) {
    return <div className="loading">Loading appointments...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="user-appointments">
      <header className="appointments-header">
        <h1>Manage Appointments</h1>
        <p>View and manage all patient appointments</p>
      </header>
      <div className="appointments">
        <h3>All Appointments ({appointments.length})</h3>
        <div className="appointment-list">
          {appointments.length > 0 ? (
            appointments.map(appointment => (
              <AppointmentCard
                key={appointment._id}
                appointment={appointment}
                onEdit={handleEditAppointment}
                onDelete={handleDeleteAppointment}
              />
            ))
          ) : (
            <p>No appointments found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAppointments;
