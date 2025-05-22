import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logoImage from '../assets/img1.png';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/">    <img src={logoImage} alt="Logo" style={{ height: '25px' }} /> </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/drivers">Drivers List</Link>
      </div>
      <div className="right">
        {!user ? (
          <Link to="/signup">Get Started</Link>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
