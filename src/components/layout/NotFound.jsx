import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// IMAGE
import hero from '../../assets/illustrations/1.png';
const NotFound = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);
  if (seconds === 0) {
    return <Redirect to='/' />;
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <img src={hero} alt='not found page' width='30%' />
      <h1 style={{ maxWidth: '80%' }}>
        Oh nooooooo, we hoped that this would never happen, but it did! Maybe this page decided to
        attend one of our fantastic events…even 404 error pages also have career goals!
      </h1>
      <h1>
        Not to worry, your career goals will be back on track soon try the search bar on our home
        page to find what you are looking for!
      </h1>
      <p>Reload automatically after {seconds} seconds ...</p>
    </div>
  );
};

export default NotFound;
