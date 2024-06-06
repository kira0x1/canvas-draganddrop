function smiley(ctx) {
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false);
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2);
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2);
  ctx.stroke();
}

function drawTriangle(ctx) {
  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();
}

function stepOne(ctx) {
  ctx.fillStyle = "rgb(200, 0, 0)";
  ctx.fillRect(10, 10, 50, 50);

  ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  ctx.fillRect(30, 30, 50, 50);
}

function draw() {
  const canvas = document.getElementById("main-canvas");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    smiley(ctx);
  }
}
