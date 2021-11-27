import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from "./components/root";

import * as PokemonAPIUtil from "./util/pokemon_util";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root");
  const store = configureStore();
  ReactDOM.render(<Root store={store}></Root>, root);
});