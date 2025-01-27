import React from 'react';
import PropTypes from 'prop-types';

const PatientCard = ({ patient, onEdit, onDelete }) => {
    const photoUrl = patient.photoUrl ? `http://localhost:5000/uploads/${patient.photoUrl}` : 'placeholder-image-url';

    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px',
        textAlign: 'center',
        width: '200px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    };

    const imageStyle = {
        width: '100%',
        height: 'auto',
        borderRadius: '5px'
    };

    const btnContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px'
    };

    const buttonStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '3px',
        cursor: 'pointer'
    };

    return (
        <div style={cardStyle}>
            <img src={photoUrl} alt="Patient" style={imageStyle} />
            <h4>{patient.name}</h4>
            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>
            <div style={btnContainerStyle}>
                <button style={buttonStyle} onClick={() => onEdit(patient)}>Edit</button>
                <button style={buttonStyle} onClick={() => onDelete(patient._id)}>Delete</button>
            </div>
        </div>
    );
};

PatientCard.propTypes = {
    patient: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        photoUrl: PropTypes.string.isRequired,
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default PatientCard;
