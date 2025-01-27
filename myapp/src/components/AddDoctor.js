import React, { useState } from 'react';
import axios from 'axios';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [availability, setAvailability] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/doctors/add', {
                name,
                specialization,
                availability,
                description,
                image,
            });

            console.log('Doctor added:', response.data);
        } catch (error) {
            console.error('Error adding doctor:', error);
        }
    };

    return (
        <div>
            <h2>Add New Doctor</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
                <input type="text" placeholder="Availability" value={availability} onChange={(e) => setAvailability(e.target.value)} />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
                <button type="submit">Add Doctor</button>
            </form>
        </div>
    );
};

export default AddDoctor;
