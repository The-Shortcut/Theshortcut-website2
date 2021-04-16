/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const getTeamMembers = async () => {
  const response = await axios.get(`https://theshortcut.org/wp-json/wp/v2/team/?per_page=50`);
    return response.data;
};

const getBoardMembers = async () => {
  const response = await axios.get('https://theshortcut.org/wp-json/wp/v2/board/?per_page=50');
  return response.data;
};

const getByobSpeakers = async () => {
  const response = await axios.get(
    'https://theshortcut.org/wp-json/wp/v2/byob_speakers/?per_page=50'
    );
  return response.data;
};

export default {
  getTeamMembers,
  getBoardMembers,
  getByobSpeakers,
};
