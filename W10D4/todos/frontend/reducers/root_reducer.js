import todoReducer from "./todo_reducer";
import stepReducer from "./step_reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: todoReducer,
  steps: stepReducer,
});

export default rootReducer;