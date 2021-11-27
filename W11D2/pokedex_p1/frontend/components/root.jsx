import React from 'react';
import { Provider } from 'react-redux';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <div>hello</div>
    </Provider>
  );
};
export default Root;