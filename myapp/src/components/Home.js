// Home.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital, faUsers, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const Home = () => {
  return (
    <div className="page-content">
      <div
        className="hero-section"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/08/29/55/71/240_F_829557106_7Uo1yUwfWrSEq9CUkgwxZSavJW5hM6xp.jpg')",
        }}
      >
        <div className="hero-text glass-effect">
          <h2>Welcome to TARORA Hospital Management System</h2>
          <p>Providing exceptional care and management services.</p>
        </div>
      </div>

      <div className="features-section">
        <div className="feature glass-effect">
          <img
            src="https://img.freepik.com/free-photo/medical-banner-with-doctor-working-laptop_23-2149611211.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720396800&semt=ais_user"
            alt="Our Services"
            className="feature-image"
          />
          <div className="feature-info">
            <FontAwesomeIcon icon={faHospital} className="icon" />
            <h3>Our Services</h3>
            <p>Explore our comprehensive healthcare services tailored to your needs.</p>
          </div>
        </div>

        <div className="feature glass-effect">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/012/140/570/small_2x/group-of-medical-staff-at-hospital-handsome-doctor-in-front-of-team-free-photo.jpg"
            alt="Our Team"
            className="feature-image"
          />
          <div className="feature-info">
            <FontAwesomeIcon icon={faUsers} className="icon" />
            <h3>Our Team</h3>
            <p>Meet our dedicated team of healthcare professionals.</p>
          </div>
        </div>

        <div className="feature glass-effect">
          <img
            src="https://res-5.cloudinary.com/the-university-of-melbourne/image/upload/s--ZerWjXV5--/c_fill,f_auto,h_492,q_75,w_900/v1/pursuit-uploads/aa9/821/1a9/aa98211a967df113f68296b415e3e114ccbfbab720844f39c85603acd23c.jpg"
            alt="Appointments"
            className="feature-image"
          />
          <div className="feature-info">
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            <h3>Appointments</h3>
            <p>Manage your appointments conveniently with our online booking system.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
