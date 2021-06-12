import React, { useState, useEffect } from 'react';

//Routing
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

// Material-UI
import { CssBaseline } from '@material-ui/core';

// Layout Components
import NavBar from './components/layout/navBar';
import Media from './components/layout/newsLetter';
import Footer from './components/layout/footer';
import ScrollToTop from './ScrollToTop';

const App = () => {
  const [pageH, setPageH] = useState(null);
  useEffect(() => {
    window.addEventListener('scroll', () => setPageH(window.scrollY));
  }, []);
  return (
    <Router>
      <CssBaseline />
      <ScrollToTop />
      <NavBar pageHeight={pageH} />
      <Routes />
      <Media />
      <Footer />
    </Router>
  );
};

export default App;
