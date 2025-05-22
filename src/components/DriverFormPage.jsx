import React, { useState } from 'react';
import './DriverFormPage.css';

const DriverFormPage = () => {
  const [form, setForm] = useState({
    age: '', license: '', from: '', to: '', route: '', vehicle: '',
    type: '', budget: '', phone: '', email: '', stops: ''
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (parseInt(form.age) < 18) return alert("Age must be 18+");
    // Send data to backend
    alert("Submitted Successfully");
  };

  return (
    <div className="driver-form-container">
      <div className="form-card">
        <h2 className="form-title">Driver Registration</h2>
        <form onSubmit={handleSubmit} className="driver-form">

          <label className="form-label">Age</label>
          <input name="age" type="number" onChange={handleChange} required />

          <label className="form-label">Do you have a license?</label>
          <div className="radio-group">
            <label><input type="radio" name="license" value="yes" onChange={handleChange} required /> Yes</label>
            <label><input type="radio" name="license" value="no" onChange={handleChange} /> No</label>
          </div>

          <label className="form-label">From Location</label>
          <input name="from" onChange={handleChange} required />

          <label className="form-label">To Location</label>
          <input name="to" onChange={handleChange} required />

          <label className="form-label">Describe your Route</label>
          <textarea name="route" onChange={handleChange} required />

          <label className="form-label">Vehicle Name</label>
          <input name="vehicle" onChange={handleChange} required />

          <label className="form-label">Vehicle Type</label>
          <div className="radio-group">
            <label><input type="radio" name="type" value="2-wheeler" onChange={handleChange} /> 2-wheeler</label>
            <label><input type="radio" name="type" value="4-wheeler" onChange={handleChange} /> 4-wheeler</label>
          </div>

          <label className="form-label">Expected Budget (INR)</label>
          <input name="budget" type="number" onChange={handleChange} required />

          <label className="form-label">Phone Number</label>
          <input name="phone" onChange={handleChange} required />

          <label className="form-label">Email</label>
          <input name="email" type="email" onChange={handleChange} required />

          <label className="form-label">Stops/Squares (comma separated)</label>
          <input name="stops" onChange={handleChange} required />

          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default DriverFormPage;
