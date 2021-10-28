import MovingObject from "./moving_object";
import Util from "./util";

export default class Asteroid extends MovingObject {
  constructor({pos}) {
    super({
      pos: pos,
      vel: Util.randomVec(2),
      color: "white",
      radius: 5,
    });
  }
}