let gamePiece;
let pieceDragging;
let isDragging;

const pieces = [];

function startGame() {
  gameArea.start();
  gamePiece = new component(30, 30, "red", 10, 210);
  pieces.push(gamePiece);
}

function canvasClicked(e) {
  let p;
  for (var a = 0; a < pieces.length; a++) {
    p = pieces[a];
    if (gameArea.context.isPointInPath(p.path, e.offsetX, e.offsetY)) {
      return p;
    }
  }

  return false;
}

function mouseDown(e) {
  const clickedPath = canvasClicked(e);
  if (clickedPath !== false) {
    clickedPath.dragging = true;
    pieceDragging = clickedPath;
    isDragging = true;
  }
}

function mouseUp(e) {
  if (isDragging) {
    if (pieceDragging) {
      pieceDragging.dragging = false;
      pieceDragging = undefined;
    }

    isDragging = false;
  }
}

function component(width, height, color, x, y) {
  this.dragging = false;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  ctx = gameArea.context;
  ctx.fillStyle = color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
  this.path = new Path2D();
  this.path.rect(this.x, this.y, this.width, this.height);

  this.update = function () {
    ctx = gameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.path.rect(this.x, this.y, this.width, this.height);
  };
}

window.addEventListener("mousemove", (e) => {
  if (isDragging && pieceDragging) {
    pieceDragging.x = e.x;
    pieceDragging.y = e.y;
  }
});

window.addEventListener("mouseenter", (e) => {
  console.log(e);
});

const gameArea = {
  canvas: document.createElement("canvas"),

  start: function () {
    this.canvas.width = 2000;
    this.canvas.height = 2000;
    this.context = this.canvas.getContext("2d");

    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);

    this.canvas.addEventListener("mousedown", mouseDown);
    this.canvas.addEventListener("mouseup", mouseUp);
  },

  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function updateGameArea() {
  gameArea.clear();
  gamePiece.update();
}

window.addEventListener("load", startGame);
