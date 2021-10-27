import Asteroid from "./asteroid";

export const CONSTANTS = {
  DIM_X: 640,
  DIM_Y: 640,
  NUM_ASTEROIDS: 4
};

export default class Game {
  constructor() {
    this.asteroids = [];
    this.addAsteroids();
  }

  addAsteroids() {
    for (let i = 0; i < CONSTANTS.NUM_ASTEROIDS; i++) {
      this.asteroids.push( new Asteroid({
        pos: this.randomPosition()
      }));
    }
  }

  draw(ctx) {
    ctx.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);

    for (let i = 0; i < this.asteroids.length; i++)
      this.asteroids[i].draw(ctx);
  }

  randomPosition() {
    return [
      CONSTANTS.DIM_X * Math.random(),
      CONSTANTS.DIM_Y * Math.random()
    ];
  }

  moveObjects() {
    for (let i = 0; i < this.asteroids.length; i++) 
      this.asteroids[i].move();
  }

  checkCollisions() {
    for (let i = 0; i < this.asteroids.length; i++) {
      for (let j = i+1; j < this.asteroids.length; j++) {
        if (this.asteroids[i].collidesWith(this.asteroids[j])) {
          debugger;
          this.remove(j);
          this.remove(i);
          i--;
          break;
        }
      }
    }
  }

  remove(idx) {
    this.asteroids.splice(idx, 1);
  }
}