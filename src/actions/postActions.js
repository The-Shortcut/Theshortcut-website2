import { INIT_POSTS } from './types';
import postService from '../services/posts';

export const postsData = () => async (dispatch) => {
  const posts = await postService.getPostsData();
  dispatch({
    type: INIT_POSTS,
    payload: posts,
  });
};
