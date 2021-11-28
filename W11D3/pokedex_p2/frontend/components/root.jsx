import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>
  </Provider>
);

const App = () => (
  <div>
    <Route path="/" component={PokemonIndexContainer}></Route>
  </div>
)

export default Root;