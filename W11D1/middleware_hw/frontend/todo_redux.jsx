import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);
  
  // antipattern! don't override the store.dispatch
  // store.dispatch = addLoggingToDispatch(store); 

  // better
  store = applyMiddlewares(store, [addLoggingToDispatch]);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

// NOT GOOD: Depends on overwriting store.dispatch which is not good
// const addLoggingToDispatch = store => {
//   let originalDispatch = store.dispatch;

//   return (action) => {
//     console.log(`Original State: ${JSON.stringify(store.getState())}`);
//     console.log(`Action: ${JSON.stringify(action)}`);
//     originalDispatch(action);
//     console.log(`New State: ${JSON.stringify(store.getState())}`);
//   }
// };

// BETTER: Use currying to create the middleware signature
function addLoggingToDispatch(store) {
  return function (next) {
    return function (action) {
      console.log(`Original State: ${JSON.stringify(store.getState())}`);
      console.log(`Action: ${JSON.stringify(action)}`);
      next(action);
      console.log(`New State: ${JSON.stringify(store.getState())}`);
    };
  };
}

function applyMiddlewares(store, middlewares) {
  let dispatch = store.dispatch;
  for (let i = 0; i < middlewares.length; i++) {
    dispatch = middlewares[i](store)(dispatch);
  }

  return Object.assign({}, store, {dispatch});
}