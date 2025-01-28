import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Doctors_view.css"; // Ensure this file styles your doctor cards properly

const DoctorView = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/doctors") // Fetch doctors from your API
      .then((response) => {
        setDoctors(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load doctors. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading doctors...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="doctor-view-page">
      <header className="doctor-view-header">
        <h1>Meet Our Expert Doctors</h1>
        <p>
          Discover skilled and compassionate professionals dedicated to your
          healthcare needs.
        </p>
      </header>
      <div className="doctor-list">
        {doctors.map((doctor) => (
          <div className="doctor-card" key={doctor._id}>
            <div className="doctor-image-container">
              <img
                src={doctor.imageUrl || "https://via.placeholder.com/150"}
                alt={`${doctor.name}'s photo`}
                className="doctor-image"
              />
            </div>

            <div className="doctor-details">
              <h2>{doctor.name}</h2>
              <p>
                <strong>Specialty:</strong> {doctor.specialty}
              </p>
              <p>
                <strong>Availability:</strong> {doctor.availability.date} (
                {doctor.availability.timeRange})
              </p>
              <p>
                <strong>Joined:</strong>{" "}
                {new Date(doctor.dateAdded).toLocaleDateString()}
              </p>
            </div>

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorView;
