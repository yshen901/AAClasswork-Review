import { createStore } from "redux";
import rootReducer from "../reducers/root_reducer";

const configureStore = () => {
  let store = createStore(rootReducer);
  return store;
};
export default configureStore;