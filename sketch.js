var fixrect
var movingrect


function setup() {
  createCanvas(800,400);

fixrect=createSprite(100,100,10,50)
movingrect=createSprite(600,300,50,50)

}

function draw() {
  background("black");  
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
  movingrect.shapeColor="green"
 fixrect.shapeColor="green" 
  
 if(movingrect.x-fixrect.x<movingrect.width/2+fixrect.width/2&&
  fixrect.x-movingrect.x<movingrect.width/2+fixrect.width/2&&
  
  movingrect.y-fixrect.y<movingrect.height/2+fixrect.height/2&&
  fixrect.y-movingrect.y<movingrect.height/2+fixrect.height/2
  
  ){
    movingrect.shapeColor="red";
    fixrect.shapeColor="red";
  }
  
  drawSprites();
}