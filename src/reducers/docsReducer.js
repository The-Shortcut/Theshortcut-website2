import {
  INIT_FAQ,
  INIT_PRIVACY_POLICIES,
  INIT_CODE_OF_CONDUCT,
  INIT_TERMS,
  SERVICES_FAQ_DATA,
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
    default:
      return state;
  }
};
export default reducer;
