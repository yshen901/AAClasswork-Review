import MovingObject from "./moving_object";

export default class Bullet extends MovingObject {
  constructor({pos, vel}) {
    super({
      pos: pos,
      vel: vel,
      color: "green",
      radius: 3
    });
  }

  move() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];

    this.pos[0] += CONSTANTS.DIM_X;
    this.pos[0] %= CONSTANTS.DIM_X;

    this.pos[1] += CONSTANTS.DIM_Y;
    this.pos[1] %= CONSTANTS.DIM_Y;
  }
}