import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SignupPage from './components/SignupPage';
import RoleSelectionPage from './components/RoleSelectionPage';
import DriverFormPage from './components/DriverFormPage';
import DriverListPage from './components/DriverListPage';
import { AuthProvider } from './context/AuthContext';
import './styles.css';
import ProtectedRoute from './components/ProtectedRoute';
import{ useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function App() {
  // useEffect(() => {
  //   const addTestDriver = async () => {
  //     try {
  //       await addDoc(collection(db, "drivers"), {
  //         name: "Test Driver",
  //         age: 30,
  //         license: "yes"
  //       });
  //       console.log("Test driver added!");
  //     } catch (e) {
  //       console.error(" Firebase Test Error:", e.message);
  //     }
  //   };

  //   addTestDriver();
  // }, []);

  
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
  path="/role-selection"
  element={
    <ProtectedRoute>
      <RoleSelectionPage />
    </ProtectedRoute>
  }
/>
          <Route path="/driver-form" element={<DriverFormPage />} />
          <Route path="/drivers" element={<DriverListPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;