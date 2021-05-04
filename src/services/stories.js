import axios from 'axios';

const getSuccessStories = async () => {
  const response = await axios.get(
    `https://theshortcut.org/wp-json/wp/v2/success_stories/?per_page=10`
    );
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getSuccessStories };
