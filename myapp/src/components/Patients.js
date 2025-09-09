// src/components/Patients.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Patients.css';
import PatientCard from './PatientCard';

const Patients = () => {
    const [patients, setPatients] = useState([]);
    const [newPatient, setNewPatient] = useState({ name: '', age: '', gender: '', photoUrl: '' });
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/api/patients')
            .then(response => setPatients(response.data))
            .catch(error => console.error('Error fetching patients:', error));
    }, []);

    const handleAddPatient = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/patients/add', newPatient)
            .then(response => {
                setPatients([...patients, response.data]);
                setNewPatient({ name: '', age: '', gender: '', photoUrl: '' });
            })
            .catch(error => console.error('Error adding patient:', error));
    };

    const handleUpdatePatient = (id, e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/api/patients/update/${id}`, selectedPatient)
            .then(response => {
                const updatePat = { ...selectedPatient, _id: id };
                setPatients(patients.map(patient => (patient._id === id ? updatePat : patient)));
                setSelectedPatient(null);
                setIsEditMode(false); // Switch back to Add mode
            })
            .catch(error => console.error('Error updating patient:', error));
    };

    const handleDeletePatient = (id) => {
        axios.delete(`http://localhost:5000/api/patients/delete/${id}`)
            .then(response => {
                setSelectedPatient(null);
                setPatients(patients.filter(patient => patient._id !== id));
            })
            .catch(error => console.error('Error deleting patient:', error));
    };

    const handleEditPatient = (patient) => {
        setSelectedPatient(patient);
        setIsEditMode(true); // Switch to Edit mode
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
            const formData = new FormData();
            formData.append('photo', file);

            axios.post('http://localhost:5000/api/patients/upload', formData)
                .then(response => {
                    const photoUrl = response.data.photoUrl;
                    if (isEditMode) {
                        setSelectedPatient({ ...selectedPatient, photoUrl });
                    } else {
                        setNewPatient({ ...newPatient, photoUrl });
                    }
                })
                .catch(error => console.error('Error uploading photo:', error));
        } else {
            alert('Please upload a valid JPG or PNG image.');
        }
    };

    return (
        <div className='patient-main'>
            <div className='header'>
                <h2>Collect Patients Information</h2>
                <p>Welcome to the patients' information page. Here you can add, edit, and manage patient details efficiently.</p>
                <img src="https://www.yashodahealthcare.com/blogs/wp-content/uploads/2023/03/doctor-your-kid-needs.jpg" alt="Patients" className="header-image" />
            </div>

            <div className='form-sections'>
                <h4>{isEditMode ? 'Edit Patient' : 'Add New Patient'}</h4>
                <form onSubmit={isEditMode ? (e) => handleUpdatePatient(selectedPatient._id, e) : handleAddPatient}>
                    <label>Name: </label>
                    <input
                        type="text"
                        value={isEditMode ? selectedPatient.name : newPatient.name}
                        onChange={(e) => isEditMode ? setSelectedPatient({ ...selectedPatient, name: e.target.value }) : setNewPatient({ ...newPatient, name: e.target.value })}
                    />
                    <br />
                    <label>Age: </label>
                    <input
                        type="text"
                        value={isEditMode ? selectedPatient.age : newPatient.age}
                        onChange={(e) => isEditMode ? setSelectedPatient({ ...selectedPatient, age: e.target.value }) : setNewPatient({ ...newPatient, age: e.target.value })}
                    />
                    <br />
                    <label>Gender: </label>
                    <input
                        type="text"
                        value={isEditMode ? selectedPatient.gender : newPatient.gender}
                        onChange={(e) => isEditMode ? setSelectedPatient({ ...selectedPatient, gender: e.target.value }) : setNewPatient({ ...newPatient, gender: e.target.value })}
                    />
                    <br />
                    <label>Photo: </label>
                    <input
                        type="file"
                        accept="image/jpeg, image/png"
                        onChange={handlePhotoUpload}
                    />
                    <br />
                    <button type="submit">{isEditMode ? 'Update Patient' : 'Add Patient'}</button>
                </form>
            </div>

            <div className='patients-section'>
                <h3 style={{ textAlign: "center" }}>Patients ({patients.length})</h3>
                <div className="patient-list">
                    {patients.map(patient => (
                        <PatientCard
                            key={patient._id}
                            patient={patient}
                            onEdit={handleEditPatient}
                            onDelete={handleDeletePatient}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Patients;
