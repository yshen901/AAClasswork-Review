import { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todoReducer = (state=initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_TODO:
      newState = Object.assign({}, state);
      newState.todos[action.todo.id] = action.todo;
      return newState;
    case RECEIVE_TODOS:
      newState = Object.assign({}, state);
      for (let i = 0; i < action.todos.length; i++) 
        newState.todos[action.todos[i]] = action.todos[i];
      return newState;
    default:
      return state;
  }
}
export default todoReducer;