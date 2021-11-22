import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";
import Root from "./components/root";

import { fetchTodos } from "./actions/todo_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root");
  const store = configureStore();

  store.dispatch(fetchTodos());

  ReactDOM.render(<Root store={store}></Root>, root);
});