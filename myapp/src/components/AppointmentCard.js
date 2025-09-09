// src/components/AppointmentCard.js

import React from 'react';

const AppointmentCard = ({ appointment, onEdit, onDelete }) => {
	return (
		<div className="appointment-card">
			<div className="appointment-info">
				<p>
					<span>Patient:</span>
					{appointment.patientName}
				</p>
				<p>
					<span>Doctor:</span>
					{appointment.doctorName}
				</p>
				<p>
					<span>Date:</span>
					{new Date(appointment.date).toLocaleDateString()}
				</p>
				{appointment.time && (
					<p>
						<span>Time:</span>
						{appointment.time}
					</p>
				)}
				<p>
					<span>Status:</span>
					<span className={`status status-${appointment.status?.toLowerCase() || 'scheduled'}`}>
						{appointment.status || 'Scheduled'}
					</span>
				</p>
				{appointment.notes && (
					<p>
						<span>Notes:</span>
						{appointment.notes}
					</p>
				)}
			</div>
			<div className='btn-container'>
				{onEdit && (
					<button onClick={() => onEdit(appointment)}>
						Edit
					</button>
				)}
				{onDelete && (
					<button onClick={() => onDelete(appointment._id)}>
						Delete
					</button>
				)}
			</div>
		</div>
	);
};

export default AppointmentCard;
