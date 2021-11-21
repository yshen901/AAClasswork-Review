import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

import { applyMiddleware } from 'redux';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(addLoggingToDispatch));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

// Best: Use applyMiddleware from react library and ES6 notation
const addLoggingToDispatch = store => next => action => {
  console.log(`Original State: ${JSON.stringify(store.getState())}`);
  console.log(`Action: ${JSON.stringify(action)}`);
  next(action);
  console.log(`New State: ${JSON.stringify(store.getState())}`);
}

export default configureStore;
