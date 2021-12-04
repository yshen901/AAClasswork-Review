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
    
    if (action.pokemonData.moves)
      pokemonInfo.moveIds = Object.keys(action.pokemonData.moves);
    else
      pokemonInfo.moveIds = [];

    if (action.pokemonData.items)
      pokemonInfo.itemIds = Object.keys(action.pokemonData.items);
    else
      pokemonInfo.moveIds = [];

    newState[pokemonId] = pokemonInfo;
    return newState;
  default:
    return state;
  }
}
  
export default pokemonReducer;
