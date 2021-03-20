
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var box=[]
function preload(){
	bg=loadImage("gm.png");
}
function setup() {
	createCanvas(1200, 800);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(400,550,800,30);
    Ball=new Bob(300,480,25);
	rope=new Rope(Ball.body,{x:300,y:67});
	for(var i=0;i<6;i=i+1){
		box[i]=new Box(600,100,50,50);
	}
	for(var i=6;i<12;i=i+1){
		box[i]=new Box(530,100,70,70);
	}
	for(var i=12;i<18;i=i+1){
		box[i]=new Box(460,100,50,50);
	}
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);

  ground.display();

  Ball.display();
  
  rope.display();
  
  for(var i=0;i<6;i=i+1){
	box[i].display();
}
for(var i=6;i<12;i=i+1){
	box[i].display();
}
for(var i=12;i<18;i=i+1){
	box[i].display();
}
}

function mouseDragged()
{
	Matter.Body.setPosition(Ball.body,{x:mouseX,y:mouseY})
}

