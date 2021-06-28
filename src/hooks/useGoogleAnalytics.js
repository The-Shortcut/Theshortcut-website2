import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import analytics from '../components/functional/analytics';

const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    analytics.init()
  }, []);

  useEffect(() => {
    const currentPath = location.pathname + location.search;
    analytics.sendPageview(currentPath);
  }, [location])
};
export default useGoogleAnalytics;
