import { INIT_STATS } from '../actions/types';

const initState = {
  isLoading: true,
  stats: null,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INIT_STATS:
      return { ...state, isLoading: false, stats: payload };

    default:
      return state;
  }
};

export default reducer;
