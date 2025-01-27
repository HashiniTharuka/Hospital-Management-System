import React from 'react';
import './Detail.css'; // Import CSS for PediatricsDetail styling

const PediatricsDetail = () => {
    return (
        <div className="page-content">
            <h2>Pediatrics Services</h2>
            <img
                src="https://st.depositphotos.com/3216063/4439/i/450/depositphotos_44394659-stock-photo-ent-child.jpg"
                alt="Pediatrics Services"
                className="pediatrics-image"
            />
            <p>
                Our pediatrics department offers comprehensive healthcare services for children, ensuring their well-being from infancy through adolescence.
            </p>
            <h3>Services Offered:</h3>
            <ul>
                <li>Well-child check-ups and vaccinations</li>
                <li>Management of childhood illnesses and chronic conditions</li>
                <li>Developmental assessments and behavioral consultations</li>
                <li>Emergency pediatric care</li>
            </ul>
        </div>
    );
}

export default PediatricsDetail;
