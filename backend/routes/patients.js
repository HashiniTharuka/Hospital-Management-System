const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
const upload = require('../middleware/upload'); // Import the upload middleware

// Get all patients
router.get('/', (req, res) => {
    Patient.find()
        .then(patients => res.json(patients))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add new patient
router.post('/add', (req, res) => {
    const { name, age, gender } = req.body;
    const newPatient = new Patient({ name, age, gender, photoUrl: '' });

    newPatient.save()
        .then(savedPatient => res.json(savedPatient))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update patient data
router.post('/update/:id', (req, res) => {
    Patient.findById(req.params.id)
        .then(patient => {
            if (!patient) return res.status(404).json('Patient not found');

            patient.name = req.body.name;
            patient.age = req.body.age;
            patient.gender = req.body.gender;
            patient.photoUrl = req.body.photoUrl;

            patient.save()
                .then(() => res.json('Patient updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete patient by ID
router.delete('/delete/:id', (req, res) => {
    Patient.findByIdAndDelete(req.params.id)
        .then(patient => {
            if (!patient) return res.status(404).json('Patient not found');
            res.json('Patient deleted!');
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Upload photo
router.post('/upload', upload.single('photo'), (req, res) => {
    if (!req.file) return res.status(400).json('No file uploaded');

    const photoUrl = `/uploads/${req.file.filename}`; // Updated to use the relative URL

    res.json({ photoUrl });
});

module.exports = router;
