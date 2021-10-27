import Asteroid from "./asteroid";
import MovingObject from "./moving_object";
import Game from "./game"
import GameView from "./game_view";

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

  let asteroid = new Asteroid({
    pos: [20,20]
  });
  asteroid.draw(ctx);

  let gameView = new GameView(ctx);
  gameView.start();
});