import { connect } from 'react-redux';
import { allPokemon } from "../reducers/selectors";
import { fetchPokemons } from '../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

const mapStateToProps = (state, ownProps) => { 
  return {
  pokemons: allPokemon(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPokemons: () => dispatch(fetchPokemons())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);