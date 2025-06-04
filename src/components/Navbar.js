import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import logoImage from '../assets/img1.png';
import './Navbar.css';

const Navbar = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/');
    });
  };

  const isGoogleUser = user?.providerData?.[0]?.providerId === 'google.com';

  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/">
          <img src={logoImage} alt="Logo" style={{ height: '25px' }} />
        </Link>
        <Link to="/">Home</Link>
       <Link to="/role-selection">Role</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="right">
        {!user ? (
          <Link to="/signup">Sign in</Link>
        ) : isGoogleUser ? (
          <button onClick={handleLogout}>Logout</button>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
