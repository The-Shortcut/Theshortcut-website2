import { INIT_EVENTS, SEARCH_EVENTS, PAGINATION } from './types';

import eventServices from '../services/events';

export const allEvents = () => async (dispatch) => {
  const events = await eventServices.getEvents();
  dispatch({
    type: INIT_EVENTS,
    payload: events,
  });
};

export const searchEvents = (term) => (dispatch) => {
  dispatch({
    type: SEARCH_EVENTS,
    payload: term,
  });
};

export const paginate = (page_number) => (dispatch) => {
  dispatch({
    type: PAGINATION,
    payload: page_number,
  });
};
