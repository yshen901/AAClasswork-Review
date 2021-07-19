const Game = require('./game.js');
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let game = new Game();
game.run(reader, () => {
  reader.question("Play again (y/n)?", (answer) => {
    game.reset();
    if (answer == "y")
      game.run();
    else
      reader.close();
  });
});