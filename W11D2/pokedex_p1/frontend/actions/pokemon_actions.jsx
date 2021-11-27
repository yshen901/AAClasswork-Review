import * as APIUtil from "../util/pokemon_util";

export const RECEIVE_POKEMONS = "RECEIVE_POKEMONS";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";

export const receivePokemons = (pokemons) => {
  return {
    type: RECEIVE_POKEMONS,
    pokemons
  };
};

export const receivePokemon = (pokemon) => {
  return {
    type: RECEIVE_POKEMON,
    pokemon
  };
};

export const fetchPokemons = () => (dispatch) => {
  return APIUtil
    .fetchPokemons()
    .then(pokemons => dispatch(receivePokemons(pokemons)));
};

export const fetchPokemon = (id) => (dispatch) => {
  return APIUtil 
    .fetchPokemon(id)
    .then(pokemon => dispatch(receivePokemon(pokemon)));
};

export const createPokemon = (pokemon) => (dispatch) => {
  return APIUtil 
    .createPokemon(pokemon)
    .then(pokemon => dispatch(receivePokemon(pokemon)));
};