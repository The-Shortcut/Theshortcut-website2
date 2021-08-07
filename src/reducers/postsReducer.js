import {
  INIT_POSTS,
  POSTS_PAGINATION,
  SINGLE_POST,
  POSTS_CATEGORIES,
  FIND_POSTS_BY_CATEGORY,
  SEARCH_POSTS,
} from '../actions/types';

let catItem = window.location.hash;

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
  categoryTerm: catItem === '' ? 'all' : catItem.split('#')[1],
  searchTerm: '',
  /* searchTerm: searchItem === '' ? 'all' : searchItem.split('=')[1], */
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INIT_POSTS:
      const featuredBlog = payload.find((post) => post.acf.featured === true);
      const blogList = payload.filter((post) => post.acf.featured !== true);
      /* const blogListByCat = payload.filter((post) => state.categories.find( cat => post.categories.includes(cat.id))); */
      state.categories.forEach((res) =>
        Object.assign(res, {
          count: payload.filter((post) => post.categories.find((cat) => cat === res.id)).length,
        })
      );
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
      let filtered = state.categoryTerm === 'all' ? state.posts : state.posts.filter((post) =>
        post.categories.find((cat) => cat === payload.id)
      );
      return { ...state, category: payload, categoryTerm: payload.slug, filteredPosts: filtered };
    case SEARCH_POSTS:
      let searchedPosts = [];
      searchedPosts = state.posts.filter(
        (post) =>
          String(post.title.rendered).toLowerCase().includes(payload.toLowerCase()) ||
          String(post.excerpt.rendered).toLowerCase().includes(payload.toLowerCase()) ||
          String(post.content.rendered).toLowerCase().includes(payload.toLowerCase())
      );
      return {
        ...state,
        searchTerm: payload,
        filteredPosts: searchedPosts,
      };
    default:
      return state;
  }
};
export default reducer;
