import { connect } from 'react-redux';
import PokemonDetail from "./pokemon_detail";

import { requestPokemon } from "../../actions/pokemon_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
    pokemonId: ownProps.match.params.pokemonId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestPokemon: (id) => dispatch(requestPokemon(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail)