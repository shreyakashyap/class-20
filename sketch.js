var sprite1 ;
var sprite2


function setup() {
  createCanvas(800,400);

  sprite1=createSprite(400, 200, 80, 30);
  sprite1.shapeColor="green";
  sprite2=createSprite(200,200,50,80);
  sprite2.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  sprite1.x=World.mouseX;
  sprite1.y=World.mouseY;
if(sprite1.x-sprite2.x<sprite1.width/2+sprite2.width/2 && sprite2.x-sprite1.x<sprite1.width/2+sprite2.width/2&&sprite1.y-sprite2.y<sprite1.height/2+sprite2.height/2
  &&sprite2.y-sprite1.y<sprite1.height/2+sprite2.height/2
  
  ){
sprite1.shapeColor="blue";
sprite2.shapeColor="blue";



}
else{
  sprite1.shapeColor="green"
  sprite2.shapeColor="green"
}


  drawSprites();
}