export const fetchPokemons = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  });
};

export const fetchPokemon = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/pokemon/${id}`
  });
};

export const createPokemon = (pokemon) => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon",
    data: { pokemon }
  });
};