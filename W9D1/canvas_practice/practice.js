document.addEventListener("DOMContentLoaded", function(){
  let canvas = document.getElementById("mycanvas");
  canvas.height = 500;
  canvas.width = 500;
  let ctx = canvas.getContext('2d');

  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, 500, 500);

  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(250, 250, 100, 0, 2*Math.PI);
  ctx.stroke();
});
