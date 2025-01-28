const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  availability: {
    date: { type: String, required: true },
    timeRange: { type: String, required: true },
  },
  imageUrl: { type: String, required: true }, // Marked as required
  dateAdded: { type: Date, default: Date.now },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
