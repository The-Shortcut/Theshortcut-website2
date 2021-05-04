import { INIT_FAQ } from '../actions/types';

const initState = {
  isLoading: true,
  faq_about: null,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
      case INIT_FAQ:
      return { ...state, isLoading: false, faq_about: payload };
    default:
      return state;
  }
};
export default reducer;
