import Asteroid from "./asteroid";
import Ship from "./ship";
import Bullet from "./bullet";

export const CONSTANTS = {
  DIM_X: 640,
  DIM_Y: 640,
  NUM_ASTEROIDS: 0
};

// Could also make an allObjects class, as well as a single add/remove class, but
// I chose not to since that would add more checks and slow down the game.

export default class Game {
  constructor() {
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Ship({pos: [CONSTANTS.DIM_X/2, CONSTANTS.DIM_Y/2]});
    this.bullets = [];
  }

  addAsteroids() {
    for (let i = 0; i < CONSTANTS.NUM_ASTEROIDS; i++) {
      this.asteroids.push( new Asteroid({
        pos: this.randomPosition()
      }));
    }
  }

  addBullet() {
    this.bullets.push( new Bullet({
      pos: this.ship.pos.slice(0),
      vel: this.ship.vel.slice(0)
    }));

    console.log(this.bullets);
    console.log(this.ship);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);

    for (let i = 0; i < this.asteroids.length; i++)
      this.asteroids[i].draw(ctx);
    
    for (let i = 0; i < this.bullets.length; i++)
      this.bullets[i].draw(ctx);

    this.ship.draw(ctx)
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
    
    for (let i = 0; i < this.bullets.length; i++) {
      this.bullets[i].move();
      if (this.bullets[i].outOfBounds()) {
        this.removeBullet(i);
        i--;
      }
    }

    this.ship.move();
  }

  checkCollisions() {
    for (let i = 0; i < this.bullets.length; i++) {  //check bullet collisions
      for (let j = 0; j < this.asteroids.length; j++) {
        if (this.asteroids[j].collidesWith(this.bullets[i])) {
          this.removeAsteroid(j);
          this.removeBullet(i);
          i--;
          j--;
          break;
        }
      }
    }

    for (let i = 0; i < this.asteroids.length; i++) {  //check asteroid collisions
      for (let j = i+1; j < this.asteroids.length; j++) {
        if (this.asteroids[i].collidesWith(this.asteroids[j])) {
          this.removeAsteroid(j); 
          this.removeAsteroid(i);
          i--;
          break;
        }
      }
    }

    for (let i = 0; i < this.bullets.length; i++) {  //check bullet collisions
      for (let j = i+1; j < this.bullets.length; j++) {
        if (this.bullets[i].collidesWith(this.bullets[j])) {
          this.removeBullet(j); 
          this.removeBullet(i);
          i--;
          break;
        }
      }
    }

    for (let i = 0; i < this.asteroids.length; i++) { // relocate then recheck asteroids
      if (this.asteroids[i].collidesWith(this.ship)) { 
        this.ship.relocate(this.randomPosition());
        i = -1;
      }
    }
  }

  removeAsteriod(idx) {
    this.asteroids.splice(idx, 1);
  }

  removeBullet(idx) {
    this.bullets.splice(idx, 1);
  }

  handlePress(cmd) {
    switch(cmd) {
      case "up": this.ship.power([0, -1]); break;
      case "down": this.ship.power([0, 1]); break;
      case "left": this.ship.power([-1, 0]); break;
      case "right": this.ship.power([1, 0]); break;
      case "space": this.addBullet();
    }
  }
}