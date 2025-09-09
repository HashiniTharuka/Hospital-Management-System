import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppointmentCard from './AppointmentCard';
import { FaUserMd, FaCalendarAlt } from 'react-icons/fa';
import './Appointments.css';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newAppointment, setNewAppointment] = useState({
        patientName: '',
        doctorName: '',
        date: ''
    });
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                
                // Fetch appointments and doctors in parallel
                const [appointmentsResponse, doctorsResponse] = await Promise.all([
                    axios.get('http://localhost:5000/appointments'),
                    axios.get('http://localhost:5000/doctors')
                ]);
                
                console.log('Appointments fetched:', appointmentsResponse.data);
                console.log('Doctors fetched:', doctorsResponse.data);
                
                setAppointments(appointmentsResponse.data);
                setDoctors(doctorsResponse.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to load data. Please try again later.');
                setLoading(false);
            }
        };
        
        fetchData();
    }, []);

    const handleAddAppointment = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/appointments/add', newAppointment)
            .then(response => {
                setAppointments([...appointments, response.data]);
                setNewAppointment({ patientName: '', doctorName: '', date: '' });
            })
            .catch(error => console.error('Error adding appointment:', error));
    };

    const handleUpdateAppointment = (id, e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/appointments/update/${id}`, selectedAppointment)
            .then(response => {
                const updateApp = { ...selectedAppointment, _id: id };
                setAppointments(appointments.map(appointment => (appointment._id === id ? updateApp : appointment)));
                setSelectedAppointment(null);
                setIsEditMode(false);
            })
            .catch(error => console.error('Error updating appointment:', error));
    };

    const handleDeleteAppointment = (id) => {
        axios.delete(`http://localhost:5000/appointments/delete/${id}`)
            .then(response => setAppointments(appointments.filter(appointment => appointment._id !== id)))
            .catch(error => console.error('Error deleting appointment:', error));
    };

    const handleEditAppointment = (appointment) => {
        setSelectedAppointment(appointment);
        setIsEditMode(true);
    };

    const refreshData = () => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const [appointmentsResponse, doctorsResponse] = await Promise.all([
                    axios.get('http://localhost:5000/appointments'),
                    axios.get('http://localhost:5000/doctors')
                ]);
                
                console.log('Data refreshed - Appointments:', appointmentsResponse.data);
                console.log('Data refreshed - Doctors:', doctorsResponse.data);
                
                setAppointments(appointmentsResponse.data);
                setDoctors(doctorsResponse.data);
                setLoading(false);
            } catch (error) {
                console.error('Error refreshing data:', error);
                setError('Failed to refresh data. Please try again later.');
                setLoading(false);
            }
        };
        
        fetchData();
    };

    if (loading) {
        return (
            <div className="appointments-page">
                <div className="loading">
                    <h2>Loading appointments and doctors...</h2>
                    <p>Please wait while we fetch the latest data.</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="appointments-page">
                <div className="error">
                    <h2>Error Loading Data</h2>
                    <p>{error}</p>
                    <button onClick={() => window.location.reload()}>Retry</button>
                </div>
            </div>
        );
    }

    return (
        <div className="appointments-page">
            <header className="appointments-header">
                <h1>Manage Appointments</h1>
                <p>Keep track of all your medical appointments efficiently and effortlessly.</p>
                <img src="https://t3.ftcdn.net/jpg/03/28/44/40/360_F_328444050_AC8ydJFRJ08MqUCB1ITLm2YPIquyC9IC.jpg" alt="Medical appointments" />
                <button onClick={refreshData} className="refresh-button">
                    🔄 Refresh Data
                </button>
            </header>
            <div className="add-form">
                <h4>{isEditMode ? 'Edit Appointment' : 'Add New Appointment'} <FaUserMd /></h4>
                <form className="appointment-form" onSubmit={isEditMode ? (e) => handleUpdateAppointment(selectedAppointment._id, e) : handleAddAppointment}>
                    <div className="form-group">
                        <label>Patient Name:</label>
                        <input type="text" value={isEditMode ? selectedAppointment.patientName : newAppointment.patientName} onChange={(e) => isEditMode ? setSelectedAppointment({ ...selectedAppointment, patientName: e.target.value }) : setNewAppointment({ ...newAppointment, patientName: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Doctor Name: ({doctors.length} doctors available)</label>
                        <select value={isEditMode ? selectedAppointment.doctorName : newAppointment.doctorName} onChange={(e) => isEditMode ? setSelectedAppointment({ ...selectedAppointment, doctorName: e.target.value }) : setNewAppointment({ ...newAppointment, doctorName: e.target.value })}>
                            <option value="">Select a doctor...</option>
                            {doctors.length > 0 ? (
                                doctors.map(doctor => (
                                    <option key={doctor._id} value={doctor.name}>{doctor.name} - {doctor.specialization}</option>
                                ))
                            ) : (
                                <option value="" disabled>No doctors available. Please add doctors first.</option>
                            )}
                        </select>
                        {doctors.length === 0 && (
                            <p style={{color: 'red', fontSize: '12px', marginTop: '5px'}}>
                                No doctors found. Please add doctors in the admin panel first.
                            </p>
                        )}
                    </div>
                    <div className="form-group">
                        <label>Date: <FaCalendarAlt /></label>
                        <input type="date" value={isEditMode ? selectedAppointment.date : newAppointment.date} onChange={(e) => isEditMode ? setSelectedAppointment({ ...selectedAppointment, date: e.target.value }) : setNewAppointment({ ...newAppointment, date: e.target.value })} />
                    </div>
                    <button type="submit">{isEditMode ? 'Update Appointment' : 'Add Appointment'}</button>
                </form>
            </div>
            <div className="appointments">
                <h3>Appointments ({appointments.length})</h3>
                <div className="appointment-list">
                    {appointments.map(appointment => (
                        <AppointmentCard key={appointment._id} appointment={appointment} onEdit={handleEditAppointment} onDelete={handleDeleteAppointment} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Appointments;
