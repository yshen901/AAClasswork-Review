import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";
import Root from "./components/root";


document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root");
  const store = configureStore();
  ReactDOM.render(<Root store={store}></Root>, root);
});

// TESTING CODE (P3)
import {fetchTodos} from "./util/todo_api_util";
window.fetchTodos = fetchTodos;

// TESTING CODE (P2)
// import { receiveTodos, receiveTodo, removeTodo } from "./actions/todo_actions";
// import { receiveSteps, receiveStep, removeStep } from "./actions/steps_actions";
// import { allTodos } from "./frontend/reducers/selectors";
// let storeTest = configureStore();
// window.storeTest = storeTest;
// const newTodos = [{ id: 1, title: 'Learn Redux', body: 'It is fundamental', done: false }];
// const newSteps = [{ id: 1, title: 'Dispatch actions', done: false, todo_id: 1 }];
// storeTest.dispatch(receiveTodos(newTodos));
// storeTest.dispatch(receiveSteps(newSteps));
// console.log(storeTest.getState()); // should return only the new todos and steps

// storeTest.dispatch(receiveTodo({ id: 3, title: "New Todo"}));
// storeTest.dispatch(receiveStep({ id: 3, title: "New Step", todo_id: 2, done: false}));
// console.log(storeTest.getState()); // should include the newly added todo and step

// storeTest.dispatch(receiveTodo({ id: 3, title: "Newer Todo"}));
// storeTest.dispatch(receiveStep({ id: 3, title: "Newer Step", done: true}));
// console.log(storeTest.getState()); // should update the previously added todo and step

// storeTest.dispatch(removeTodo({ id: 3, title: "Newer Todo"}));
// storeTest.dispatch(removeStep({ id: 3, title: "Newer Step"}));
// console.log(storeTest.getState()); // should not include the previously added todo