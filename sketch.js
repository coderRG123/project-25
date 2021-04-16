
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 300);


	engine = Engine.create();
	world = engine.world;

	//ground
box1= new Ground(400, 280, 800, 20);

//bin
box2=new Box(650, 265, 150, 10);
box3=new Box(580, 235, 10, 50);
box4=new Box(720, 235, 100, 100);

//player
box5=new Player(190, 278);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  box1.display();
 // box2.display();
 // box3.display();
  box4.display();
  box5.display();



  
  drawSprites();

}

function keyPressed(){
  if (keyDown(UP_ARROW)){
    box5.body.position.x=box5.body.position.x+11;
   box5.body.position.y=box5.body.position.y-11;
   }
}




