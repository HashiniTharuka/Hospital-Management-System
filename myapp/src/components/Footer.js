import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>About TARORA Hospital</h3>
                    <p>TARORA Hospital is committed to providing exceptional healthcare services with a patient-centric approach. Our state-of-the-art facilities and dedicated team ensure the best possible care for our patients.</p>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p><FontAwesomeIcon icon={faPhone} /> +1 234 567 890</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> info@tarorahospital.com</p>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 1234 Hospital St, City, Country</p>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#services">Our Services</a></li>
                        <li><a href="#team">Our Team</a></li>
                        <li><a href="#appointments">Appointments</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 TARORA Hospital | Designed by YourName
            </div>
        </footer>
    );
}

export default Footer;
