const initialState = {
  city: "Please Select", 
  jobs: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "SWITCH_LOCATION":
      Object.freeze(state);
      let newState = Object.assign({}, state);
      newState.city = action.city;
      newState.jobs = action.jobs;
      return newState;
    default:
      return state;
  }
};

export default reducer;
