import Bird from "./bird";
import Level from "./level";

export const CONSTANTS = {
  gravity: 0.5,
  pipeGap: 150,
  pipeInterval: 220,
  pipeSpeed: -5,
  pipeWidth: 20,
}

export default class FlappyBird {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };

    this.animate = this.animate.bind(this);
    this.click = this.click.bind(this);
  }

  click() {
    if (!this.running)
      this.play();
    this.bird.flap();
  }

  play() {
    this.running = true;
    this.animate();
  }

  animate() {
    this.level.animate(this.ctx);
    this.bird.animate(this.ctx);

    if (this.level.collidesWith(this.bird.getBounds())) {
      console.log("You've died! Click to restart!");
      this.restart();
    }
    
    if (this.running)
      requestAnimationFrame(this.animate);
  }

  restart() {
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
    this.running = false;
    this.score = 0;

    this.animate();
  }
}