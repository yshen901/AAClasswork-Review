import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Orange from './orange';
import Yellow from './yellow';

class Red extends React.Component {
  render() {
    return(
      <div>
        <h2 className="red"></h2>
        {/* Links here */}
        <NavLink to='/red' exact>Red Only</NavLink>
        <NavLink to='/red/orange'>Orange</NavLink>
        <NavLink to='/red/yellow'>Yellow</NavLink>
        {/* Routes here */}
        <Route component={Orange} path="/red/orange"></Route>
        <Route component={Yellow} path="/red/yellow"></Route>
      </div>
    );
  }
};

export default Red;
