// Footer.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3 className="footer-title">About TARORA Hospital</h3>
          <p>
            At TARORA Hospital, we combine compassionate care with cutting-edge
            technology to ensure the best outcomes for our patients. Your health
            is our priority.
          </p>
          <div className="footer-hours">
            <FontAwesomeIcon icon={faClock} />{" "}
            <span>Open 24/7 for Emergency Care</span>
          </div>
        </div>

        <div className="footer-section contact">
          <h3 className="footer-title">Contact Us</h3>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +1 234 567 890
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> info@tarorahospital.com
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> 1234 Hospital St, City,
            Country
          </p>
        </div>

        <div className="footer-section quick-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li>
              <a href="#services">Our Services</a>
            </li>
            <li>
              <a href="#team">Meet the Doctors</a>
            </li>
            <li>
              <a href="#appointments">Book an Appointment</a>
            </li>
            <li>
              <a href="#faq">FAQs</a>
            </li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3 className="footer-title">Stay Connected</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 TARORA Hospital. All Rights Reserved.</p>
        <p>Designed with ❤️ by Hashini Tharuka</p>
      </div>
    </footer>
  );
};

export default Footer;
