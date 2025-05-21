import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import RoleSelectionPage from './components/RoleSelectionPage';
import DriverFormPage from './components/DriverFormPage';
import DriverListPage from './components/DriverListPage';
import { AuthProvider } from './context/AuthContext';
import './styles.css';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/role-selection" element={<RoleSelectionPage />} />
          <Route path="/driver-form" element={<DriverFormPage />} />
          <Route path="/drivers" element={<DriverListPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;