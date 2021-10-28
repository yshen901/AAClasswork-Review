import Game from "./game";

export default class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new Game();
  }

  start() {
    this.bindKeyHandlers();
    setInterval(() => {
      this.game.moveObjects();
      this.game.checkCollisions(); 
      this.game.draw(this.ctx);
    }, 20);
  }

  bindKeyHandlers() {
    key('up', () => {
      this.game.handlePress('up');
    });

    key('down', () => {
      this.game.handlePress('down');
    });

    key('left', () => {
      this.game.handlePress('left');
    });

    key('right', () => {
      this.game.handlePress('right');
    });

    key('space', () => {
      this.game.handlePress('space');
    });
  }
}