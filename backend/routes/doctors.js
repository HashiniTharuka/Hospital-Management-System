const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// Route to add a new doctor
router.post('/add', async (req, res) => {
    try {
        const { name, specialization, availability, description, image } = req.body;

        // Set a default image if the image URL is not provided
        const imageUrl = image || 'https://via.placeholder.com/150'; // Default image URL

        const newDoctor = new Doctor({
            name,
            specialization,
            availability,
            description,
            image: imageUrl,  // Use the image URL (either from the client or default)
        });

        await newDoctor.save();
        res.status(201).json(newDoctor);  // Respond with the newly created doctor
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to add doctor' });  // Handle errors
    }
});

// Route to get all doctors
router.get('/', async (req, res) => {
    try {
        const doctors = await Doctor.find();  // Retrieve all doctors from the database
        res.json(doctors);  // Respond with the list of doctors
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch doctors' });  // Handle errors
    }
});

// Route to update a doctor by ID (using PUT instead of POST)
router.put('/update/:id', async (req, res) => {
    try {
        const { name, specialization, availability, description, image } = req.body;
        const imageUrl = image || 'https://via.placeholder.com/150';  // Use the provided image or default one

        // Find doctor by ID and update it
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            req.params.id,
            { name, specialization, availability, description, image: imageUrl },
            { new: true }  // Return the updated doctor object
        );

        if (!updatedDoctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }

        res.status(200).json(updatedDoctor);  // Respond with the updated doctor
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update doctor' });  // Handle errors
    }
});

// Route to delete a doctor by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);

        if (!deletedDoctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }

        res.status(200).json({ message: 'Doctor deleted successfully' });  // Respond with success message
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete doctor' });  // Handle errors
    }
});

module.exports = router;
