var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var block1,block2,block3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	block1 = createSprite(width/2,height-180,200,20);
	block2 = createSprite(width/2-100,height-105,20,100);
	block3 = createSprite(width/2+100,height-105,20,100);


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	/*if(keyDown(right_Arrow)){
		helicopterSprite.x = 10;
	}*/

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

		options = {restitution:0.5, isStatic:true}		

	
	packageBody = Bodies.circle(width/2 , 200 , 5 ,options);
	block1b = Bodies.rectangle(width/2,height-70,200,20);
	block2b = Bodies.rectangle(width/2-100,height-105,20,100);
	block3b = Bodies.rectangle(width/2+100,height-105,20,100);
	World.add(world,block1b);
	World.add(world,block2b);
	World.add(world,block3b);
	World.add(world, packageBody);
	

	//Create a Ground

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
   block1.x = block1b.position.x
   block1.y = block1b.position.y
   block2.x = block2b.position.x
   block2.y = block2b.position.y
   block3.x = block3b.position.x
   block3.y = block3b.position.y


  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Matter.Body.setStatic(packageBody,false);
	
	   
	 }
	 
   }


