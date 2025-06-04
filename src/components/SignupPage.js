import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase'; // Adjust path if needed
import './SignupPage.css'; // You can customize styles

const SignupPage = () => {
  const navigate = useNavigate();

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google User:", user);
      // Optionally send user info to backend or Firestore here
      navigate('/role-selection'); // Redirect after login
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div className="signup-page-background">
      <div className="signup-container">
        <h2 className="signup-title">welcome!</h2>
        <button className="google-signin-button" onClick={handleGoogleSignup}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
