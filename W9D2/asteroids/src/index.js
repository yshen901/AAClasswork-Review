import GameView from "./game_view";

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext("2d");
  
  let gameView = new GameView(ctx);
  gameView.start();
});