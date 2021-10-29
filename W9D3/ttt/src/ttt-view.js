export default class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.gameOver = false; // save this to avoid expensive checking

    this.setupBoard(); //add board using jQuery
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", ".ttt-box", event => {
      if (!this.gameOver)
        this.makeMove($(event.currentTarget));
    });

    this.$el.on("click", ".ttt-box", event => {
      if (this.gameOver)
        this.resetGame();
    });
  }

  makeMove($square) {
    let id = parseInt($square.attr("id"));

    $square.text(this.game.currentPlayer);
    this.game.playMove([Math.floor(id / 3), id % 3]);

    let winner;
    this.gameOver = this.game.isOver();

    if (this.gameOver) {
      winner = this.game.winner();
      if (winner) 
        alert (`${winner} has won!`);
      else
        alert ("It's a tie!");
    }
  }

  resetGame() {
    this.$el.children().remove();
    this.setupBoard();
    this.gameOver = false;

    this.game.reset();
  }

  setupBoard() { 
    let $container = $("<ul class='ttt-board'></ul>");

    //add an id to know which box you click
    let $li;
    for (let i = 0; i < 9; i++)
      $container.append(`<li class='ttt-box' id='${i}'></li>`);

    this.$el.append($container);
  }
}
