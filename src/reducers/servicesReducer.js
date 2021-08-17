import { INIT_TRAINING } from '../actions/types';

const initState = {
  isLoading: true,
  trainings: null,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INIT_TRAINING:
      return { ...state, isLoading: false, trainings: payload };
    default:
      return state;
  }
};
export default reducer;
