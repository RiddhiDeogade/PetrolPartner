import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelectionPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Select your Role</h2>
      <button onClick={() => navigate('/driver-form')}>Partner</button>
      <button disabled>Owner (Coming Soon)</button>
    </div>
  );
};

export default RoleSelectionPage;
