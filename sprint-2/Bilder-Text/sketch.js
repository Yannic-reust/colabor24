var wW;
var wH;

let imgmouse;
let xmouse;
let ymouse;
let mouseWidth = 200;
let mouseHeight = 100;

var mouseboxX;
var mouseboxY;

var mouseboxW = 15;
var mouseboxH = 13;

let imgsausage;
let xsausage;
let ysausage;
let sausageWidth = 200;
let sausageHeight = 150;

var sausageboxX;
var sausageboxY;
var sausageboxW = 15;
var sausageboxH = 13;

let imgbird;
let xbird;
let ybird;
let birdWidth = 200;
let birdHeight = 150;

var birdboxX;
var birdboxY;
var birdboxW = 15;
var birdboxH = 13;

function preload() {
  confetti = loadImage("./confetti.gif");
  imgmouse = loadImage("./mouse.png");
  imgsausage = loadImage("./sausage.png");
  imgbird = loadImage("./bird.png");
}

function setup() {
  background(220);
  createCanvas(windowWidth, windowHeight);
  confetti.resize(300, 200);
  imgmouse.resize(300, 200);
  imgsausage.resize(300, 200);
  imgbird.resize(300, 200);
  noStroke();
  frameRate(2);

  wW = windowWidth - 300;
  wH = windowHeight - 200;
}
function draw() {
  mouseboxX = random(wW);
  mouseboxY = random(wH);
  //testing
  /*mouseboxX = 80;
  mouseboxY = 80;*/

  sausageboxX = random(wW);
  sausageboxY = random(wH);

  birdboxX = random(wW);
  birdboxY = random(wH);

  xmouse = random(wW);
  ymouse = random(wH);
  //testing
  /*xmouse = 80;
  ymouse = 80;*/

  xsausage = random(wW);
  ysausage = random(wH);

  xbird = random(wW);
  ybird = random(wH);

  //mouse
  image(imgmouse, xmouse, ymouse, mouseWidth, mouseHeight);

  let mousedynamicBoxW = 150; // Add some padding around the text
  let mousedynamicBoxH = 45;

  fill(50);
  rect(mouseboxX, mouseboxY, mousedynamicBoxW, mousedynamicBoxH);

  // Add text inside the dynamic box
  fill(0); // Set text color to white
  textAlign(CENTER, CENTER); // Center align text
  textSize(50); // Set text size
  text(
    "mouse",
    mouseboxX + mousedynamicBoxW / 2,
    mouseboxY + mousedynamicBoxH / 2
  );

  //rect(boxX2, boxY2, boxW2, boxH2);

  if (
    xmouse >= mouseboxX &&
    xmouse <= mouseboxX + mousedynamicBoxW &&
    ymouse >= mouseboxY &&
    ymouse <= mouseboxY + mousedynamicBoxH
  ) {
    image(confetti, xmouse, ymouse, windowWidth / 2, windowHeight / 2);
  } else {
  }
  // sausage
  image(imgsausage, xsausage, ysausage, sausageWidth, sausageHeight);

  let sausagedynamicBoxW = 190; // Add some padding around the text
  let sausagedynamicBoxH = 45;

  fill(55);

  rect(sausageboxX, sausageboxY, sausagedynamicBoxW, sausagedynamicBoxH);

  // Add text inside the dynamic box
  fill(0); // Set text color to white
  textAlign(CENTER, CENTER); // Center align text
  textSize(50); // Set text size
  text(
    "sausage",
    sausageboxX + sausagedynamicBoxW / 2,
    sausageboxY + sausagedynamicBoxH / 2
  );

  //rect(boxX2, boxY2, boxW2, boxH2);

  if (
    xsausage >= sausageboxX &&
    xsausage <= sausageboxX + sausagedynamicBoxW &&
    ysausage >= sausageboxY &&
    ysausage <= sausageboxY + sausagedynamicBoxH
  ) {
    image(confetti, xsausage, ysausage, windowWidth / 2, windowHeight / 2);
  } else {
  }

  // bird

  image(imgbird, xbird, ybird, birdWidth, birdHeight);

  let birddynamicBoxW = 80; // Add some padding around the text
  let birddynamicBoxH = 45;

  fill(55);
  rect(birdboxX, birdboxY, birddynamicBoxW, birddynamicBoxH);

  // Add text inside the dynamic box
  fill(0); // Set text color to white
  textAlign(CENTER, CENTER); // Center align text
  textSize(50); // Set text size
  text("bird", birdboxX + birddynamicBoxW / 2, birdboxY + birddynamicBoxH / 2);

  //rect(boxX2, boxY2, boxW2, boxH2);

  if (
    xbird >= birdboxX &&
    xbird <= birdboxX + birddynamicBoxW &&
    ybird >= birdboxY &&
    ybird <= birdboxY + birddynamicBoxH
  ) {
    image(confetti, xbird, ybird, windowWidth / 2, windowHeight / 2);
  } else {
  }
}
