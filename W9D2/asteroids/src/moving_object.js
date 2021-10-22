export default class MovingObject {
  constructor(params) {
    this.pos = params.pos;
    this.vel = params.vel;
    this.radius = params.radius;
    this.color = params.color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    )

    ctx.fill();
  }
}