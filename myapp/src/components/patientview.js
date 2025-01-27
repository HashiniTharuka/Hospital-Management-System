// src/components/Patients_view.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Patients_view.css'; // Ensure you have appropriate styles in this file
import PatientCard from './PatientCard';

const Patients_view = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/patients')
            .then(response => setPatients(response.data))
            .catch(error => console.error('Error fetching patients:', error));
    }, []);

    return (
        <div className='patients-view'>
            

            <div className='patients-section'>
                <h3>Patients ({patients.length})</h3>
                <div className="patient-list">
                    {patients.map(patient => (
                        <PatientCard
                            key={patient._id}
                            patient={patient}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Patients_view;
