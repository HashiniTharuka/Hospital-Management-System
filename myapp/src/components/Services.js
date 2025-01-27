import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faAmbulance, faHeart } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = () => {
    return (
        <div className="page-content">
            <h2>Our Services</h2>
            <div className="service-cards">
                <Link to="/services/general-checkups" className="service-card">
                    <img src="https://c4.wallpaperflare.com/wallpaper/546/835/743/appointment-appointment-book-blur-care-wallpaper-preview.jpg" alt="General Check-ups" />
                    <div className="service-info">
                        <FontAwesomeIcon icon={faStethoscope} />
                        <h3>General Check-ups</h3>
                        <p>Comprehensive general health check-ups for all age groups.</p>
                    </div>
                </Link>
                <Link to="/services/emergency-services" className="service-card">
                    <img src="https://www.shutterstock.com/image-photo/emergency-department-doctors-nurses-paramedics-600nw-2018028392.jpg" alt="Emergency Services" />
                    <div className="service-info">
                        <FontAwesomeIcon icon={faAmbulance} />
                        <h3>Emergency Services</h3>
                        <p>24/7 emergency services with state-of-the-art facilities.</p>
                    </div>
                </Link>
                <Link to="/services/cardiology" className="service-card">
                    <img src="https://media.istockphoto.com/id/831805664/photo/doctor-with-advanced-equipment-in-hospital-ward.jpg?s=612x612&w=0&k=20&c=g8fmH6WIYfCnngk3duqPaxwq87uncGyRqehCX1xF-Uw=" alt="Cardiology" />
                    <div className="service-info">
                        <FontAwesomeIcon icon={faHeart} />
                        <h3>Cardiology</h3>
                        <p>Advanced cardiology services for heart health management.</p>
                    </div>
                </Link>
                <Link to="/services/pediatrics" className="service-card">
                    <img src="https://media.istockphoto.com/id/1388254153/photo/shot-of-a-baby-sitting-on-her-mothers-lap-while-being-examined-by-a-doctor.jpg?s=612x612&w=0&k=20&c=PBzQWrBVp8pIyYBH_ds8Bu8y4Y4j2jdL3Z2n8L1W0v4=" alt="Pediatrics" />
                    <div className="service-info">
                        <FontAwesomeIcon icon={faStethoscope} />
                        <h3>Pediatrics</h3>
                        <p>Comprehensive healthcare services for children.</p>
                    </div>
                </Link>
                <Link to="/services/surgery" className="service-card">
                    <img src="https://media.istockphoto.com/id/1405599541/photo/team-of-surgeon-doctors-are-performing-heart-surgery-operation-for-patient-from-organ-donor.jpg?s=612x612&w=0&k=20&c=L7MvYxNju0ZJ9RooLS9r79tLWMP1wokk3QBSGkS2ERg=" alt="Surgery" />
                    <div className="service-info">
                        <FontAwesomeIcon icon={faAmbulance} />
                        <h3>Surgery</h3>
                        <p>Expert surgical services with a high success rate.</p>
                    </div>
                </Link>
                <Link to="/services/orthopedics" className="service-card">
                    <img src="https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/476/2020/05/iStock-994645346-1024x683.jpg" alt="Orthopedics" />
                    <div className="service-info">
                        <FontAwesomeIcon icon={faHeart} />
                        <h3>Orthopedics</h3>
                        <p>Advanced orthopedic care for bone and joint health.</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Services;
