/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const getStatistics = async () => {
    const response = await axios.get(`https://theshortcut.org/wp-json/wp/v2/statistics/`);
    return response.data;
};

export default { getStatistics };