import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="page-content">
            <h2>About Us</h2>
            <div className="about-cards">
                <div className="about-card">
                    <div className="card-image">
                        <img src="https://goldenplains.org/wp-content/uploads/2019/01/qtq50-tHZIJO-e1548779194894.jpeg" alt="Our Team" />
                    </div>
                    <div className="card-content">
                        <h3>Our Mission</h3>
                        <p>
                            At TARORA Hospital Management System, our mission is to provide exceptional healthcare services with compassion and dedication. We strive to improve the health and well-being of our community through innovative medical practices and a patient-centered approach.
                        </p>
                    </div>
                </div>
                <div className="about-card">
                    <div className="card-image">
                        <img src="https://media.istockphoto.com/id/120672387/photo/care.jpg?s=612x612&w=0&k=20&c=r0LYgFlVJ3D9q_xa-IK2-2mpvXuAmtOr3lYwDLGyuuw=" alt="Our Facilities" />
                    </div>
                    <div className="card-content">
                        <h3>Our Facilities</h3>
                        <p>
                            Our state-of-the-art facilities are equipped with the latest medical technologies to ensure the highest quality of care. From advanced diagnostic tools to modern surgical suites, we are prepared to meet the diverse needs of our patients.
                        </p>
                    </div>
                </div>
                <div className="about-card">
                    <div className="card-image">
                        <img src="https://media.istockphoto.com/id/512278456/photo/group-of-doctors-at-the-hospital.jpg?s=612x612&w=0&k=20&c=EPPHeKuq0YabUC-QCWlAOhTfIZAAPtrwQ96V_Wp0oKY=" alt="Our Care" />
                    </div>
                    <div className="card-content">
                        <h3>Our Team</h3>
                        <p>
                            Our dedicated team of healthcare professionals includes experienced doctors, nurses, and support staff who are committed to delivering personalized and effective care. We believe in continuous learning and development to stay at the forefront of medical advancements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
