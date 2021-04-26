import React from 'react';

//Routing
import { Switch, Route } from 'react-router-dom';

// Components
import Home from './components/pages/home';
import About from './components/pages/about';
import SuccessStories from './components/pages/about/SuccessStories';
import FAQ from './components/pages/about/FAQ';
import AllEvents from './components/pages/events';
import BYOB from './components/pages/events/byob';
import Partners from './components/pages/partners';
import TalentPool from './components/pages/talentPool';
import Blog from './components/pages/blog';
import Career from './components/pages/career';
import Community from './components/pages/community';
import OurImpact from './components/pages/impact';
import ContactUs from './components/pages/contact';
import team from './components/pages/contact/team';
import board from './components/pages/contact/board';
import Visit from './components/pages/visit';
import NotFound from './components/layout/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/about/success-stories' component={SuccessStories} />
      <Route exact path='/about/faq' component={FAQ} />
      <Route exact path='/events/all' component={AllEvents} />
      <Route exact path='/events/byob' component={BYOB} />
      <Route exact path='/for-partners' component={Partners} />
      <Route exact path='/talent-pool' component={TalentPool} />
      <Route exact path='/career' component={Career} />
      <Route exact path='/community' component={Community} />
      <Route exact path='/our-impact' component={OurImpact} />
      <Route exact path='/contact-us' component={ContactUs} />
      <Route exact path='/contact-us/team' component={team} />
      <Route exact path='/contact-us/board' component={board} />
      <Route exact path='/visit' component={Visit} />
      {/* Resources */}
      {/* <Route exact path='/media' component={ForMedia} /> */}
      <Route exact path='/blog' component={Blog} />
      {/* Footer */}
      {/* <Route exact path='/privacy' component={PrivacyPolicies} />
      <Route exact path='/code' component={Code} />
      <Route exact path='/values' component={Values} />
      <Route exact path='/terms' component={TermsOfServices} />
      <Route exact path='/data-description' component={DataDescription} /> */}
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
