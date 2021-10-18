const Board = require('./board.js');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

class Game {
  constructor() {
    this.board = new Board();
    this.currPlayer = "X";
    this.prevPlayer = "O";
  }

  play() {
    this.board.print();
    reader.question(`It is ${this.currPlayer}'s turn. Please input your coords i.e. 1,3: `, (answer) => {
      let pos = answer.split(",").map((val) => parseInt(val));
      if (!this.board.validPos(pos)) {
        console.log("This spot is invalid! Please input a valid spot in the appropriate format!");
      }
      else if (this.board.empty(pos)) {
        this.board.placeMark(pos, this.currPlayer);
        [this.currPlayer, this.prevPlayer] = [this.prevPlayer, this.currPlayer];
      }
      else {
        console.log("This spot is already taken! Try again...\n");
      }

      let winner = this.board.winner();
      console.log(winner);
      if (winner) {
        console.log(`${winner} Wins!`);
        reader.close();
      }
      else if (this.board.tied()) {
        console.log("Game tied! No one wins!");
        reader.close();
      }
      else {
        this.play();
      }
    });
  }
}

let game = new Game();
game.play();