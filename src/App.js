import React, { useState, useEffect } from 'react';

//Routing
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

import { CssBaseline } from '@material-ui/core';

// Layout Components
import NavBar from './components/layout/navBar';
import FollowMedia from './components/layout/newsLetter';
import Footer from './components/layout/footer';
import ScrollToTop from './ScrollToTop';

// Google Tag Manager
import TagManager from 'react-gtm-module';
import ToTopArrow from './components/functional/ToTopArrow';

const App = () => {
  const [pageH, setPageH] = useState(null);

  useEffect(() => {
    window.addEventListener('scroll', () => setPageH(window.scrollY));
    TagManager.initialize({ gtmId: process.env.REACT_APP_GTM });
  }, []);
  return (
      <Router>
        <CssBaseline />
        <ScrollToTop />
        <ToTopArrow />
        <NavBar pageHeight={pageH} />
        <Routes />
        <FollowMedia />
        <Footer />
      </Router>
  );
};

export default App;
