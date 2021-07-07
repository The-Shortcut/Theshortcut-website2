import axios from 'axios';

const getFAQData = async () => {
  const response = await axios.get('https://theshortcut.org/wp-json/wp/v2/faq/?per_page=50');
  return response.data;
};

const getPrivacyPoliciesData = async () => {
  const response = await axios.get('https://theshortcut.org/wp-json/wp/v2/policies/?per_page=50');
  return response.data;
};

const getCodeOfDConductData = async () => {
  const response = await axios.get(
    'https://theshortcut.org/wp-json/wp/v2/coduct_codes/?per_page=50'
  );
  return response.data;
};

const getTermsData = async () => {
  const response = await axios.get('https://theshortcut.org/wp-json/wp/v2/terms/');
  return response.data;
};

const getServicesFAQData = async () => {
  const response = await axios.get('https://theshortcut.org/wp-json/wp/v2/services_faq/');
  return response.data;
};

const getByobFAQData = async () => {
  const response = await axios.get('https://theshortcut.org/wp-json/wp/v2/byob_faq/?per_page=50');
  console.log('response.data')
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getFAQData,
  getPrivacyPoliciesData,
  getCodeOfDConductData,
  getTermsData,
  getServicesFAQData,
  getByobFAQData,
};
