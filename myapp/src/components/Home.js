// Home.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital, faUsers, faCalendarCheck, faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>TARORA Hospital Management System</h1>
          <p>Innovation • Care • Excellence</p>
          <button className="cta-button">Explore Services</button>
        </div>

        {/* Floating icons */}
        <div className="floating-icons">
          <FontAwesomeIcon icon={faHospital} className="float-icon" />
          <FontAwesomeIcon icon={faUsers} className="float-icon" />
          <FontAwesomeIcon icon={faCalendarCheck} className="float-icon" />
          <FontAwesomeIcon icon={faHeartbeat} className="float-icon" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <FontAwesomeIcon icon={faHospital} className="feature-icon" />
          <h3>Advanced Facilities</h3>
          <p>World-class infrastructure and modern technology for quality healthcare.</p>
        </div>

        <div className="feature-card">
          <FontAwesomeIcon icon={faUsers} className="feature-icon" />
          <h3>Expert Doctors</h3>
          <p>Meet our dedicated team of healthcare professionals ready to serve you.</p>
        </div>

        <div className="feature-card">
          <FontAwesomeIcon icon={faCalendarCheck} className="feature-icon" />
          <h3>Easy Appointments</h3>
          <p>Book, manage, and track your appointments with just a few clicks.</p>
        </div>

        <div className="feature-card">
          <FontAwesomeIcon icon={faHeartbeat} className="feature-icon" />
          <h3>24/7 Emergency</h3>
          <p>Round-the-clock emergency support to ensure timely treatment.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
