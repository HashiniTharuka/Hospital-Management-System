import React, { useState } from 'react';

const UserLogin = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.token) throw new Error('Login failed');
      localStorage.setItem('userToken', data.token);
      window.location.href = '/book-appointment';
    } catch (err) {
      setError('Login failed. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Login</h2>
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
      <button type="submit">Login</button>
      {error && <div style={{color:'red'}}>{error}</div>}
    </form>
  );
};

export default UserLogin;