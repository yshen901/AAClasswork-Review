export default class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard(); //add board using jQuery
    this.bindEvents();
  }

  bindEvents() {
    $(".ttt-board").on("click", ".ttt-box", event => {
      this.makeMove($(event.currentTarget));
    });
  }

  makeMove($square) {
    let id = parseInt($square.attr("id"));

    $square.text(this.game.currentPlayer);
    this.game.playMove([Math.floor(id / 3), id % 3]);

    let winner;
    if (this.game.isOver()) {
      winner = this.game.winner();
      if (winner) 
        alert (`${winner} has won!`);
      else
        alert ("It's a tie!")
    }
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
