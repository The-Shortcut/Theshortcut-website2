import { INIT_SUCCESS_STORIES } from '../actions/types';

const initState = {
  isLoading: true,
  successStories: null,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
      case INIT_SUCCESS_STORIES:
      return { ...state, isLoading: false, successStories: payload };
    default:
      return state;
  }
};
export default reducer;