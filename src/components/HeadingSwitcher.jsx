// components/HeadingSwitcher.jsx
import React, { useEffect, useState } from 'react';
import './HeadingSwitcher.css'; // create this CSS file next

const HeadingSwitcher = () => {
  const texts = ['Start sharing your ride....', 'Find your partner!'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return <h2 className="fade-text">{texts[index]}</h2>;
};

export default HeadingSwitcher;
