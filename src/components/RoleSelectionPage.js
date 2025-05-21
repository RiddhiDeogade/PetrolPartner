import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelectionPage.css';

const RoleSelectionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="role-selection-container">
      <div className="role-card">
        <h2 className="role-title">Select Your Role</h2>
        <div className="role-buttons">
          <button className="role-btn" onClick={() => navigate('/driver-form')}>
            Owner 
          </button>
          <button className="role-btn" onClick={() => navigate('/drivers')}>
Partner
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionPage;
