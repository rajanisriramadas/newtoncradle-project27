
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground;
var ball1 , ball2 , ball3 , ball4 , ball5;
var chain1 , chain2 , chain3 , chain4 , chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400 , 100 , 400 , 20); 
	bobDiameter = 50; 
	startBobPositionX = width/2; 
	startBobPositionY = height/4+300; 

	ball1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY);
	ball2=new Bob(startBobPositionX-bobDiameter,startBobPositionY); 
	ball3=new Bob(startBobPositionX,startBobPositionY); 
	ball4=new Bob(startBobPositionX+bobDiameter,startBobPositionY); 
	ball5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY); 

	chain1 = new Chain( ball1.body ,ground.body , -bobDiameter*2 , 0); 
	chain2 = new Chain( ball2.body ,ground.body , -bobDiameter*1 , 0); 
	chain3 = new Chain( ball3.body ,ground.body , 0 , 0); 
	chain4 = new Chain( ball4.body ,ground.body , bobDiameter*1 , 0); 
	chain5 = new Chain( ball5.body ,ground.body , bobDiameter*2 , 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  ground.display();
  ball1.display();
  chain1.display();

  ball2.display();
  chain2.display();

  ball3.display();
  chain3.display();

  ball4.display();
  chain4.display();

  ball5.display();
  chain5.display();


  

}
function keyPressed(){
if (keyCode === UP_ARROW) 
{ Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45}); } 
}


