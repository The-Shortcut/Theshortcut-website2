import React from 'react';

//Routing
import { Switch, Route } from 'react-router-dom';

// Components
import Home from './components/pages/home';
import About from './components/pages/about';
import AllEvents from './components/pages/events';
import Event from './components/pages/events/Event';
import BYOB from './components/pages/events/byob';
import Partners from './components/pages/partners';
import Blog from './components/pages/blog';
import Career from './components/pages/career';
import Community from './components/pages/community';
import OurImpact from './components/pages/impact';
import Services from './components/pages/services';
import ContactUs from './components/pages/contact';
import Visit from './components/pages/visit';
import NotFound from './components/layout/NotFound';

// Footer
import PrivacyPolicies from './components/layout/documents/PrivacyPolicies';
import CodeOfConduct from './components/layout/documents/CodeOfConduct';
import TermsOfUse from './components/layout/documents/TermsOfUse';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/events/all' component={AllEvents} />
      <Route exact path='/events/all/:id' component={Event} />
      <Route exact path='/events/byob' component={BYOB} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/partners' component={Partners} />
      <Route exact path='/career' component={Career} />
      <Route exact path='/community' component={Community} />
      <Route exact path='/our-impact' component={OurImpact} />
      <Route exact path='/contact-us' component={ContactUs} />
      <Route exact path='/visit' component={Visit} />
      {/* Resources */}
      {/* <Route exact path='/media' component={ForMedia} /> */}
      <Route exact path='/blog' component={Blog} />
      {/* {/* Footer */}
      <Route exact path='/privacy' component={PrivacyPolicies} />
      <Route exact path='/code' component={CodeOfConduct} />
      <Route exact path='/terms' component={TermsOfUse} />
      {/*<Route exact path='/values' component={Values} />
      <Route exact path='/data-description' component={DataDescription} /> */}
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
