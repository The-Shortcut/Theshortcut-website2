import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Reducers
import eventsReducer from './reducers/eventsReducer';
import teamsReducer from './reducers/teamsReducer';
import postsReducer from './reducers/postsReducer';

const reducer = combineReducers({
  events: eventsReducer,
  team: teamsReducer,
  posts: postsReducer,
});
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
