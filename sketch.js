var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "blue";

  movingRect = createSprite (400,200,80,30);
  movingRect.shapeColor = "blue";

}

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log("horizontal dist :",movingRect.x - fixedRect.x);
  console.log("Width ",fixedRect.width/2 +movingRect.width/2);

  if(movingRect.x - fixedRect.x < fixedRect.width/2 +movingRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 +movingRect.width/2 && fixedRect.y - movingRect.y <fixedRect.height/2 + movingRect.height/2 && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2)
  {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else
  {
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  drawSprites();
}