import MovingObject from "./moving_object";

export default class Asteroid extends MovingObject {
  constructor({pos}) {
    super({
      pos: pos,
      vel: Util.randomVec(50),
      color: "white",
      radius: 5,
    });
  }
}