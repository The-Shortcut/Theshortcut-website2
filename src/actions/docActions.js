import { INIT_FAQ, INIT_PRIVACY_POLICIES, INIT_CODE_OF_CONDUCT, INIT_TERMS } from './types';

import docServices from '../services/docs';

export const getFAQ = () => async (dispatch) => {
  const faq = await docServices.getFAQData();
  dispatch({
    type: INIT_FAQ,
    payload: faq.reverse(),
  });
};

export const getPrivacyPolicies = () => async (dispatch) => {
  const policies = await docServices.getPrivacyPoliciesData();
  dispatch({
    type: INIT_PRIVACY_POLICIES,
    payload: policies,
  });
};

export const getCodeOfConduct = () => async (dispatch) => {
  const codes = await docServices.getCodeOfDConductData();
  dispatch({
    type: INIT_CODE_OF_CONDUCT,
    payload: codes,
  });
};

export const getTerms = () => async (dispatch) => {
  const terms = await docServices.getTermsData();
  dispatch({
    type: INIT_TERMS,
    payload: terms,
  });
};
