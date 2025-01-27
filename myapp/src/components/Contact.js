import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setSubmissionStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmissionStatus('error');
        }
    };

    return (
        <div className="contact-page">
            <header className="contact-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you!</p>
                <img src="https://www.yashodahealthcare.com/blogs/wp-content/uploads/2023/03/doctor-your-kid-needs.jpg" alt="Doctors visiting a patient" />
            </header>
            <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-item">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <p>123 Main Street, City, Country</p>
                        </div>
                        <div className="info-item">
                            <FontAwesomeIcon icon={faPhone} />
                            <p>(123) 456-7890</p>
                        </div>
                        <div className="info-item">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>info@hospital.com</p>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        {submissionStatus === 'success' && <p className="success-message">Message sent successfully!</p>}
                        {submissionStatus === 'error' && <p className="error-message">Error sending message. Please try again.</p>}
                        
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
