import React from 'react';
import {
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import Red from './red';
import Green from './green';
import Blue from './blue';
import Violet from './violet';

class Rainbow extends React.Component {
  render() {
    return (
      <div>
        <h1>Rainbow Router!</h1>
        {/* Your links should go here */}
        <NavLink to="/red">Red</NavLink>
        <NavLink to="/green">Green</NavLink>
        <NavLink to="/blue">Blue</NavLink>
        <NavLink to="/violet">Violet</NavLink>
        <div id="rainbow">
          {/* Your routes should go here */}
          <div id="rainbow">
          <Route component={Red} path="/red"></Route>
          <Route component={Green} path="/green"></Route>
          <Route component={Blue} path="/blue"></Route>
          <Route component={Violet} path="/violet"></Route>
          </div>
        </div>
      </div>
    );
  }
};

export default Rainbow;
