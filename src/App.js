import React, { useState, useEffect } from 'react';

//Routing
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

// Material-UI
import { CssBaseline } from '@material-ui/core';

// Layout Components
import NavBar from './components/layout/navBar';
import FollowMedia from './components/layout/newsLetter';
import Footer from './components/layout/footer';

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
      <FollowMedia />
      <Footer />
    </Router>
  );
};

export default App;
