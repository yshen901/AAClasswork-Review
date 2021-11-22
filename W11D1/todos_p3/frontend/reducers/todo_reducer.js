import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from "../actions/todo_actions";

const todoReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_TODO:
      newState = Object.assign({}, state);
      newState[action.todo.id] = action.todo;
      return newState;
    case RECEIVE_TODOS:
      newState = Object.assign({}, state);
      for (let i = 0; i < action.todos.length; i++)
        newState[action.todos[i].id] = action.todos[i];
      return newState;
    case REMOVE_TODO:
      newState = Object.assign({}, state);
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
}
export default todoReducer;