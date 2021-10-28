import MovingObject from "./moving_object";
import Util from "./util";

export default class Asteroid extends MovingObject {
  constructor({pos}) {
    super({
      pos: pos,
      vel: Util.randomVec(50),
      color: "white",
      radius: 5,
    });
  }

  collidesWith(otherObject) {
    return Util.distanceBetween(this.pos, otherObject.pos) < this.radius + otherObject.radius
  }
}