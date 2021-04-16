import { INIT_EVENTS } from './types';

import eventServices from '../services/events';

export const allEvents = () => async (dispatch) => {
  const events = await eventServices.getEvents();
  dispatch({
    type: INIT_EVENTS,
    payload: events,
  });
};
