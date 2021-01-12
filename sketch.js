
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(displayWidth, displayHeight);


	engine = Engine.create();
	world = engine.world;
Bob1 = new Pendulam(470,400,40)
Bob2 = new Pendulam(550,400,40)
Bob3 = new Pendulam(630,400,40)
Bob4 = new Pendulam(710,400,40)
Bob5 = new Pendulam(790,400,40)
sling1 = new Sling(Bob1.body,{x:470,y:300});
sling2 = new Sling(Bob2.body,{x:550,y:300})
sling3 = new Sling(Bob3.body,{x:630,y:300})
sling4 = new Sling(Bob4.body,{x:710,y:300})
sling5 = new Sling(Bob5.body,{x:790,y:300})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Bob1.display()
  Bob2.display()
  Bob3.display()
  Bob4.display()
  Bob5.display()
  sling1.display()
  sling2.display()
  sling3.display()
  sling4.display()
  sling5.display()

}
function mouseDragged(){
  Matter.Body.setPosition(Bob1.body,{x:mouseX,y:mouseY});
}
function mouseRealeased(){
  sling1.fly();
}
