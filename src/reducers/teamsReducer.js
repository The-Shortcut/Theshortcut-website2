import { INIT_TEAM_MEMBERS, INIT_BOARD_MEMBERS, INIT_BYOB_SPEAKERS } from '../actions/types';

const initState = {
  isLoading: true,
  teammates: null,
  board: null,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INIT_TEAM_MEMBERS:
      return { ...state, isLoading: false, teammates: payload };

    case INIT_BOARD_MEMBERS:
      return { ...state, board: payload };

    case INIT_BYOB_SPEAKERS:
      return { ...state, speakers: payload };

    default:
      return state;
  }
};
export default reducer;
