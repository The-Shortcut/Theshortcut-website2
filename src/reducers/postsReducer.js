import { INIT_POSTS } from '../actions/types';

const initState = {
  isLoading: true,
  posts: null,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
      case INIT_POSTS:
      return { ...state, isLoading: false, posts: payload };
    default:
      return state;
  }
};
export default reducer;
