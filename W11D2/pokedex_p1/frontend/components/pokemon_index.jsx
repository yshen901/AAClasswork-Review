import React from 'react';

export default class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPokemons();
  };

  render() {
    return (
      <ul className="pokemon-list">
        { this.props.pokemons.map((pokemon) => (
          <div className="pokemon-list-item">
            <div className="pokemon-name">{pokemon.name}</div>
            <img src={pokemon.image_url} alt={pokemon.name}/>
          </div>
        )) }
      </ul>
    )
  }
}