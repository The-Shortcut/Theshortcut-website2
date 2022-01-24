import { INIT_STATS } from '../actions/types';

const initState = {
  isLoading: true,
  allStats: null,
  communityStats: null,
  impactStats: null,
  partnersStats: null,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INIT_STATS:
      const communityStats = payload?.filter(({ acf }) =>
        acf.assginTo.join(', ').includes('community')
      );
      const impactStats = payload?.filter(({ acf }) => acf.assginTo.join(', ').includes('impact'));
      const partnersStats = payload?.filter(({ acf }) =>
        acf.assginTo.join(', ').includes('partners')
      );
      return {
        ...state,
        isLoading: false,
        allStats: payload,
        communityStats: communityStats,
        impactStats: impactStats,
        partnersStats: partnersStats,
      };

    default:
      return state;
  }
};

export default reducer;
