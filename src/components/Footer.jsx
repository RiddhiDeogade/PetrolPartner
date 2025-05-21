// components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section about">
        <h3>Petrol Partner</h3>
        <p>
          Connecting drivers and riders to share rides easily and affordably.
          Join our community and start your journey today!
        </p>
      </div>

      <div className="footer-section links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/signup">Sign Up</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/drivers">Drivers</a></li>
        </ul>
      </div>

      <div className="footer-section contact">
        <h4>Contact Us</h4>
        <p>Email: support@petrolpartner.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Main Street, Nagpur, India</p>
      </div>
    </div>

    <div className="footer-bottom">
      &copy; {new Date().getFullYear()} Petrol Partner. All rights reserved.
    </div>
  </footer>
);

export default Footer;
