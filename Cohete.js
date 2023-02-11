function keyPressed() {
  if (keyCode === UP_ARROW) {
    upArrowPressed = true;
  } else if (keyCode === DOWN_ARROW) {
    downArrowPressed = true;
  } else if (keyCode === RIGHT_ARROW) {
    rightArrowPressed = true;
  } else if (keyCode === LEFT_ARROW) {
    leftArrowPressed = true;
  }
}

function keyReleased() {
  if (keyCode === UP_ARROW) {
    upArrowPressed = false;
  } else if (keyCode === DOWN_ARROW) {
    downArrowPressed = false;
  } else if (keyCode === RIGHT_ARROW) {
    rightArrowPressed = false;
  } else if (keyCode === LEFT_ARROW) {
    leftArrowPressed = false;
  }
}
