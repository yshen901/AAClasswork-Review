import React from "react";
import * as Minesweeper from "./minesweeper";

import Board from "./board";

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: new Minesweeper.Board(10, 10),
    }

    this.updateGame = this.updateGame.bind(this);
  }

  updateGame() {
    this.setState({board: this.state.board}); // triggers re-render?
  }

  render() {
    return (
      // allows Board to trigger re-render for game thing
      <Board board={this.state.board} updateGame={this.updateGame}></Board> 
    );
  }
}