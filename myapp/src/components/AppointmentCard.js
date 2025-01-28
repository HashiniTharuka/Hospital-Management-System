// src/components/AppointmentCard.js

import React from 'react';
import PropTypes from 'prop-types';

const AppointmentCard = ({ appointment, onEdit, onDelete }) => {
  // Destructure with default values or use optional chaining to avoid errors
  const { patientName = 'Unknown Patient', doctorName = 'Unknown Doctor', date = new Date() } = appointment || {};

  return (
    <div className="appointment-card">
      <p>
        <span>Patient:</span>
        {patientName}
      </p>
      <p>
        <span>Doctor:</span>
        {doctorName}
      </p>
      <p>
        <span>Date:</span>
        {new Date(date).toLocaleDateString()}
      </p>
      <div className="btn-container">
        <button onClick={() => onEdit(appointment)}>Edit</button>
        <button onClick={() => onDelete(appointment._id)}>Delete</button>
      </div>
    </div>
  );
};

// PropTypes validation (optional but recommended)
AppointmentCard.propTypes = {
  appointment: PropTypes.shape({
    patientName: PropTypes.string,
    doctorName: PropTypes.string,
    date: PropTypes.string,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AppointmentCard;
