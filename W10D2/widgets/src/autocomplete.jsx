import React from "react";

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: "" };
  }

  renderSearchList() {
    return (
      <ul className="user-search-list">
        { this.props.users.map((user, i) => {
          if (user.indexOf(this.state.inputVal) == 0)
            return <li className="users-search-item" 
              key={i}
              onClick={() => this.setState({ inputVal: user})}>
                {user}
              </li>;
          else
            return "";
        })}
      </ul>
    );  
  }

  render() {
    return (
      <div className="widget">
        <input 
          type="text" 
          id="user-search-bar" 
          value={ this.state.inputVal } 
          onChange={ (e) => this.setState({ inputVal: e.target.value })}/>

        { this.renderSearchList() }
      </div>
    );
  }
}