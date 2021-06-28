/* eslint-disable import/no-anonymous-default-export */
import ReactGA from 'react-ga';

const trackingID = process.env.REACT_APP_GA;

const init = () => {
  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
  ReactGA.initialize(trackingID, { debug: isDev });
};

const sendEvent = (payload) => {
  ReactGA.event(payload);
};

const sendPageview = (path) => {
  ReactGA.set({ page: path });
  ReactGA.pageview(path);
};

export default { init, sendEvent, sendPageview };
