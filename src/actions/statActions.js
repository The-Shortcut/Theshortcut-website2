import { INIT_STATS } from './types';

import statServices from '../services/statistics';

export const getStatsData = () => async (dispatch) => {
  const stats = await statServices.getStatistics();

  dispatch({
    type: INIT_STATS,
    payload: stats,
  });
};
