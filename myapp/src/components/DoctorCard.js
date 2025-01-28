// DoctorCard.js
import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({ doctor }) => {
  const { name, specialization, availability, imageUrl } = doctor || {};

  return (
    <div>
      <h2>{name}</h2>
      <p>{specialization}</p>
      <p>{availability}</p>
      <img 
        src={imageUrl || 'https://via.placeholder.com/150'} 
        alt={name} 
      />
    </div>
  );
};

export default DoctorCard; // This line ensures DoctorCard is exported as the default export
