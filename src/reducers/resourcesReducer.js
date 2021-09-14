import { INIT_RESOURCES } from '../actions/types';
const initState = {
  isLoading: true,
  resources: null,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INIT_RESOURCES:
      return { ...state, isLoading: false, resources: payload };
    default:
      return state;
  }
};
export default reducer;
