import React from 'react';
import { Provider } from 'react-redux';

import PokemonIndexContainer from "./pokemon_index_container";

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <PokemonIndexContainer></PokemonIndexContainer>
    </Provider>
  );
};
export default Root;