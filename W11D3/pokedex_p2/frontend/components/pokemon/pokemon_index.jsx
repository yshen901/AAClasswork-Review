import React from 'react';
import PokemonIndexItem from "./pokemon_index_item";

class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
  }
  
  componentDidMount() {
    this.props.requestAllPokemon();
  }
  
  render(){
    return (
    <section className="pokedex">
      <ul>
        {this.props.pokemon.map((poke) => (
          <PokemonIndexItem key={poke.id} poke={poke}></PokemonIndexItem>
        ))}
      </ul>
    </section>
    )
  }
}
  
  
  
  export default PokemonIndex;