const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    availability: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,  // URL string for the image
        required: false
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
