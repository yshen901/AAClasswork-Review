import Game from "./game";

export default class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new Game();
  }

  start() {
    setInterval(() => {
      this.game.moveObjects();
      this.game.checkCollisions(); 
      this.game.draw(this.ctx);
    }, 20);
  }
}