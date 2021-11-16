import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./frontend/store/store";
import { receiveTodos, receiveTodo, removeTodo } from "./frontend/actions/todo_actions";
import { receiveSteps, receiveStep, removeStep } from "./frontend/actions/steps_actions";

import Root from "./frontend/components/root";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root");
  const store = configureStore();
  ReactDOM.render(<Root store={store}></Root>, root);
});

/*
  let store = configureStore();
  const newTodos = [{ id: 1, title: 'Learn Redux', body: 'It is fundamental', done: false }];
  const newSteps = [{ id: 1, title: 'Dispatch actions', done: false, todo_id: 1 }];
  store.dispatch(receiveTodos(newTodos));
  store.dispatch(receiveSteps(newSteps));
  console.log(store.getState()); // should return only the new todos and steps

  store.dispatch(receiveTodo({ id: 3, title: "New Todo"}));
  store.dispatch(receiveStep({ id: 3, title: "New Step", todo_id: 2, done: false}));
  console.log(store.getState()); // should include the newly added todo and step

  store.dispatch(receiveTodo({ id: 3, title: "Newer Todo"}));
  store.dispatch(receiveStep({ id: 3, title: "Newer Step", done: true}));
  console.log(store.getState()); // should update the previously added todo and step

  store.dispatch(removeTodo({ id: 3, title: "Newer Todo"}));
  store.dispatch(removeStep({ id: 3, title: "Newer Step"}));
  console.log(store.getState()); // should not include the previously added todo
*/