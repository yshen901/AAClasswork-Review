import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from './../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
  case RECEIVE_ALL_POKEMON:
    return Object.assign({}, action.pokemon, state);
  case RECEIVE_POKEMON:
    const newState = Object.assign({}, state);
    let pokemonId = action.pokemonData.pokemon.id;
    let pokemonInfo = action.pokemonData.pokemon;
    pokemonInfo.moveIds = Object.keys(action.pokemonData.moves);
    pokemonInfo.itemIds = Object.keys(action.pokemonData.items);

    newState[pokemonId] = pokemonInfo;
    return newState;
  default:
    return state;
  }
}
  
export default pokemonReducer;
