import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';

const Root = ({ store }) => (
  <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>
  </Provider>
);

const App = () => (
  <div className="pokedex">
    <Route path="/" component={PokemonIndexContainer}></Route>
    <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer}></Route>
  </div>
)

export default Root;