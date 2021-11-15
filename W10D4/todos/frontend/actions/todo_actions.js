export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";

export const receiveTodos = (todos) => {
  return {
    action: RECEIVE_TODOS,
    todos,
  }
};

export const receiveTodo = (todo) => {
  return {
    action: RECEIVE_TODO,
    todo
  }
};