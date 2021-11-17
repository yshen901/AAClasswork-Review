import { REMOVE_STEP, RECEIVE_STEP, RECEIVE_STEPS } from "../actions/steps_actions";

let initialState = {
  1: {
    id: 1,
    todo_id: 1,
    title: "Prep hose",
    body: "Unravel and then turn on the water.",
    done: false,
  },
  2: {
    id: 2,
    todo_id: 1,
    title: "Spray car",
    body: "Point and shoot",
    done: false,
  },
  3: {
    id: 3,
    todo_id: 1,
    title: "Apply soap",
    body: "with a sponge.",
    done: false,
  },
  4: {
    id: 4,
    todo_id: 1,
    title: "Rinse off",
    body: "point and shoot",
    done: false,
  },
  5: {
    id: 5,
    todo_id: 2,
    title: "Wet and soap up dog",
    body: "Dunk dog in soapy water",
    done: false,
  },
  6: {
    id: 6,
    todo_id: 2,
    title: "Rinse dog",
    body: "with the hose from earlier...max setting",
    done: false,
  }
};

const stepReducer = (state=initialState, action) => {
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