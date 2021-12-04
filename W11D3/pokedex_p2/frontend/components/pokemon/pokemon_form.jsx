import React from 'react';
export const TYPES = [
  'fire',
  'electric',
  'normal',
  'ghost',
  'psychic',
  'water',
  'bug',
  'dragon',
  'grass',
  'fighting',
  'ice',
  'flying',
  'poison',
  'ground',
  'rock',
  'steel'
];

export default class PokemonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      image_url: "",
      attack: "",
      defense: "",
      poke_type: "bug",
      move_1: "",
      move_2: ""
    }

    this.handleType = this.handleType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleType(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  // Throws up pokemonStats as well as moves
  handleSubmit(e) {
    e.preventDefault();
    let { name, image_url, attack, defense, poke_type, move_1, move_2 } = this.state;

    this.props.createPokemon({
      name, image_url, attack, defense, poke_type, move_names: [move_1, move_2]
    });
  }

  render() {
    return (
      <div className="pokemon-detail">
        <div className="pokemon-form">
          <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleType}/>
          <input type="text" placeholder="Image Url" name="image_url" value={this.state.image_url} onChange={this.handleType}/>
          <select name="poke_type" value={this.state.poke_type} onChange={this.handleType}>
            {TYPES.map((type, idx) => (
              <option value={type} key={idx}>{type}</option>
            ))}
          </select>
          <input type="text" placeholder="Attack" name="attack" value={this.state.attack} onChange={this.handleType}/>
          <input type="text" placeholder="Defense" name="defense" value={this.state.defense} onChange={this.handleType}/>

          <input type="text" placeholder="Move 1" name="move_1" value={this.state.move_1} onChange={this.handleType}/>
          <input type="text" placeholder="Move 2" name="move_2" value={this.state.move_2} onChange={this.handleType}/>

          <input type="submit" value="Submit Pokemon" onClick={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}