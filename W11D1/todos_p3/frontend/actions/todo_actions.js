export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const REMOVE_TODO = "REMOVE_TODO";

import * as APIUtil from "../util/todo_api_util";

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos,
  }
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  }
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo
  }
};

export const fetchTodos = () => (dispatch) => {
  return APIUtil
    .fetchTodos()
    .then(todos => {
      dispatch(receiveTodos(todos));
    });
};

export const createTodo = (todo) => (dispatch) => {
  return APIUtil
    .createTodo(todo)
    .then(todo => {
      dispatch(receiveTodo(todo));
    });
};

export const updateTodo = (todo) => (dispatch) => {
  return APIUtil
    .updateTodo(todo)
    .then(todo => {
      dispatch(receiveTodo(todo));
    });
};

export const deleteTodo = (todo) => (dispatch) => {
  APIUtil
    .deleteTodo(todo)
    .then(() => {
      dispatch(removeTodo(todo));
    });
};