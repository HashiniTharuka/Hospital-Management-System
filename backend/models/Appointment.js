// models/Appointment.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const appointmentSchema = new Schema({
	patientName: { type: String, required: true },
	doctorName: { type: String, required: true },
	date: { type: Date, required: true },
	time: { type: String, required: false },
	status: { type: String, default: 'Scheduled', enum: ['Scheduled', 'Completed', 'Cancelled'] },
	notes: { type: String, required: false },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
