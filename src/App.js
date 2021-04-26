import React, { useState, useEffect } from 'react';

//Routing
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

// Material-UI
import { CssBaseline } from '@material-ui/core';

// Layout Components
import NavBar from './components/layout/navBar';

const App = () => {
  const [pageH, setPageH] = useState(null);
  useEffect(() => {
    window.addEventListener('scroll', () => setPageH(window.scrollY));
  }, []);
  return (
    <Router>
      <CssBaseline />
      <NavBar pageHeight={pageH} />
      <Routes />
    </Router>
  );
};

export default App;
