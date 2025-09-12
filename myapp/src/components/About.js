import React from "react";
import "./About.css";
import teamImg from "../assets/team.jpg";
import missionImg from "../assets/mission.jpg";
import facilityImg from "../assets/facility.jpg";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Banner */}
      <div className="about-hero">
        <div className="overlay"></div>
        <h1>About TARORA Hospital</h1>
        <p>Compassion • Innovation • Excellence in Healthcare</p>
      </div>

      {/* Cards Section */}
      <div className="about-cards">
        <div className="about-card">
          <div className="card-image">
            <img src={missionImg} alt="Our Mission" />
          </div>
          <div className="card-content">
            <h3>Our Mission</h3>
            <p>
              At TARORA Hospital Management System, our mission is to provide
              exceptional healthcare services with compassion and dedication. We
              strive to improve the health and well-being of our community
              through innovative medical practices and a patient-centered
              approach.
            </p>
          </div>
        </div>

        <div className="about-card">
          <div className="card-image">
            <img src={facilityImg} alt="Our Facilities" />
          </div>
          <div className="card-content">
            <h3>Our Facilities</h3>
            <p>
              Our state-of-the-art facilities are equipped with the latest
              medical technologies to ensure the highest quality of care. From
              advanced diagnostic tools to modern surgical suites, we are
              prepared to meet the diverse needs of our patients.
            </p>
          </div>
        </div>

        <div className="about-card">
          <div className="card-image">
            <img src={teamImg} alt="Our Team" />
          </div>
          <div className="card-content">
            <h3>Our Team</h3>
            <p>
              Our dedicated team of healthcare professionals includes
              experienced doctors, nurses, and support staff who are committed
              to delivering personalized and effective care. We believe in
              continuous learning and development to stay at the forefront of
              medical advancements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
