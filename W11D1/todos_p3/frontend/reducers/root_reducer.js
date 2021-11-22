import todoReducer from "./todo_reducer";
import stepReducer from "./step_reducer";
import errorReducer from "./error_reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: todoReducer,
  steps: stepReducer,
  errors: errorReducer,
});

export default rootReducer;