import React from 'react';

export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPokemon(this.props.match.params.pokemonId);
  }

  render() {
    return (
      <div className="pokemon-detail">Details go here!</div>
    )
  }
}