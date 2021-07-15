import {
  INIT_POSTS,
  POSTS_PAGINATION,
  SINGLE_POST,
  POSTS_CATEGORIES,
  FIND_POSTS_BY_CATEGORY,
} from './types';
import postService from '../services/posts';

export const postsData = () => async (dispatch) => {
  const posts = await postService.getPostsData();
  dispatch({
    type: INIT_POSTS,
    payload: posts,
  });
};

export const paginate = (page_no) => (dispatch) => {
  dispatch({
    type: POSTS_PAGINATION,
    payload: page_no,
  });
};

export const singlePostData = (id) => async (dispatch) => {
  const singlePost = await postService.getSinglePostData(id);
  dispatch({
    type: SINGLE_POST,
    payload: singlePost,
  });
};

export const postsCategoriesData = () => async (dispatch) => {
  const categories = await postService.getPostsCategories();
  dispatch({
    type: POSTS_CATEGORIES,
    payload: categories,
  });
};

export const findPostsByCategory = (category) => async (dispatch) => {
  dispatch({
    type: FIND_POSTS_BY_CATEGORY,
    payload: category,
  });
};
