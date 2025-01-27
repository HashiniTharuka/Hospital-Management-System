import React, { useState, useEffect } from 'react';
import { FaUserMd, FaCalendarAlt } from 'react-icons/fa';

const AppointmentForm = ({ onAddAppointment }) => {
    const [patients, setPatients] = useState([]);
    const [newAppointment, setNewAppointment] = useState({
        patientName: '',
        doctorName: '',
        date: ''
    });

    useEffect(() => {
        // Fetch patients or set default list
        const defaultPatients = [
            { name: 'John Doe' },
            { name: 'Jane Smith' },
            { name: 'Michael Johnson' },
            { name: 'Emily Davis' },
            { name: 'Robert Wilson' },
            { name: 'Sarah Brown' },
            { name: 'David Lee' }
        ];
        setPatients(defaultPatients);
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
                        {patients.map((patient, index) => (
                            <option key={index} value={patient.name}>{patient.name}</option>
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
