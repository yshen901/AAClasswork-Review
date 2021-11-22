const thunk = ({dispatch, getState}) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState); // fire the action if it's a function (aka thunk)
  }
  return next(action); // otherwise move to next middleware
};

export default thunk;