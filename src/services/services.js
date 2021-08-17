/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const getTrainingService = async () => {
    const response = await axios.get(`https://theshortcut.org/wp-json/wp/v2/training/?per_page=50`);
    return response.data;
};

export default { getTrainingService };