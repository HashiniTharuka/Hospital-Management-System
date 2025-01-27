import React from 'react';
import './Detail.css'; // Import CSS for OrthopedicsDetail styling

const OrthopedicsDetail = () => {
    return (
        <div className="page-content">
            <h2>Orthopedics Services</h2>
            <img
                src="https://www.amicarehospital.in/blog/wp-content/uploads/2020/12/orthopedic-doctor-specialist.jpg"
                alt="Orthopedics Services"
                className="orthopedics-image"
            />
            <p>
                Our orthopedic department specializes in the diagnosis and treatment of musculoskeletal disorders, promoting mobility and joint health.
            </p>
            <h3>Services Offered:</h3>
            <ul>
                <li>Joint replacement surgeries</li>
                <li>Sports medicine and injury rehabilitation</li>
                <li>Spinal surgeries and treatments</li>
                <li>Orthopedic trauma care</li>
            </ul>
        </div>
    );
}

export default OrthopedicsDetail;
