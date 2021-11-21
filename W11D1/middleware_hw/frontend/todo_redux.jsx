import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);
  store.dispatch = addLoggingToDispatch(store);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

const addLoggingToDispatch = store => {
  let originalDispatch = store.dispatch;

  return (action) => {
    console.log(`Original State: ${JSON.stringify(store.getState())}`);
    console.log(`Action: ${JSON.stringify(action)}`);
    originalDispatch(action);
    console.log(`New State: ${JSON.stringify(store.getState())}`);
  }
};