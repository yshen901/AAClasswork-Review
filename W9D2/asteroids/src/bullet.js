import MovingObject from "./moving_object";
import { CONSTANTS } from "./game";

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
  }
}