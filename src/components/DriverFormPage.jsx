// src/components/DriverFormAndListPage.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  updateDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where
} from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './DriverFormPage.css'; // You can merge styles for both components here or create a new CSS file

const DriverFormAndListPage = () => {
  const [form, setForm] = useState({
    age: '',
    license: '',
    from: '',
    to: '',
    vehicle: '',
    type: '',
    budget: '',
    phone: '',
    email: '',
    stops: '',
    remarks: ''
  });
  const [drivers, setDrivers] = useState([]);
  const [filter, setFilter] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [editingId, setEditingId] = useState(null);

  // Listen to auth changes
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Fetch driver forms for current user
  useEffect(() => {
    const fetchDrivers = async () => {
      if (!currentUser) {
        setDrivers([]);
        return;
      }
      try {
        const q = query(collection(db, 'drivers'), where('userId', '==', currentUser.uid));
        const snapshot = await getDocs(q);
        const data = snapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .filter(driver => driver.from && driver.to && driver.vehicle);
        setDrivers(data);
      } catch (error) {
        console.error("Error fetching drivers:", error);
      }
    };
    fetchDrivers();
  }, [currentUser]);

  // Handle input changes in form
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // Submit or update form
  const handleSubmit = async e => {
    e.preventDefault();

    if (!currentUser) {
      alert("You must be logged in to submit this form.");
      return;
    }

    if (parseInt(form.age) < 18) {
      alert("Age must be 18+");
      return;
    }

    try {
      if (editingId) {
        // Update existing
        const docRef = doc(db, 'drivers', editingId);
        await updateDoc(docRef, {
          ...form,
          userId: currentUser.uid,
          timestamp: new Date()
        });
        alert("Driver updated successfully!");
      } else {
        // Add new
        await addDoc(collection(db, 'drivers'), {
          ...form,
          userId: currentUser.uid,
          timestamp: new Date()
        });
        alert("Driver Registered Successfully!");
      }
      // Reset form and editing mode
      setForm({
        firstName: '',
  lastName: '',
        age: '',
        license: '',
        from: '',
        to: '',
        vehicle: '',
        type: '',
        budget: '',
        phone: '',
        email: '',
        stops: '',
        remarks: ''
      });
      setEditingId(null);

      // Refresh list
      const q = query(collection(db, 'drivers'), where('userId', '==', currentUser.uid));
      const snapshot = await getDocs(q);
      const data = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(driver => driver.from && driver.to && driver.vehicle);
      setDrivers(data);
    } catch (error) {
      console.error("Error saving driver: ", error);
      alert("Something went wrong.");
    }
  };

  // Load a form to edit
  const handleEdit = driver => {
    setForm({
      firstName:driver.firstName||'',
  lastName: driver.lastName||'',
      age: driver.age || '',
      license: driver.license || '',
      from: driver.from || '',
      to: driver.to || '',
      vehicle: driver.vehicle || '',
      type: driver.type || '',
      budget: driver.budget || '',
      phone: driver.phone || '',
      email: driver.email || '',
      stops: driver.stops || '',
      remarks: driver.remarks || ''
    });
    setEditingId(driver.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Delete a form
  const handleDelete = async id => {
    const confirmDelete = window.confirm("Are you sure you want to delete this driver?");
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, 'drivers', id));
      setDrivers(prev => prev.filter(driver => driver.id !== id));
      // If currently editing this form, reset form
      if (editingId === id) {
        setForm({
          firstName: '',
  lastName: '',
          age: '',
          license: '',
          from: '',
          to: '',
          vehicle: '',
          type: '',
          budget: '',
          phone: '',
          email: '',
          stops: '',
          remarks: ''
        });
        setEditingId(null);
      }
      alert("Driver deleted successfully.");
    } catch (error) {
      console.error("Error deleting driver:", error);
      alert("Failed to delete driver.");
    }
  };

  // Filtered drivers by stops field
  const filteredDrivers = drivers.filter(driver =>
    filter === '' || driver.stops.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '20px' }}>
      {/* Left: Form */}
      <div style={{ flex: 1, maxWidth: '800px', border: '1px solid #fff', padding: '1rem', borderRadius: '5px',backgroundColor:"#6b9080"}}>
        <h2>{editingId ? "Edit Driver Form" : "Driver Registration Form"}</h2>
        <form onSubmit={handleSubmit}>
         <div className="name-surname-group">
  <div>
    <label htmlFor="firstName">First Name</label>
    <input
      type="text"
      id="firstName"
      name="firstName"
      value={form.firstName}
      onChange={handleChange}
    />
  </div>

  <div>
    <label htmlFor="lastName">Last Name</label>
    <input
      type="text"
      id="lastName"
      name="lastName"
      value={form.lastName}
      onChange={handleChange}
    />
  </div>
