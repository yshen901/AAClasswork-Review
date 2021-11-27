import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as APIUtil from "./util/api_util";
import { fetchSearchGiphys, receiveSearchGiphys } from './actions/giphy_actions';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  
  const root = document.querySelector("#root");
  ReactDOM.render(<Root store={store}></Root>, root)
});