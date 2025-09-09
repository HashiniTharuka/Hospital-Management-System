// src/components/AppointmentCard.js

import React from 'react';
import PropTypes from 'prop-types';

const AppointmentCard = ({ id, patientName, doctorName, date, onEdit, onDelete }) => {
  return (
    <div className="appointment-card">
      <p>
        <span>Patient:</span>
        {patientName || 'Unknown Patient'}
      </p>
      <p>
        <span>Doctor:</span>
        {doctorName || 'Unknown Doctor'}
      </p>
      <p>
        <span>Date:</span>
        {date ? new Date(date).toLocaleDateString() : 'No date set'}
      </p>
      {(onEdit || onDelete) && (
        <div className="btn-container">
          {onEdit && <button onClick={() => onEdit({ id, patientName, doctorName, date })}>Edit</button>}
          {onDelete && <button onClick={() => onDelete(id)}>Delete</button>}
        </div>
      )}
    </div>
  );
};

// PropTypes validation (optional but recommended)
AppointmentCard.propTypes = {
  id: PropTypes.string,
  patientName: PropTypes.string,
  doctorName: PropTypes.string,
  date: PropTypes.string,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default AppointmentCard;
