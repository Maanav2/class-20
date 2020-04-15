 var fixedobject,movingobject;
 
 
 
 function setup() {
  createCanvas(800,400);
  fixedobject=createSprite(100,200,30,30);
  movingobject=createSprite(300,200,30,30);

  fixedobject.shapeColor="green";
  movingobject.shapeColor="green";

  fixedobject.debug=true;
  movingobject.debug=true;
}

function draw() {
  background(0,0,0);  

  movingobject.x=mouseX;
  movingobject.y=mouseY;

  if(fixedobject.width/2+movingobject.width/2>movingobject.x-fixedobject.x && 
    fixedobject.width/2+movingobject.width/2>fixedobject.x-movingobject.x &&
    fixedobject.height/2+movingobject.height/2>movingobject.y-fixedobject.y &&
    fixedobject.height/2+movingobject.height/2>fixedobject.y-movingobject.y){
    fixedobject.shapeColor="red";
    movingobject.shapeColor="red";
  }
  else{
    fixedobject.shapeColor="green";
    movingobject.shapeColor="green";
  }

console.log(movingobject.x-fixedobject.x);
  drawSprites();
}