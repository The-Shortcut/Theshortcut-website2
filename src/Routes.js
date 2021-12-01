import React, { Suspense, lazy } from 'react';

//Routing
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Home from './components/pages/home';
import About from './components/pages/about';
import AllEvents from './components/pages/events';
import BYOB from './components/pages/events/byob';
import Partners from './components/pages/partners';
import Blog from './components/pages/blog';
import Post from './components/pages/blog/Post';
import Career from './components/pages/career';
import Community from './components/pages/community';
import OurImpact from './components/pages/impact';
import Services from './components/pages/services';
import ContactUs from './components/pages/contact';
/* import Visit from './components/pages/visit'; */
import MeetUs from './components/pages/meetUs';
import Search from './components/pages/search';
import Coding101 from './components/pages/services/training/coding101';
import DigitalMarketing from './components/pages/services/training/digitalMarketing';
import StartHere from './components/pages/startHere';
import TalentCommunity from './components/pages/talentCommunity';
import SpyWhoHiredMe from './components/pages/services/training/spy';
import Media from './components/pages/media';
// Footer
import PrivacyPolicies from './components/layout/documents/PrivacyPolicies';
import CodeOfConduct from './components/layout/documents/CodeOfConduct';
import TermsOfUse from './components/layout/documents/TermsOfUse';

// Analytics Hooks
import useGoogleAnalytics from './hooks/useGoogleAnalytics';

const NotFound = lazy(() => import('./components/layout/NotFound'));

const Routes = () => {
  useGoogleAnalytics();
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/events' component={AllEvents} />
      <Route exact path='/events/byob' component={BYOB} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/services/training/coding101' component={Coding101} />
      <Route exact path='/services/training/digital-marketing-program' component={DigitalMarketing} />
      <Route exact path='/services/training/the-spy-who-hired-me' component={SpyWhoHiredMe} />
      <Route exact path='/partners' component={Partners} />
      <Route exact path='/career' component={Career} />
      <Route exact path='/community' component={Community} />
      <Route exact path='/our-impact' component={OurImpact} />
      <Route exact path='/contact-us' component={ContactUs} />
      <Route exact path='/meet-us' component={MeetUs} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/blog/:slug' component={Post} />
      <Route exact path='/talent-community' component={TalentCommunity} />
      <Route exact path='/start-here' component={StartHere} />
      <Route exact path='/for-media' component={Media} />
      <Route exact path='/search'>
        <Search />
      </Route>
      {/* {/* Footer */}
      <Route exact path='/privacy-policies' component={PrivacyPolicies} />
      <Route exact path='/code' component={CodeOfConduct} />
      <Route exact path='/terms' component={TermsOfUse} />
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          {/* <Route exact path='/visit' component={Visit} /> */}
          <Route exact path='/404' component={NotFound} />
          <Redirect to='/404' />
        </Switch>
      </Suspense>
    </Switch>
  );
};

export default Routes;
