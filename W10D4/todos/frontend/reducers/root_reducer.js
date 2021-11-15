import todoReducer from "./todo_reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: todoReducer
})
export default rootReducer;