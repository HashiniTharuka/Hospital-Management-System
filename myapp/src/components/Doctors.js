import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorCard from './DoctorCard';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [newDoctor, setNewDoctor] = useState({ name: '', specialty: '', availability: '', description: '', imageUrl: '' });
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        axios
            .get('http://localhost:5000/doctors')
            .then(response => setDoctors(response.data))
            .catch(error => console.error('Error fetching doctors:', error));
    }, []);

    const handleAddDoctor = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/doctors/add', newDoctor)
            .then(response => {
                setDoctors([...doctors, response.data]);
                setNewDoctor({ name: '', specialty: '', availability: '', description: '', imageUrl: '' });
            })
            .catch(error => console.error('Error adding doctor:', error));
    };

    const handleUpdateDoctor = (id, e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:5000/doctors/update/${id}`, selectedDoctor)
            .then(response => {
                const updatedDoctor = { ...selectedDoctor, _id: id };
                setDoctors(doctors.map(doctor => (doctor._id === id ? updatedDoctor : doctor)));
                setSelectedDoctor(null);
                setIsEditMode(false);
            })
            .catch(error => console.error('Error updating doctor:', error));
    };

    const handleDeleteDoctor = (id) => {
        axios
            .delete(`http://localhost:5000/doctors/delete/${id}`)
            .then(response => setDoctors(doctors.filter(doctor => doctor._id !== id)))
            .catch(error => console.error('Error deleting doctor:', error));
    };

    const handleEditDoctor = (doctor) => {
        setSelectedDoctor(doctor);
        setIsEditMode(true);
    };

    return (
        <div className="doctors-page-container">
            <div className="doctors-page">
                <header className="doctors-header"></header>
                <div className='form-sections'>
                    <h4>{isEditMode ? 'Edit Doctor' : 'Add New Doctor'}</h4>
                    <form onSubmit={isEditMode ? (e) => handleUpdateDoctor(selectedDoctor._id, e) : handleAddDoctor}>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={isEditMode ? selectedDoctor.name : newDoctor.name}
                            onChange={(e) => isEditMode ? setSelectedDoctor({ ...selectedDoctor, name: e.target.value }) : setNewDoctor({ ...newDoctor, name: e.target.value })}
                        />
                        <label>Specialty:</label>
                        <input
                            type="text"
                            value={isEditMode ? selectedDoctor.specialty : newDoctor.specialty}
                            onChange={(e) => isEditMode ? setSelectedDoctor({ ...selectedDoctor, specialty: e.target.value }) : setNewDoctor({ ...newDoctor, specialty: e.target.value })}
                        />
                        <label>Availability:</label>
                        <input
                            type="text"
                            value={isEditMode ? selectedDoctor.availability : newDoctor.availability}
                            onChange={(e) => isEditMode ? setSelectedDoctor({ ...selectedDoctor, availability: e.target.value }) : setNewDoctor({ ...newDoctor, availability: e.target.value })}
                        />
                        <label>Description:</label>
                        <textarea
                            value={isEditMode ? selectedDoctor.description : newDoctor.description}
                            onChange={(e) => isEditMode ? setSelectedDoctor({ ...selectedDoctor, description: e.target.value }) : setNewDoctor({ ...newDoctor, description: e.target.value })}
                        />
                        <label>Image URL:</label>
                        <input
                            type="url"
                            value={isEditMode ? selectedDoctor.imageUrl : newDoctor.imageUrl}
                            onChange={(e) => isEditMode ? setSelectedDoctor({ ...selectedDoctor, imageUrl: e.target.value }) : setNewDoctor({ ...newDoctor, imageUrl: e.target.value })}
                        />
                        <button type="submit">{isEditMode ? 'Update Doctor' : 'Add Doctor'}</button>
                    </form>
                </div>
                <div className='doctors-section'>
                    <h3>Doctors ({doctors.length})</h3>
                    <div className="doctor-list">
                        {doctors.map(doctor => (
                            <DoctorCard
                                key={doctor._id}
                                id={doctor._id}
                                name={doctor.name}
                                specialization={doctor.specialty}
                                availability={doctor.availability}
                                description={doctor.description}
                                image={doctor.imageUrl}
                                dateAdded={doctor.dateAdded}
                                onEdit={() => handleEditDoctor(doctor)}
                                onDelete={() => handleDeleteDoctor(doctor._id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;
