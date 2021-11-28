import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Indigo from './indigo';


class Blue extends React.Component {
  render() {
    return (
      <div>
        <h2 className="blue"></h2>
        {/* Links here */}
        <NavLink to='/blue' exact>Blue Only</NavLink>
        <NavLink to='/blue/indigo'>Indigo</NavLink>
        {/* Routes here */}
        <Route component={Indigo} path="/blue/indigo"></Route>
      </div>
    );
  }
};

export default Blue;
