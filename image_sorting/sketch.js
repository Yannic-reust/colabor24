let direction = "vertical";
let threshold = 50;
let pixelDistance = 1;

let editable = true;
let editRadius = 30;

let img;
let changes;

function preload() {
  img = loadImage("./image.jpg");
}

function setup() {
  createCanvas(800, 600);
  img.resize(800, 600);
  generatePixelSort();
  //noLoop();
}

function draw() {
  image(img, 0, 0);
  if (editable) {
    push();
    stroke(0, 255, 0);
    noFill();
    circle(mouseX, mouseY, editRadius * 2);
    pop();
  }
}

function generatePixelSort() {
  changes = detectPixelChanges(img, threshold, pixelDistance, direction, false);
  for (let i = 0; i < changes.length; i++) {
    if (i < changes.length - 1) {
      pixelSortTo(
        img,
        changes[i].x,
        changes[i].y,
        changes[i + 1].x,
        changes[i + 1].y,
        direction
      );
    } else {
      pixelSort(img, changes[i].x, changes[i].y, direction);
    }
  }
  img.updatePixels();
}

function detectPixelChanges(
  img,
  threshold,
  distance = 1,
  direction = "vertical",
  onlyFirst = true
) {
  let results = [];
  direction =
    direction == "horizontal" ? createVector(1, 0) : createVector(0, 1);
  let pos = createVector();

  for (let j = 0, lim = direction.x ? img.height : img.width; j < lim; j++) {
    for (let i = 0, lim = direction.x ? img.width : img.height; i < lim; i++) {
      let colBefore = getPixelValue(
        img,
        direction.x ? i - distance : j,
        direction.x ? j : i - distance
      );
      if (colBefore) {
        let col = getPixelValue(img, direction.x ? i : j, direction.x ? j : i);
        let d = dist(
          colBefore[0],
          colBefore[1],
          colBefore[2],
          col[0],
          col[1],
          col[2]
        );
        if (d > threshold) {
          //point(direction.x ? i : j, direction.x ? j : i);
          results.push(createVector(direction.x ? i : j, direction.x ? j : i));
          if (onlyFirst) break;
        }
      }
    }
  }
  return results;
}

function getPixelValue(img, x, y) {
  if (x < 0 || x > img.width - 1 || y < 0 || y > img.height - 1) return null;
  if (!img.pixels.length) img.loadPixels();
  let i = 4 * (x + y * img.width);
  let r = img.pixels[i];
  let g = img.pixels[i + 1];
  let b = img.pixels[i + 2];
  let a = img.pixels[i + 3];
  return [r, g, b, a];
}

function setPixelValue(img, x, y, colR, colG, colB, colA = 255) {
  if (x < 0 || x > img.width - 1 || y < 0 || y > img.height - 1) return null;
  if (!img.pixels.length) img.loadPixels();
  let i = 4 * (x + y * img.width);
  img.pixels[i] = colR;
  img.pixels[i + 1] = colG;
  img.pixels[i + 2] = colB;
  img.pixels[i + 3] = colA;
}

function pixelSort(img, x, y, direction = "vertical") {
  direction =
    direction == "horizontal" ? createVector(1, 0) : createVector(0, 1);
  let pix = [];
  let start = direction.x ? x : y;
  let end = direction.x ? img.width : img.height;
  for (let i = start; i < end; i++) {
    let val = getPixelValue(img, direction.x ? i : x, direction.x ? y : i);
    pix.push(val);
  }

  pix.sort(sortFunction);
  let i = 0;
  for (let p of pix) {
    setPixelValue(
      img,
      x + direction.x * i,
      y + direction.y * i,
      p[0],
      p[1],
      p[2]
    );
    i++;
  }
}

function pixelSortTo(img, x1, y1, x2, y2, direction = "vertical") {
  direction =
    direction == "horizontal" ? createVector(1, 0) : createVector(0, 1);
  let pix = [];
  let start = direction.x ? x1 : y1;
  let end = direction.x ? img.width : img.height;
  for (let i = start; i < end; i++) {
    let x = direction.x ? i : x1;
    let y = direction.x ? y1 : i;
    if (x == x2 && y == y2) break;
    let val = getPixelValue(img, x, y);
    pix.push(val);
  }

  pix.sort(sortFunction);
  let i = 0;
  for (let p of pix) {
    setPixelValue(
      img,
      x1 + direction.x * i,
      y1 + direction.y * i,
      p[0],
      p[1],
      p[2]
    );
    i++;
  }
}

function sortFunction(a, b) {
  //return brightness(color(b[0], b[1], b[2])) - brightness(color(a[0], a[1], a[2]));
  //return b[0] * b[1] * b[2] - a[0] * a[1] * a[2];
  return -(b[0] - a[0] + b[1] - a[2] + b[1] - a[1]);
}
