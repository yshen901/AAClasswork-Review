import { CONSTANTS } from "./game";

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.pipes = [];

    this.resetLevel();
  }

  animate(ctx) {
    this.drawBackground(ctx);

    this.movePipes();
    this.drawPipes(ctx);
    
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);

    ctx.fillStyle = "black";
    ctx.font = "24px Arial";
    ctx.fillText(this.score, 12, 30);
  }

  drawPipes(ctx) {
    let pipe;

    ctx.fillStyle = 'red';
    for (let i = 0; i < 3; i++) {
      pipe = this.pipes[i];
      
      ctx.fillRect(pipe["pos"], 0, CONSTANTS.pipeWidth, pipe["gapTop"]);
      ctx.fillRect(pipe["pos"], pipe["gapTop"] + CONSTANTS.pipeGap, CONSTANTS.pipeWidth, this.dimensions.height - pipe["gapTop"] - CONSTANTS.pipeGap);
    }
  }

  initializePipes() {
    this.score = 0;
    for (let i = 0; i < 3; i++) {
      this.pipes.push({
        "pos": this.dimensions.width + i*(CONSTANTS.pipeInterval + CONSTANTS.pipeWidth),
        "gapTop": Math.random() * (this.dimensions.height - CONSTANTS.pipeGap),
        "passed": false
      });
    }
  }

  movePipes() {
    for (let i = 0; i < 3; i++) 
      this.pipes[i]["pos"] += CONSTANTS.pipeSpeed;

    if (!this.pipes[0]["passed"] && this.pipes[0]["pos"] + 20 <= this.dimensions.width / 3) {
      this.score += 1;
      this.pipes[0]["passed"] = true;
    }

    if (this.pipes[0]["pos"] <= -CONSTANTS.pipeWidth) {
      this.pipes.shift();
      this.pipes.push({
        "pos": this.pipes[1]["pos"] + (CONSTANTS.pipeInterval + CONSTANTS.pipeWidth),
        "gapTop": Math.random() * (this.dimensions.height - CONSTANTS.pipeGap)
      });
    }
  }

  collidesWith(objectBounds) {
    let [x1, y1] = objectBounds["topLeft"];
    let [x2, y2] = objectBounds["bottomRight"];

    let pipePos, pipeGap;
    for (let i = 0; i < 3; i++) {
      pipePos = this.pipes[i]["pos"];
      pipeGap = this.pipes[i]["gapTop"];

      // Check if it is in between two pipes
      if ((x2 >= pipePos && x1 < pipePos) || (x2 > pipePos + CONSTANTS.pipeWidth && x1 <= pipePos + CONSTANTS.pipeWidth))
        if (y2 >= pipeGap + CONSTANTS.pipeGap || y1 <= pipeGap)
          return true;
      
      if (y1 <= 0 || y2 >= this.dimensions.height)
        return true;

      return false;
    }
  }

  resetLevel() {
    this.initializePipes();
    this.score = 0;
  }
}