import MovingObject from "./moving_object";

export default class Ship extends MovingObject {
  constructor({pos}) {
    super({
      pos: pos,
      vel: [0,0],
      color: "red",
      radius: 5,
    });
  }

  relocate(pos) {
    this.pos = pos;
    this.vel = [0,0];
  }

  power(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
    console.log("Impulse: " + impulse);
    console.log("Velocity: " + this.vel);
  }
}