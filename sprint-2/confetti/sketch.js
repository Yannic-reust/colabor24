function preload() {
  confetti = loadImage("./confetti.gif");
}

function setup() {
  createCanvas(800, 600);
  confetti.resize(300, 200);
}

function draw() {
  background(220);
  image(confetti, 0, 50, 200, 200);
}
