import React, { useEffect, useState } from 'react';

const DriverListPage = () => {
  const [drivers, setDrivers] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Fetch drivers from backend
    setDrivers([/* sample driver data for now */]);
  }, []);

  const filteredDrivers = drivers.filter(driver =>
    filter === '' || driver.stops.includes(filter)
  );

  return (
    <div>
      <h2>Drivers List</h2>
      <input
        type="text"
        placeholder="Filter by stop..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <ul>
        {filteredDrivers.map((d, i) => (
          <li key={i}>{d.name} - {d.from} to {d.to}</li>
        ))}
      </ul>
    </div>
  );
};

export default DriverListPage;
