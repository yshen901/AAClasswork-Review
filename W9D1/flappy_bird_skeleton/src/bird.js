import { CONSTANTS } from "./game"

export default class Bird {
  constructor(dimensions) {
    this.dimensions = dimensions;

    this.positionX = this.dimensions.width / 3;
    this.positionY = this.dimensions.height / 2;

    this.velocity = 0;
  }

  drawBird(ctx) {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(this.positionX-20, this.positionY-15, 40, 30);
  }

  animate(ctx) {
    this.move();
    this.drawBird(ctx);
  }

  move() {
    this.positionY += this.velocity;
    this.velocity += CONSTANTS.gravity;
  }

  flap() {
    this.velocity = -8;
  }

  getBounds() {
    return {
      topLeft: [this.positionX - 15, this.positionY - 20],
      bottomRight: [this.positionX + 15, this.positionY + 20]
    };
  }
}