import { INIT_EVENTS, SEARCH_EVENTS, PAGINATION } from '../actions/types';

const initState = {
  isLoading: true,
  events: null,
  allEvents: null,
  filteredEvents: null,
  searchTags: [
    { value: 'All', label: 'All' },
    { value: 'upcoming', label: 'Upcoming' },
    { value: 'recorded', label: 'Recorded' },
    { value: 'past', label: 'Past' },
  ],
  // for pagination
  currentPage: 1,
  perPage: 9,
  currentItems: [],
  totalItems: 0,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INIT_EVENTS:
      const incompleted = payload.filter((ev) => ev.status !== 'completed');

      return {
        ...state,
        events: incompleted,
        allEvents: payload,
        filteredEvents: incompleted,
        isLoading: false,
      };
    case SEARCH_EVENTS:
      let filterEvents = [];
      filterEvents = state.allEvents.filter(
        (event) =>
          String(event.name.text).toLowerCase().includes(payload.toLowerCase()) ||
          String(event.summary).toLowerCase().includes(payload.toLowerCase())
      );
      if (payload === 'all') {
        filterEvents = state.events;
      }
      if (payload === 'past') {
        filterEvents = state.allEvents.filter((event) => event.status === 'completed');
      }
      if (payload === 'recorded') {
        filterEvents = state.events.filter((event) => event.status.includes('record'));
      }
      if (payload === 'upcoming') {
        filterEvents = state.events.filter((event) => event.status === 'upcoming' || event.status === 'Application Open');
      }
      if (payload === '') {
        filterEvents = state.events
      }
      return { ...state, filteredEvents: filterEvents, currentPage: 1 };

    case PAGINATION:
      let { currentPage, perPage, events, filteredEvents, currentItems, totalItems } = state;

      const lastItem = currentPage * perPage;
      const firstItem = lastItem - perPage;
      currentItems =
        filteredEvents === null
          ? events.slice(firstItem, lastItem)
          : filteredEvents.slice(firstItem, lastItem);
      totalItems = filteredEvents === null ? events.length : filteredEvents.length;
      return { ...state, currentItems, totalItems, currentPage: payload };
    default:
      return state;
  }
};

export default reducer;
