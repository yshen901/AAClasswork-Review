import { connect } from 'react-redux';
import PokemonDetail from "./pokemon_detail";

import { requestPokemon } from "../../actions/pokemon_actions";
import { selectPokemonItems, selectPokemonMoves } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
    items: state.entities.items,
    moves: state.entities.moves
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