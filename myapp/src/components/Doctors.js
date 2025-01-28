import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Doctors.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [newDoctor, setNewDoctor] = useState({
    name: "",
    specialty: "",
    availability: {
      date: "",
      timeRange: "",
    },
    imageUrl: "",
  });
  const [editingDoctorId, setEditingDoctorId] = useState(null);

  // Fetch doctors
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/doctors");
        setDoctors(response.data);
      } catch (err) {
        console.error("Error fetching doctors:", err);
      }
    };
    fetchDoctors();
  }, []);

  // Save or Update a doctor
  const saveDoctor = async (e) => {
    e.preventDefault();
    if (
      !newDoctor.name ||
      !newDoctor.specialty ||
      !newDoctor.availability.date ||
      !newDoctor.availability.timeRange ||
      !newDoctor.imageUrl
    ) {
      alert("Please fill all fields!");
      return;
    }

    try {
      if (editingDoctorId) {
        const response = await axios.put(
          `http://localhost:5000/doctors/${editingDoctorId}`,
          newDoctor
        );
        setDoctors((prev) =>
          prev.map((doc) =>
            doc._id === editingDoctorId ? response.data : doc
          )
        );
        setEditingDoctorId(null);
      } else {
        const response = await axios.post(
          "http://localhost:5000/doctors/add",
          newDoctor
        );
        setDoctors([...doctors, response.data]);
      }
      setNewDoctor({
        name: "",
        specialty: "",
        availability: { date: "", timeRange: "" },
        imageUrl: "",
      });
    } catch (err) {
      console.error("Error saving doctor:", err);
    }
  };

  // Delete a doctor
  const deleteDoctor = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/doctors/${id}`);
      setDoctors(doctors.filter((doc) => doc._id !== id));
    } catch (err) {
      console.error("Error deleting doctor:", err);
    }
  };

  // Edit a doctor
  const startEditing = (doctor) => {
    setNewDoctor(doctor);
    setEditingDoctorId(doctor._id);
  };

  return (
    <div className="doctors-page">
      <h1>Manage Doctors</h1>

      <form onSubmit={saveDoctor} className="doctor-form">
        <input
          type="text"
          placeholder="Name"
          value={newDoctor.name}
          onChange={(e) =>
            setNewDoctor({ ...newDoctor, name: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Specialty"
          value={newDoctor.specialty}
          onChange={(e) =>
            setNewDoctor({ ...newDoctor, specialty: e.target.value })
          }
          required
        />
        <input
          type="date"
          value={newDoctor.availability.date}
          onChange={(e) =>
            setNewDoctor({
              ...newDoctor,
              availability: { ...newDoctor.availability, date: e.target.value },
            })
          }
          required
        />
        <input
          type="text"
          placeholder="Time Range"
          value={newDoctor.availability.timeRange}
          onChange={(e) =>
            setNewDoctor({
              ...newDoctor,
              availability: {
                ...newDoctor.availability,
                timeRange: e.target.value,
              },
            })
          }
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newDoctor.imageUrl}
          onChange={(e) =>
            setNewDoctor({ ...newDoctor, imageUrl: e.target.value })
          }
          required
        />
        <button type="submit" className="submit-btn">
          {editingDoctorId ? "Update Doctor" : "Add Doctor"}
        </button>
      </form>

      <div className="doctor-list">
        <h2>Doctors List</h2>
        {doctors.map((doctor) => (
          <div key={doctor._id} className="doctor-card">
            <img
              src={doctor.imageUrl || "https://via.placeholder.com/150"}
              alt={doctor.name}
              className="doctor-image"
            />
            <div className="doctor-details">
              <h3>{doctor.name}</h3>
              <p>Specialty: {doctor.specialty}</p>
              <p>
                Availability: {doctor.availability.date} (
                {doctor.availability.timeRange})
              </p>
            </div>
            <div className="doctor-actions">
              <button
                className="edit-btn"
                onClick={() => startEditing(doctor)}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteDoctor(doctor._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
