var redValue = 255;
var boxX = 10;
var boxY = 20;
var boxW = 15;
var boxH = 13;

let img;
let imgX = 20;
let imgY = 20;
let imgWidth = 200;
let imgHeight = 150;

function preload() {
  img = loadImage("./image.jpg");
}

function setup() {
  createCanvas(800, 600);
  img.resize(300, 200);
}

function draw() {
  background(220);
  image(img, imgX, imgY, imgWidth, imgHeight);

  let dynamicBoxW = 50; // Add some padding around the text
  let dynamicBoxH = 20;

  fill(redValue, 0, 0);
  rect(boxX, boxY, dynamicBoxW, dynamicBoxH);

  // Add text inside the dynamic box
  fill(255); // Set text color to white
  textAlign(CENTER, CENTER); // Center align text
  textSize(12); // Set text size
  text("Box 1", boxX + dynamicBoxW / 2, boxY + dynamicBoxH / 2);

  //rect(boxX2, boxY2, boxW2, boxH2);

  if (
    imgX >= boxX &&
    imgX <= boxX + dynamicBoxW &&
    imgY >= boxY &&
    imgY <= boxY + dynamicBoxH
  ) {
    redValue = 0;
  } else {
    redValue = 255;
  }
}
