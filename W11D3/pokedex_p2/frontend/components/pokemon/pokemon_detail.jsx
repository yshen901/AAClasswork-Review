import React from 'react';

export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPokemon(this.props.match.params.pokemonId);
  }

  render() {
    let details = (
      <div className="pokemon-detail"></div>
    );

    let { pokemon, moves, items } = this.props;
    if (pokemon) { // if the pokemon has been loaded
      let { imageUrl, moveIds, itemIds } = pokemon; // deconstruct items to simplity
      details = (
        <div className="pokemon-detail">
          <figure>
            <img src={imageUrl} alt=""/>
          </figure>
          <ul>
            {moveIds.map((id) => (
              <li>{ moves[id].name }</li>
            ))}
          </ul>
          <ul className="toy-list">
            {itemIds.map((id) => (
              <li>
                <img src={items[id].imageUrl} alt=""/>
                {items[id].name}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return details;
  }
}