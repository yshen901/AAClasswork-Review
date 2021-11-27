import { RECEIVE_SEARCH_GIPHYS } from '../actions/giphy_actions';

const giphysReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SEARCH_GIPHYS:
      const newState = {};
      for (let i = 0; i < action.giphys.length; i++) 
        newState[action.giphys[i].id] = action.giphys[i];
      return newState;
    default:
      return state;
  }
};

export default giphysReducer;