import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer";

import thunk from "../middleware/thunk"

const configureStore = () => {
  let store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
  );

  return store;
};
export default configureStore;