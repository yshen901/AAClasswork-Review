import React from 'react';

import GiphysIndex from './giphys_index';

export default class GiphysSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ""
    };

    this.submitSearch = this.submitSearch.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitSearch(e) {
    e.preventDefault();

    this.props.fetchSearchGiphys(this.state.searchTerm)
      .then(
        () => this.setState({ searchTerm: "" })
      );
  }

  render() {
    return (
      <div className="giphy-search">
        <input type="text" 
          name="searchTerm" 
          value={this.state.searchTerm} 
          className="giphy-search-field"
          onChange={this.onChange}/>
        <button onClick={this.submitSearch} className="giphy-search-submit">Submit</button>
        <GiphysIndex giphys={this.props.giphys}></GiphysIndex>
      </div>
    )
  }
}