import { REMOVE_STEP, RECEIVE_STEP, RECEIVE_STEPS } from "../actions/steps_actions";

const stepReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_STEP:
      newState = Object.assign({}, state);
      newState[action.step.id] = action.step;
      return newState;
    case RECEIVE_STEPS:
      newState = Object.assign({}, state);
      for (let i = 0; i < action.steps.length; i++) 
        newState[action.steps[i].id] = action.steps[i];
      return newState;
    case REMOVE_STEP:
      newState = Object.assign({}, state);
      delete newState[action.step.id];
      return newState;
    default: 
      return state;
  }
}

export default stepReducer;