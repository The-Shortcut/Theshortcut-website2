import { INIT_FAQ } from './types';

import faqServices from '../services/faq';

export const getFAQ = () => async (dispatch) => {
  const faq = await faqServices.getFAQData();
  dispatch({
    type: INIT_FAQ,
    payload: faq.reverse(),
  });
};
