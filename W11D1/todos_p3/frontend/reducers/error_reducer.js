import { CLEAR_ERRORS, RECEIVE_ERROR } from "../actions/errors_actions";

const errorReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case CLEAR_ERRORS:
      return {};
    case RECEIVE_ERROR:
      let newState = Object.assign({}, state);
      newState.error = {
        status: action.error.status,
        body: action.error.responseJSON
      };
      return newState;
    default:
      return state;
  }
}
export default errorReducer;