import React from 'react';
import './Detail.css'; // Import CSS for detail styling

const GeneralCheckupsDetail = () => {
    return (
        <div className="detail-page">
            <div className="detail-content">
                <h2>General Check-ups</h2>
                <img className="upper-left-image" src="https://menshealthfoundation.ca/wp-content/uploads/2020/07/medical-checkup-784x523-1.jpg" alt="General Check-ups" />
                
                <h3>Benefits of Regular Check-ups</h3>
                <p>
                    Regular check-ups help in early detection of health issues, monitoring existing conditions, receiving personalized health advice, and improving overall health and well-being.
                </p>
                <h3>What to Expect During a Check-up</h3>
                <p>
                    A general check-up typically includes a physical examination, blood pressure and heart rate measurements, necessary blood and screening tests, a discussion of medical history and current concerns, and personalized health advice.
                </p>
                <h3>How Often Should You Get a Check-up?</h3>
                <p>
                    Check-up frequency varies by age and health status: annual check-ups for adults, every two years for young, healthy individuals, and more frequent visits for those with chronic conditions or risk factors. Consult with your healthcare provider for a personalized schedule.
                </p>
            </div>
        </div>
    );
}

export default GeneralCheckupsDetail;
