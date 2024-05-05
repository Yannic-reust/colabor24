let x = 1;
let y = 1;
let easing = 0.05;

function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw() {
  background(147, 134, 193);
  //mouse position X
  let targetX = mouseX;

  let dx = targetX - x; // distance between target x-coordinate and the x-coordinate ellipse
  x += dx * easing; // x-coordinate ellipse, white easing

  //mouse position Y
  let targetY = mouseY;
  let dy = targetY - y; // distance between target y-coordinate and the y-coordinate ellipse
  y += dy * easing; // y-coordinate ellipse, white easing

  ellipse(x, y, 66, 66);
}
