import React from "react";
import "./DoctorList.css"; // Add shared styles here

const DoctorList = ({ doctors }) => {
  if (!doctors || doctors.length === 0) {
    return <p>No doctors available at the moment. Please check back later.</p>;
  }

  return (
    <div className="doctor-list">
      {doctors.map((doctor) => (
        <div className="doctor-card" key={doctor._id}>
          <img
            src={doctor.imageUrl || "https://via.placeholder.com/150"}
            alt={`${doctor.name}'s photo`}
            className="doctor-image"
          />
          <div className="doctor-details">
            <h2>{doctor.name}</h2>
            <p><strong>Specialty:</strong> {doctor.specialty}</p>
            <p>
              <strong>Availability:</strong> {doctor.availability.date} ({doctor.availability.timeRange})
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorList;
