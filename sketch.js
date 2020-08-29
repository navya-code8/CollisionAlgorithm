var fixed, moving;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 100);
  fixed.debug = true;

  moving = createSprite(600,200,100,50);
  moving.debug = true;


}

function draw() {
  background("black");  
  moving.y = mouseY;
  moving.x = mouseX;

  if ((fixed.width/2+moving.width/2) > (moving.x - fixed.x ) && (fixed.width/2+moving.width/2) > (fixed.x - moving.x ) && (fixed.height/2+moving.height/2) > (moving.y - fixed.y ) && (fixed.height/2+moving.height/2) > (fixed.y - moving.y ) ) {
    moving.shapeColor = "blue";
    fixed.shapeColor = "blue";
  
  }

  else{
    moving.shapeColor = "red";
    fixed.shapeColor = "red";
  }

  drawSprites();
}