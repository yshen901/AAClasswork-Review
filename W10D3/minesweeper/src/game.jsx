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
    this.resetGame = this.resetGame.bind(this);
  }

  // Checks for win/loss and prints appropriate message
  // Also reveals all bombs if lost
  checkStatus() {
    let { board } = this.state;
    if (board.won()) {
      return "You've won! Click here to play again!";
    }
    else if (board.lost()) {
      board.exploreBombs();
      return "You've lost! Click here to play again!";
    }
    return "Reset Game";
  }

  resetGame() {
    this.state.board.reset();
    this.setState({board: this.state.board});
  }

  updateGame() {
    this.setState({board: this.state.board}); // triggers re-render?
  }

  render() {
    let status = this.checkStatus();

    return (
      // allows Board to trigger re-render for game thing
      <div className="game-interface">
        <Board board={this.state.board} updateGame={this.updateGame}></Board> 
        <div className="game-status" onClick={this.resetGame}>{status}</div>
      </div>
    );
  }
}