import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css'; // Import the CSS styles

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '', surname: '', contact: '', email: '', password: ''
  });

  const navigate = useNavigate();

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Handle signup logic here (e.g., send formData to backend)
    navigate('/login');
  };

  return (
    <div className="signup-page-background">
    <div className="signup-container">
      <h2 className="signup-title">Create Your Account</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          name="name"
          placeholder="First Name"
          onChange={handleChange}
          required
        />
        <input
          name="surname"
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
        <input
          name="contact"
          placeholder="Contact Number"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </div>
  );
};

export default SignupPage;
