import MovingObject from "./moving_object";

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext("2d");
  let circle = new MovingObject({
    pos: [50,50],
    vel: 0,
    radius: 10,
    color: "red"
  });

  circle.draw(ctx);
});