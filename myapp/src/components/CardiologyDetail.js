import React from 'react';
import './Detail.css'; // Make sure this path is correct

const CardiologyDetail = () => {
    return (
        <div className="page-content">
            <h2>Cardiology Services</h2>
            <img 
                src="https://medmonks.com/home/img/blog/cardiologist-india.jpg" 
                alt="Cardiology" 
                className="cardiology-image" 
            />
            <p>
                Cardiology involves the diagnosis and treatment of heart diseases. Our advanced cardiology services focus on maintaining heart health through innovative techniques and personalized care.
            </p>
            <h3>Services Offered:</h3>
            <ul>
                <li>Diagnostic procedures like ECG and stress tests</li>
                <li>Treatment for heart conditions such as arrhythmias and coronary artery disease</li>
                <li>Cardiac rehabilitation programs</li>
                <li>Heart surgery and interventional procedures</li>
            </ul>
        </div>
    );
}

export default CardiologyDetail;
