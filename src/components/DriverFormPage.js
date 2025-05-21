import React, { useState } from 'react';

const DriverFormPage = () => {
  const [form, setForm] = useState({
    age: '', license: '', from: '', to: '', route: '', vehicle: '', type: '', budget: '', phone: '', email: '', stops: ''
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (parseInt(form.age) < 18) return alert("Age must be 18+");
    // Send data to backend
    alert("Submitted Successfully");
  };

  return (
    <div className="driver-form">
      <img src="/scooty.png" alt="Scooty Driver" />
      <form onSubmit={handleSubmit}>
        <input name="age" type="number" placeholder="Age" onChange={handleChange} required />
        <label>Do you have a license?</label>
        <input type="radio" name="license" value="yes" onChange={handleChange} required /> Yes
        <input type="radio" name="license" value="no" onChange={handleChange} /> No
        <input name="from" placeholder="From Location" onChange={handleChange} required />
        <input name="to" placeholder="To Location" onChange={handleChange} required />
        <textarea name="route" placeholder="Describe your route" onChange={handleChange} required />
        <input name="vehicle" placeholder="Vehicle Name" onChange={handleChange} required />
        <label>Vehicle Type</label>
        <input type="radio" name="type" value="2-wheeler" onChange={handleChange} /> 2-wheeler
        <input type="radio" name="type" value="4-wheeler" onChange={handleChange} /> 4-wheeler
        <input name="budget" type="number" placeholder="Expected Budget" onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="stops" placeholder="Stops/Squares (comma separated)" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DriverFormPage;
