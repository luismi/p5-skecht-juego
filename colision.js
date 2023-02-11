function detectCollision(rectX, rectY, rectWidth, rectHeight, ellipseX, ellipseY, ellipseWidth, ellipseHeight) {
  return rectX < ellipseX + ellipseWidth &&
         rectX + rectWidth > ellipseX &&
         rectY < ellipseY + ellipseHeight &&
         rectHeight + rectY > ellipseY;
}
