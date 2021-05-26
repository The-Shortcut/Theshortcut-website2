import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// IMAGE
import Image404 from '../../assets/illustrations/404.png';

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
        backgroundColor: '#FFFFFF',
        minHeight:'100vh'
      }}>
      <img src={Image404} alt='not found page' width='40%' />
      <h1 style={{ maxWidth: '80%' }}>
        Oops, try the search bar on our home page to find what you are looking for!
      </h1>
      <p>Reload automatically after {seconds} seconds ...</p>
    </div>
  );
};

export default NotFound;
