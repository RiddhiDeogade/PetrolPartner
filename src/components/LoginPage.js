import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    login({ email });
    navigate('/role-selection');
  };

  return (
    <div className="login-page-background">
      <div className="login-container">
        <h2 className="login-title">Sign-in</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
