import { useNavigate } from 'react-router-dom';

const ConditionalNavBar = () => {
    const navigate = useNavigate();
    // ...existing code...

    const handleAppointmentsClick = () => {
        if (!localStorage.getItem('userToken')) {
            navigate('/register');
        } else {
            navigate('/appointments');
        }
    };

    // ...existing code...
    <li className={location.pathname === '/appointments' ? 'active' : ''}>
        <button onClick={handleAppointmentsClick} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <FaClipboardList className="icon" /> Appointments
        </button>
    </li>
    // ...existing code...
}

export default ConditionalNavBar;