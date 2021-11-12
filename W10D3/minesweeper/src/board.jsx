import React from "react";
import Tile from "./tile";

// Props contain this.board and this.updateGame from game.jsx
export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  // Checks for win/loss and prints appropriate message
  // Also reveals all bombs if lost
  checkStatus() {
  }

  printRow(arr, idx) {
    return (
      <div className="board-row" key={idx}>
        { arr.map( (tile, idx) => 
          <Tile updateGame={this.props.updateGame} tile={tile} key={idx}></Tile> 
        )}
      </div>
    )
  }

  render() {
    return (
      <div className="board">
        { this.props.board.grid.map( (row, idx) => this.printRow(row, idx))}
      </div>
    )
  }
}