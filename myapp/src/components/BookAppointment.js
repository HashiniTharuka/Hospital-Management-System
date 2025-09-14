import React, { useState } from 'react';

const BookAppointment = () => {
  const [details, setDetails] = useState({ date: '', doctor: '' });
  const [msg, setMsg] = useState('');

  const handleChange = e => setDetails({ ...details, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        },
        body: JSON.stringify(details),
      });
      if (!res.ok) throw new Error('Failed');
      setMsg('Appointment booked!');
    } catch {
      setMsg('Failed to book appointment.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Appointment</h2>
      <input name="date" type="date" value={details.date} onChange={handleChange} required />
      <input name="doctor" placeholder="Doctor Name" value={details.doctor} onChange={handleChange} required />
      <button type="submit">Book</button>
      {msg && <div>{msg}</div>}
    </form>
  );
};

export default BookAppointment;