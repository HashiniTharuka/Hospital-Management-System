// routes/appointments.js

const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

// Get all appointments (admin only) or user's own appointments
router.route('/').get(authenticateToken, (req, res) => {
	if (req.user.role === 'admin') {
		// Admin can see all appointments
		Appointment.find()
			.then(appointments => res.json(appointments))
			.catch(err => res.status(400).json('Error: ' + err));
	} else {
		// Users can only see their own appointments
		Appointment.find({ patientName: req.user.name })
			.then(appointments => res.json(appointments))
			.catch(err => res.status(400).json('Error: ' + err));
	}
});

// Add new appointment (authenticated users only)
router.route('/add').post(authenticateToken, (req, res) => {
	const { doctorName, date } = req.body;
	const patientName = req.user.name; // Use authenticated user's name
	const newAppointment = new Appointment({ patientName, doctorName, date });

	newAppointment.save()
		.then(savedAppointment => res.json(savedAppointment))
		.catch(err => res.status(400).json('Error: ' + err));
});

// Update appointment data (admin or appointment owner)
router.route('/update/:id').post(authenticateToken, (req, res) => {
	Appointment.findById(req.params.id)
		.then(appointment => {
			if (!appointment) {
				return res.status(404).json('Appointment not found');
			}
			
			// Check if user is admin or appointment owner
			if (req.user.role !== 'admin' && appointment.patientName !== req.user.name) {
				return res.status(403).json('Access denied');
			}

			appointment.doctorName = req.body.doctorName;
			appointment.date = req.body.date;

			appointment.save()
				.then(() => res.json('Appointment updated!'))
				.catch(err => res.status(400).json('Error: ' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
});

// Delete appointment (admin or appointment owner)
router.route('/delete/:id')
	.delete(authenticateToken, (req, res) => {
		Appointment.findById(req.params.id)
			.then(appointment => {
				if (!appointment) {
					return res.status(404).json('Appointment not found');
				}
				
				// Check if user is admin or appointment owner
				if (req.user.role !== 'admin' && appointment.patientName !== req.user.name) {
					return res.status(403).json('Access denied');
				}

				return Appointment.findByIdAndDelete(req.params.id);
			})
			.then(() => res.json('Appointment deleted.'))
			.catch(err => res.status(400).json('Error: ' + err));
	});

module.exports = router;
