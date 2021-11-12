import React from "react";

export default class Tile extends React.Component {
  // Receives tile object and updateGame
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // Toggle flag with the shift+click
  handleClick(e) {
    e.preventDefault();
    if (e.shiftKey)
      this.props.tile.toggleFlag();
    else
      this.props.tile.explore();

    this.props.updateGame();
  }

  render() {
    let { explored, flagged, bombed } = this.props.tile;
    
    /*
      There are four possible situations:
        1. Explored and safe
        2. Explored and bombed
        3. Flagged
        4. Unexplored
    */
    let status, content;
    if (explored) {
      status = "explored";
      if (bombed)
        content = "B";
      else
        content = this.props.tile.adjacentBombCount()
    }
    else if (flagged)
      status = "flagged";
    else 
      status = "unexplored"

    return(
      <div 
        className={`tile ${status}`} 
        onClick={this.handleClick}>{content}</div>
    );
  }
}