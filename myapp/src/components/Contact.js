import React from "react";
import "./Contact.css";
import contactBanner from '../assets/contact2.png';   // adjust path if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contact = () => {
  return (
    <div className="contact-page">
      {/* ===== Banner Section ===== */}
      <div
        className="contact-hero"
        style={{
          backgroundImage:
            `url(${contactBanner})`,
        }}
      >


        <div className="contact-hero-overlay">
          <h1>Contact TARORA Hospital</h1>
          <p>We’re here to assist you 24/7 with your healthcare needs.</p>
        </div>
      </div>

      {/* ===== Contact Section ===== */}
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch With Us</h2>
        <div className="contact-wrapper">
          {/* Contact Form */}
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Reach Us At</h3>
            <p>
              <strong>📍 Address:</strong> 123 TARORA Street, City, Country
            </p>
            <p>
              <strong>📞 Phone:</strong> +94 71 123 4567
            </p>
            <p>
              <strong>✉️ Email:</strong> contact@tarorahms.com
            </p>
            <div className="social-links">
              <a href="#">🌐</a>
              <a href="#">📘</a>
              <a href="#">🐦</a>
              <a href="#">📸</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
