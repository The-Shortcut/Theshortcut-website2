import {
  INIT_FAQ,
  INIT_PRIVACY_POLICIES,
  INIT_CODE_OF_CONDUCT,
  INIT_TERMS,
  SERVICES_FAQ_DATA,
  BYOB_FAQ_DATA,
  CONTACT_FORM_NOTIFICATION,
  CONTACT_FORM_NOTIFICATION_ERROR,
} from '../actions/types';

const initState = {
  faqLoaded: false,
  faq_about: null,
  policiesLoaded: false,
  policyTopic: null,
  policies: null,
  codesLoaded: false,
  codeTopic: null,
  codeOfConduct: null,
  termsLoaded: false,
  termTopic: null,
  terms: null,
  servicesFaqLoaded: false,
  coachingFAQ: null,
  trainingFAQ: null,
  byobFaqLoaded: false,
  byobFAQ: null,
  beforeFAQ: null,
  inProcessFAQ: null,
  aboutFAQ: null,
  contactFormData: null,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INIT_FAQ:
      return { ...state, isLoading: true, faq_about: payload };
    case INIT_PRIVACY_POLICIES:
      let policiesArr = payload?.filter((policy) => policy.title.rendered !== 'Privacy Policy');
      let policyTopic = payload?.pop();
      return {
        ...state,
        policiesLoaded: true,
        policyTopic: policyTopic,
        policies: policiesArr.reverse(),
      };
    case INIT_CODE_OF_CONDUCT:
      let codesArr = payload?.filter((policy) => policy.title.rendered !== 'Code Of Conduct');
      let codeTopic = payload?.pop();
      return {
        ...state,
        codesLoaded: true,
        codeTopic: codeTopic,
        codeOfConduct: codesArr.reverse(),
      };
    case INIT_TERMS:
      let termsArr = payload?.filter(
        (term) => term.title.rendered !== 'The Shortcut Terms of Services'
      );
      let termTopic = payload?.pop();
      return { ...state, termsLoaded: true, termTopic, terms: termsArr.reverse() };
    case SERVICES_FAQ_DATA:
      let coachingFaq = payload?.filter((faq) => faq?.acf.tag === 'coaching');
      let trainingFaq = payload?.filter((faq) => faq?.acf.tag === 'training');
      return {
        ...state,
        servicesFaqLoaded: true,
        coachingFAQ: coachingFaq,
        trainingFAQ: trainingFaq,
      };
    case BYOB_FAQ_DATA:
      let beforeFaq = payload?.filter((faq) => faq.acf.tag === 'before');
      let inProcessFaq = payload?.filter((faq) => faq.acf.tag === 'in-process');
      let aboutFaq = payload?.filter((faq) => faq.acf.tag === 'about');
      return {
        ...state,
        byobFaqLoaded: true,
        byobFAQ: payload,
        beforeFAQ: beforeFaq.reverse(),
        inProcessFAQ: inProcessFaq.reverse(),
        aboutFAQ: aboutFaq.reverse(),
      };
    case CONTACT_FORM_NOTIFICATION:
      return { ...state, contactFormData: payload.data };
    case CONTACT_FORM_NOTIFICATION_ERROR:
      return { ...state, contactFormData: payload };
    default:
      return state;
  }
};
export default reducer;
