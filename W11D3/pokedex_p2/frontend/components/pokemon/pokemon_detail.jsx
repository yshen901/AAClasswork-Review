import React from 'react';
import { Link, Route } from 'react-router-dom';
import ItemDetailContainer from './item_detail_container';

export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPokemon(this.props.match.params.pokemonId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.pokemonId != prevProps.match.params.pokemonId) {
      this.props.requestPokemon(this.props.match.params.pokemonId);
    }
  }

  render() {
    let details = (
      <div className="pokemon-detail"></div>
    );

    let { pokemon, moves, items } = this.props;
    if (pokemon && pokemon.moveIds) { // if the pokemon has been loaded
      let { imageUrl, moveIds, itemIds } = pokemon; // deconstruct items to simplity
      details = (
        <div className="pokemon-detail">
          <figure>
            <img src={imageUrl} alt=""/>
          </figure>
          <ul>
            {moveIds.map((id) => (
              <li key={id}>{ moves[id].name }</li>
            ))}
          </ul>
          <div className="toys">
            <h3>Items</h3>
            <ul className="toy-list">
              {itemIds.map((id) => {
                return (
                  <li key={id}>
                    <Link to={`/pokemon/${pokemon.id}/item/${id}`}>
                      <img src={items[id].imageUrl} alt=""/>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <Route 
            path="/pokemon/:pokemonId/item/:itemId"
            component={ItemDetailContainer}
          ></Route>
        </div>
      );
    }

    return details;
  }
}