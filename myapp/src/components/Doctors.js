import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [newDoctor, setNewDoctor] = useState({ name: '', specialty: '' });
  const [error, setError] = useState(null);

  // Fetch doctors list
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/doctors');
        setDoctors(response.data);
      } catch (err) {
        setError('Error fetching doctors: ' + err.message);
      }
    };
    fetchDoctors();
  }, []);

  // Add a new doctor
  const addDoctor = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/doctors/add', newDoctor);
      setDoctors([...doctors, response.data]);
      setNewDoctor({ name: '', specialty: '' });
    } catch (err) {
      setError('Error adding doctor: ' + err.message);
    }
  };

  return (
    <div>
      <h1>Doctors</h1>

      {/* Show error message if there is an error */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Doctors list */}
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor._id}>{doctor.name} - {doctor.specialty}</li>
        ))}
      </ul>

      {/* Add new doctor */}
      <form onSubmit={addDoctor}>
        <input
          type="text"
          placeholder="Doctor Name"
          value={newDoctor.name}
          onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Specialty"
          value={newDoctor.specialty}
          onChange={(e) => setNewDoctor({ ...newDoctor, specialty: e.target.value })}
          required
        />
        <button type="submit">Add Doctor</button>
      </form>
    </div>
  );
};

export default Doctors;
