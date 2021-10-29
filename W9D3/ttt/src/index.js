import View from "./ttt-view";
import Game from "./game";

$(() => {
  let game = new Game();
  
  let $el = $('.ttt');
  let view = new View(game, $el);
});