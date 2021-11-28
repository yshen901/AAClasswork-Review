import React from "react";
import {Link} from "react-router-dom";

export default class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { poke } = this.props;
    return (
      <li className="pokemon-index-item">
          <Link to={`/pokemon/${poke.id}`}> 
            <span>{poke.id}</span>
            <img src={poke.imageUrl}/>
            <span>{poke.name}</span>
          </Link>
      </li>
    );
  }
}