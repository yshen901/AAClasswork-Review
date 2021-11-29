export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon)
}

// Unused for now
export const selectPokemonMoves = (moveIds, state) => {
  return moveIds.map((id) => state.entities.moves[id]);
}

export const selectPokemonItems = (itemIds, state) => {
  return itemIds.map((id) => state.entities.items[id]);
};