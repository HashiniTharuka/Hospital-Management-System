// src/components/UserAppointment.js
import React, { useState, useEffect } from 'react';
import AppointmentCard from './AppointmentCard'; // Assuming this is a separate component for displaying appointments

const UserAppointment = () => {
  const [appointments, setAppointments] = useState([]);

  // Fetching the appointments (You can replace with your data fetching logic)
  useEffect(() => {
    // Example: Fetch data (You can replace with your API request logic)
    fetch('/api/appointments')
      .then(response => response.json())
      .then(data => setAppointments(data))
      .catch(error => console.error('Error fetching appointments:', error));
  }, []);

  // Handle edit and delete appointment actions
  const handleEditAppointment = (appointmentId) => {
    console.log('Edit appointment:', appointmentId);
    // Your edit logic here
  };

  const handleDeleteAppointment = (appointmentId) => {
    console.log('Delete appointment:', appointmentId);
    // Your delete logic here
  };

  return (
    <div className="appointments">
      <h3>Appointments ({appointments.length})</h3>
      <div className="appointment-list">
        {appointments.map(appointment => (
          <AppointmentCard
            key={appointment._id}
            appointment={appointment}
            onEdit={handleEditAppointment}
            onDelete={handleDeleteAppointment}
          />
        ))}
      </div>
    </div>
  );
};

export default UserAppointment;
