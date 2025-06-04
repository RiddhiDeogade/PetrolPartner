import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // 👈 changed here
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SignupPage from './components/SignupPage';
import RoleSelectionPage from './components/RoleSelectionPage';
import DriverFormPage from './components/DriverFormPage';
import DriverListPage from './components/DriverListPage';
import { AuthProvider } from './context/AuthContext';
import './styles.css';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HomePage />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Navbar />
                <SignupPage />
              </>
            }
          />
          <Route
            path="/role-selection"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <RoleSelectionPage />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/driver-form"
            element={
              <>
                <Navbar />
                <DriverFormPage />
              </>
            }
          />
          <Route
            path="/drivers"
            element={
              <>
                <Navbar />
                <DriverListPage />
              </>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}


export default App;
