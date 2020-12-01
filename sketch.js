//c20- use vsc
//SECTION1- VARIABLE DECLARE - GLOBAL
var r1,r2,r3,r4,r5;

//SECTION2- SPRITES CREATE
function setup() {
  createCanvas(800,800);
  rectMode(CENTER);
  r1=  createSprite(400, 400, 50, 50);
  r2= createSprite(600,600,40,40)
  r3= createSprite(300,300,40,40)
  r4= createSprite(30,100,40,40)
  r5= createSprite(500,100,40,40)
  r4.shapeColor= "blue";
  r5.shapeColor= "orange"
  r4.velocityX= 5;
  r5.velocityX=-5;
  
}


//SECTION3-INSTRUCTIONS
function draw() {
  background("yellow"); 
  //make r1 move with mouse
  r1.x= World.mouseX;
  r1.y= World.mouseY; 
//ALGORITHM- IF MY RECT TOUCHES THEN CHANGE THEIR COLORS
Nitish(r1,r3); 
Nitish(r2,r1);


whitehat(r4,r5)
drawSprites();
} 



