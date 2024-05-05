let circle = {
  x: 100,
  y: 100,
  targetX: 100,
  targetY: 100,
  easing: 0.05,
};

function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw() {
  background(147, 134, 193);

  // Calculate the distance between the target position and the current position of the circle
  let dx = circle.targetX - circle.x;
  let dy = circle.targetY - circle.y;

  // Update the position of the circle towards the target position using easing
  circle.x += dx * circle.easing;
  circle.y += dy * circle.easing;

  // Draw the circle at its updated position
  ellipse(circle.x, circle.y, 66, 66);
}

// Update the target position of the circle when the mouse is clicked
function mouseClicked() {
  circle.targetX = mouseX;
  circle.targetY = mouseY;
}
