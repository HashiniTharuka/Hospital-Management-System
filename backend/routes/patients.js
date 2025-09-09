const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
const upload = require('../middleware/upload');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

// Get all patients (admin only)
router.get('/', authenticateToken, requireAdmin, (req, res) => {
    Patient.find()
        .then(patients => res.json(patients))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add new patient (admin only)
router.post('/add', authenticateToken, requireAdmin, (req, res) => {
    const { name, age, gender } = req.body;
    const newPatient = new Patient({ name, age, gender, photoUrl: '' });

    newPatient.save()
        .then(savedPatient => res.json(savedPatient))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update patient data (admin only)
router.post('/update/:id', authenticateToken, requireAdmin, (req, res) => {
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

// Delete patient by ID (admin only)
router.delete('/delete/:id', authenticateToken, requireAdmin, (req, res) => {
    Patient.findByIdAndDelete(req.params.id)
        .then(patient => {
            if (!patient) return res.status(404).json('Patient not found');
            res.json('Patient deleted!');
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Upload photo (admin only)
router.post('/upload', authenticateToken, requireAdmin, upload.single('photo'), (req, res) => {
    if (!req.file) return res.status(400).json('No file uploaded');

    const photoUrl = `/uploads/${req.file.filename}`; // Updated to use the relative URL

    res.json({ photoUrl });
});

module.exports = router;
