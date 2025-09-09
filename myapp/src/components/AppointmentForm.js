import React, { useState, useEffect } from 'react';
import { FaUserMd, FaCalendarAlt } from 'react-icons/fa';
import axios from 'axios';

const AppointmentForm = ({ onAddAppointment }) => {
    const [doctors, setDoctors] = useState([]);
    const [newAppointment, setNewAppointment] = useState({
        patientName: '',
        doctorName: '',
        date: ''
    });

    useEffect(() => {
        // Fetch doctors from API
        axios.get('http://localhost:5000/doctors')
            .then(response => setDoctors(response.data))
            .catch(error => console.error('Error fetching doctors:', error));
    }, []);

    const handleAddAppointment = (e) => {
        e.preventDefault();
        onAddAppointment(newAppointment);
        setNewAppointment({ patientName: '', doctorName: '', date: '' });
    };

    return (
        <div className="appointment-form-container">
            <h4>Add New Appointment <FaUserMd /></h4>
            <form className="appointment-form" onSubmit={handleAddAppointment}>
                <div className="form-group">
                    <label>Patient Name:</label>
                    <input type="text" value={newAppointment.patientName} onChange={(e) => setNewAppointment({ ...newAppointment, patientName: e.target.value })} />
                </div>
                <div className="form-group">
                    <label>Doctor Name:</label>
                    <select value={newAppointment.doctorName} onChange={(e) => setNewAppointment({ ...newAppointment, doctorName: e.target.value })}>
                        <option value="">Select a doctor...</option>
                        {doctors.map((doctor, index) => (
                            <option key={index} value={doctor.name}>{doctor.name} - {doctor.specialization}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Date: <FaCalendarAlt /></label>
                    <input type="date" value={newAppointment.date} onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })} />
                </div>
                <button type="submit">Add Appointment</button>
            </form>
        </div>
    );
};

export default AppointmentForm;
