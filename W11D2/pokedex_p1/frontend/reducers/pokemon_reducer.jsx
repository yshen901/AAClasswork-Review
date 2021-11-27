import {
  RECEIVE_POKEMON,
  RECEIVE_POKEMONS
} from "../actions/pokemon_actions";

const pokemonReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POKEMONS:
      return action.pokemons;
    case RECEIVE_POKEMON:
      const newState = Object.assign({}, state);
      newState[action.pokemon.id] = action.pokemon;
      return newState;
    default:
      return state;
  }
};
export default pokemonReducer;