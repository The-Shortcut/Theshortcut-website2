import {
  INIT_POSTS,
  POSTS_PAGINATION,
  SINGLE_POST,
  POSTS_CATEGORIES,
  FIND_POSTS_BY_CATEGORY,
} from '../actions/types';

let catTerm = window.location.search;

const initState = {
  isLoading: true,
  posts: null,
  featuredBlog: null,
  filteredPosts: null,
  currentPage: 1,
  perPage: 10,
  currentItems: [],
  totalItems: 0,
  postIsLoading: true,
  singlePost: null,
  categories: null,
  cats: [
    { value: 'all', label: 'All' },
    { value: 'employment', label: 'Employment' },
    { value: 'entrepreneurship', label: 'Entrepreneurship' },
    { value: 'events', label: 'Events' },
    { value: 'diversity', label: 'Diversity' },
    { value: 'immigration', label: 'Immigration' },
    { value: 'community stories', label: 'Community Stories' },
  ],
  category: (catTerm === '') ? 'all' : catTerm.split('=')[1],
  categoryTerm: (catTerm === '') ? 'all' : catTerm.split('=')[1],
 /*  categoryTerm: 'all', */
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INIT_POSTS:
      const featuredBlog = payload.find((post) => post.acf.featured === true);
      const blogList = payload.filter((post) => post.acf.featured !== true);
      /* const blogListByCat = payload.filter((post) => state.categories.find( cat => post.categories.includes(cat.id))); */
      state.categories.forEach(res => Object.assign(res, { count: payload.filter(post => post.categories.find(cat => cat === res.id)).length }))
      return {
        ...state,
        isLoading: false,
        posts: payload,
        featuredBlog: featuredBlog,
        filteredPosts: blogList,
      };
    case POSTS_PAGINATION:
      let { currentPage, perPage, posts, filteredPosts, currentItems, totalItems } = state;
      const lastItem = currentPage * perPage;
      const firstItem = lastItem - perPage;
      currentItems =
        filteredPosts === null
          ? posts.slice(firstItem, lastItem)
          : filteredPosts.slice(firstItem, lastItem);
      totalItems = filteredPosts === null ? posts.length : filteredPosts.length;
      return { ...state, currentItems, totalItems, currentPage: payload };
    case SINGLE_POST:
      return { ...state, postIsLoading: false, singlePost: payload };
    case POSTS_CATEGORIES:
      return { ...state, categories: payload, singlePost: null };
    case FIND_POSTS_BY_CATEGORY:
      let filtered = state.posts.filter(post => post.categories.find(cat => cat === payload.id));
      return { ...state, category: payload, categoryTerm: payload.slug, filteredPosts: filtered };
    default:
      return state;
  }
};
export default reducer;