</div>
          <label>Age</label>
          <input
            name="age"
            placeholder="18+"
            type="number"
            value={form.age}
            onChange={handleChange}
            required
          />

          <label>Do you have a license?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="license"
                value="yes"
                checked={form.license === 'yes'}
                onChange={handleChange}
                required
              /> Yes
            </label>
            <label>
              <input
                type="radio"
                name="license"
                value="no"
                checked={form.license === 'no'}
                onChange={handleChange}
              /> No
            </label>
          </div>

          <label>From Location</label>
          <input type='text' name="from" value={form.from} onChange={handleChange} required />

          <label>To Location</label>
          <input type='text' name="to" value={form.to} onChange={handleChange} required />

          <label>Vehicle Name</label>
          <input type='text' name="vehicle" value={form.vehicle} onChange={handleChange} required />

          <label>Vehicle Type</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="type"
                value="2-wheeler"
                checked={form.type === '2-wheeler'}
                onChange={handleChange}
              /> 2-Wheeler
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="4-wheeler"
                checked={form.type === '4-wheeler'}
                onChange={handleChange}
              /> 4-Wheeler
            </label>
          </div>

          <label>Expected Budget</label>
          <input
            name="budget"
            type="number"
            placeholder='Rs.'
            value={form.budget}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input type='number' name="phone" placeholder='+91' value={form.phone} onChange={handleChange} required />

          <label>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Stops/Squares</label>
          <input
            placeholder="(comma separated)"
            type='text'
            name="stops"
            value={form.stops}
            onChange={handleChange}
            required
          />

          <label>Remarks</label>
          <textarea name="remarks" value={form.remarks} onChange={handleChange} required />

          <button id="driver-form-submit" type="submit" style={{ marginTop: '10px' }}>
            {editingId ? "Update" : "Submit"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setForm({
                   firstName: '',
                    lastName: '',
                  age: '',
                  license: '',
                  from: '',
                  to: '',
                  vehicle: '',
                  type: '',
                  budget: '',
                  phone: '',
                  email: '',
                  stops: '',
                  remarks: ''
                });
                setEditingId(null);
              }}
              style={{ marginLeft: '10px' }}
            >
              Cancel Edit
            </button>
          )}
        </form>
      </div>

      {/* Right: List */}
      <div style={{ flex: 1.2, border: '1px solid #fff', padding: '1rem', borderRadius: '5px', backgroundColor:"#9a8c98"}}>
        <h2>Your Forms</h2>
        <input
          type="text"
          placeholder="Filter by stop..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          style={{ marginBottom: '1rem', width: '100%', padding: '0.5rem' }}
        />
        {filteredDrivers.length === 0 && <p>No forms found.</p>}
        <ul style={{ listStyle: 'none', padding: 0, maxHeight: '140vh', overflowY: 'auto' }}>
          {filteredDrivers.map((driver, index) => (
            <li
              key={driver.id}
              style={{
                border: '1px solid #ddd',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '6px',
                backgroundColor: '#fafafa'
              }}
            >
              <h3>Form {index + 1}</h3>
              <p><strong>From:</strong> {driver.from}</p>
              <p><strong>To:</strong> {driver.to}</p>
              <p><strong>Vehicle:</strong> {driver.vehicle} ({driver.type})</p>
              <p><strong>Budget:</strong> ₹{driver.budget}</p>
              <p><strong>Phone:</strong> {driver.phone}</p>
              <p><strong>Email:</strong> {driver.email}</p>
              <p><strong>Stops:</strong> {driver.stops}</p>
              <p><strong>Remarks:</strong> {driver.remarks}</p>

              <button id='edit-btn' onClick={() => handleEdit(driver)} >
                Edit
              </button>
              <button id='delete-btn' onClick={() => handleDelete(driver.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DriverFormAndListPage;
