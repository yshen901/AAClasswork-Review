import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/root_reducer";

const configureStore = () => {
  const store = createStore(rootReducer, {}, applyMiddleware(thunk));
  return store;
}
export default configureStore;