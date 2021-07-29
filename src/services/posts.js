/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const getPostsData = async () => {
  const responsePage1 = await axios.get('https://theshortcut.org/wp-json/wp/v2/posts/?page=1&per_page=100');
  const responsePage2 = await axios.get('https://theshortcut.org/wp-json/wp/v2/posts/?page=2&per_page=100');
  return responsePage1.data.concat(responsePage2.data);
};

const getSinglePostData = async (id) => {
  const response = await axios.get(`https://theshortcut.org/wp-json/wp/v2/posts/${id}`);
  const categories = await axios.get(`https://theshortcut.org/wp-json/wp/v2/categories?post=${id}`);
  return {...response.data, categoriesData: categories.data};
};

const getPostsCategories = async () => {
  const response = await axios.get(
    'https://theshortcut.org/wp-json/wp/v2/categories/?per_page=100'
  );
  return response.data;
};
export default { getPostsData, getSinglePostData, getPostsCategories };
