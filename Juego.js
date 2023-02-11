var rectY = 100;
var rectX = 100;
var rectWidth = 50;
var rectHeight = 50;
var speed = 5;
var xdirection = 1; // Left or Right
var ydirection = 1; // Top to Bottom
var upArrowPressed = false;
var downArrowPressed = false;
var rightArrowPressed = false;
var leftArrowPressed = false;
var xpos, ypos;
var rad = 50;
var vidas = 60;
var beepSound;


function setup() {
  createCanvas(600, 400);
  xpos = width / 2;
  ypos = height / 2;
  img = loadImage("data/rocket.png");
  img2 = loadImage("data/asteroid.png"); 
  soundFormats('mp3', 'ogg');
  beepSound = loadSound('data/beep.mp3');

 
}



function draw() {
  background(175, 210, 233);
  //rect(rectX, rectY, rectWidth, rectHeight);
  image(img, rectX, rectY, rectWidth, rectHeight)
  //ellipse(xpos, ypos, rad, rad);
  
  image(img2, xpos, ypos, rad, rad);
  // Update the position of the shape
  xpos = xpos + speed * xdirection;
  ypos = ypos + speed * ydirection;
  
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
    
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  if (upArrowPressed && rectY > 0) {
    rectY = rectY - speed;
  } else if (downArrowPressed && rectY < height - rectHeight) {
    rectY = rectY + speed;
  }
  
  if (leftArrowPressed && rectX > 0) {
    rectX = rectX - speed;
  } else if (rightArrowPressed && rectX < width - rectWidth) {
    rectX = rectX + speed;
  }

  if (detectCollision(rectX, rectY, rectWidth, rectHeight, xpos-rad/2, ypos-rad/2, rad, rad)) {
    //console.log('Collision detected!');
    beepSound.play();
    vidas--;
  }
  
  // Display the number of collisions
  fill(0);
  text("Vidas: " + parseInt(vidas/12), 10, 20);
  
  if (vidas <= 1) {
    text("Partida terminada!", width / 2, height / 2);
    noLoop();
  }

}
