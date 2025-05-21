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
          <input name="age" type="number" placeholder="Age" onChange={handleChange} required />
          
          <label className="form-label">Do you have a license?</label>
          <div className="radio-group">
            <label><input type="radio" name="license" value="yes" onChange={handleChange} required /> Yes</label>
            <label><input type="radio" name="license" value="no" onChange={handleChange} /> No</label>
          </div>

          <input name="from" placeholder="From Location" onChange={handleChange} required />
          <input name="to" placeholder="To Location" onChange={handleChange} required />
          <textarea name="route" placeholder="Describe your route" onChange={handleChange} required />

          <input name="vehicle" placeholder="Vehicle Name" onChange={handleChange} required />
          
          <label className="form-label">Vehicle Type</label>
          <div className="radio-group">
            <label><input type="radio" name="type" value="2-wheeler" onChange={handleChange} /> 2-wheeler</label>
            <label><input type="radio" name="type" value="4-wheeler" onChange={handleChange} /> 4-wheeler</label>
          </div>

          <input name="budget" type="number" placeholder="Expected Budget (INR)" onChange={handleChange} required />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <input name="email" placeholder="Email" onChange={handleChange} required />
          <input name="stops" placeholder="Stops/Squares (comma separated)" onChange={handleChange} required />

          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default DriverFormPage;
