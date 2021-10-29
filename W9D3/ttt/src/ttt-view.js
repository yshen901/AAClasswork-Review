class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard(); //add board using jQuery
  }

  bindEvents() {
    
  }

  makeMove($square) {}

  setupBoard() { 
    let $container = $("<ul class='ttt-board'></ul>");
    for (let i = 0; i < 9; i++)
      $container.append("<li class='ttt-box'></li>");
    this.$el.append($container);
  }
}

module.exports = View;
