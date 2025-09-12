import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3>TARORA Hospital</h3>
          <p>
            Delivering compassionate care and advanced healthcare solutions
            to improve the lives of our community.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>123 Main Street, City, Country</p>
          <p>Email: info@hospital.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TARORA Hospital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
