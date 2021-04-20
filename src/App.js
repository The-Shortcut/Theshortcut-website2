import React from 'react';

//Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Material-UI
import { CssBaseline } from '@material-ui/core';

// Layout Components
import Home from './components/layout/home/index';
import Event from './components/layout/Event';
import NotFound from './components/layout/NotFound';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/event' component={Event} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
