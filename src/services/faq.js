import axios from 'axios';

const getFAQData = async () => {
  const response = await axios.get('https://theshortcut.org/wp-json/wp/v2/faq/?per_page=50');
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getFAQData };
