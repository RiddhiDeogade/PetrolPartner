// src/components/DriverList.jsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import './DriverListPage.css'; // Optional CSS styling

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDrivers, setFilteredDrivers] = useState([]);

  useEffect(() => {
    const fetchAllDrivers = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'drivers'));
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setDrivers(data);
        setFilteredDrivers(data);
      } catch (error) {
        console.error("Error fetching all drivers: ", error);
      }
    };

    fetchAllDrivers();
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = drivers.filter(driver =>
      Object.values(driver).some(value =>
        value?.toString().toLowerCase().includes(query)
      )
    );
    setFilteredDrivers(filtered);
  }, [searchQuery, drivers]);

  return (
    <div className="driver-list-container">
      <h2>Available Drivers</h2>
      
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      {filteredDrivers.length === 0 ? (
        <p>No matching driver data.</p>
      ) : (
        <ul className="driver-list">
          {filteredDrivers.map((driver, index) => (
            <li key={driver.id} className="driver-item">
              <h3>Driver #{index + 1}</h3>
              <p><strong>Name:</strong> {driver.firstName} {driver.lastName}</p>
              <p><strong>Age:</strong> {driver.age}</p>
              <p><strong>From:</strong> {driver.from}</p>
              <p><strong>To:</strong> {driver.to}</p>
              <p><strong>Vehicle:</strong> {driver.vehicle} ({driver.type})</p>
              <p><strong>License:</strong> {driver.license}</p>
              <p><strong>Budget:</strong> ₹{driver.budget}</p>
              <p><strong>Phone:</strong> {driver.phone}</p>
              <p><strong>Email:</strong> {driver.email}</p>
              <p><strong>Stops:</strong> {driver.stops}</p>
              <p><strong>Remarks:</strong> {driver.remarks}</p>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DriverList;
