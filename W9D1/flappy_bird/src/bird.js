import { CONSTANTS } from "./game"

export default class Bird {
  constructor(dimensions) {
    this.dimensions = dimensions;

    this.positionX = this.dimensions.width / 3 - 20;
    this.positionY = this.dimensions.height / 2 - 15;

    this.velocity = 0;
  }

  drawBird(ctx) {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(this.positionX, this.positionY, 40, 30);
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
      topLeft: [this.positionX - CONSTANTS.hitBoxAdjustment, this.positionY - CONSTANTS.hitBoxAdjustment],
      bottomRight: [this.positionX + 30 + CONSTANTS.hitBoxAdjustment, this.positionY + 40 + CONSTANTS.hitBoxAdjustment]
    };
  }
}