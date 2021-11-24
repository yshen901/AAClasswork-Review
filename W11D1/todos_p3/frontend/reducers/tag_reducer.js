import { RECEIVE_TAGS } from "../actions/tag_actions";

const tagReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TAGS:
      return action.tags;
    default:
      return state;
  }
};
export default tagReducer;