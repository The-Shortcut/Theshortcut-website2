import {
  INIT_POSTS,
  POSTS_PAGINATION,
  SINGLE_POST,
  POSTS_CATEGORIES,
  FIND_POSTS_BY_CATEGORY,
  SEARCH_POSTS,
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

export const singlePostData = (slug) => async (dispatch) => {
  const singlePost = await postService.getSinglePostData(slug);
  dispatch({
    type: SINGLE_POST,
    payload: singlePost,
  });
};

export const postsCategoriesData = () => async (dispatch) => {
  const categories = await postService.getPostsCategories();
  const categorized = categories.filter(cat => cat.name !== 'Uncategorized')
  const allCat = {
    id: 182021,
    name: 'All',
    slug: 'all',
  };
  categorized.push(allCat);
  dispatch({
    type: POSTS_CATEGORIES,
    payload: categorized,
  });
};

export const findPostsByCategory = (category) => async (dispatch) => {
  dispatch({
    type: FIND_POSTS_BY_CATEGORY,
    payload: category,
  });
};

export const searchPosts = (term) => (dispatch) => {
  dispatch({
    type: SEARCH_POSTS,
    payload: term,
  });
};
