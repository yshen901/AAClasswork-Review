import React from "react";

// Props contain this.board and this.updateGame from game.jsx
export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  printRow(arr, idx) {
    return (
      <div className="board-row" key={idx}>
        { arr.map( (tile, idx) => <div className="tile" key={idx}>T</div> )}
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