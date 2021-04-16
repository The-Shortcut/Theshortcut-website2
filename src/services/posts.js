/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const getPostsData = async () => {
  const response = await axios.get('https://theshortcut.org/wp-json/wp/v2/posts/?per_page=100');
    return response.data;
};
export default { getPostsData };
