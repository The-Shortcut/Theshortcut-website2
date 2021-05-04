import { INIT_SUCCESS_STORIES } from './types';
import storiesSerivce from '../services/stories';

export const getStories = () => async (dispatch) => {
    const successStories = await storiesSerivce.getSuccessStories();
  dispatch({
    type: INIT_SUCCESS_STORIES,
    payload: successStories,
  });
};
