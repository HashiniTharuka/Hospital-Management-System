import React, { useState } from 'react';

const UserRegister = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Registration failed');
      window.location.href = '/login';
    } catch (err) {
      setError('Registration failed. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Registration</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
      <button type="submit">Register</button>
      {error && <div style={{color:'red'}}>{error}</div>}
    </form>
  );
};

export default UserRegister;