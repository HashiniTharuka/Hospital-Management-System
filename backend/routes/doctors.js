const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// GET all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (err) {
    res.status(500).json({ message: "Error fetching doctors", error: err.message });
  }
});

// POST a new doctor
router.post('/add', async (req, res) => {
  const { name, specialty, availability, imageUrl } = req.body;

  const newDoctor = new Doctor({
    name,
    specialty,
    availability,
    imageUrl,
  });

  try {
    const savedDoctor = await newDoctor.save();
    res.status(201).json(savedDoctor);
  } catch (err) {
    res.status(400).json({ message: "Failed to add doctor", error: err.message });
  }
});

// GET a doctor by ID
router.get('/:id', async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.status(200).json(doctor);
  } catch (err) {
    res.status(500).json({ message: "Error fetching doctor", error: err.message });
  }
});

// DELETE a doctor by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!deletedDoctor) return res.status(404).json({ message: "Doctor not found" });
    res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting doctor", error: err.message });
  }
});

// PUT (update) a doctor by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDoctor) return res.status(404).json({ message: "Doctor not found" });
    res.status(200).json(updatedDoctor);
  } catch (err) {
    res.status(400).json({ message: "Error updating doctor", error: err.message });
  }
});

module.exports = router;
