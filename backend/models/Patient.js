const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    photoUrl: { type: String }  // Add this field
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
