const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup(){
  canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  //give physics properties
  var options={
    isStatic:true
  }

  //create a ground body
  ground = Bodies.rectangle (200,380,400,10,options);
  //add the ground body into the world
 World.add(world, ground);
 var option1={
   restitution:1.5
 }

 ball=Bodies.circle(50,50,25,option1);
 World.add(world,ball);

}

function draw(){
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
  fill("lightgreen")
  //function for creating reactangular or square bodies
  rect(ground.position.x, ground.position.y, 400,10);

  ellipse(ball.position.x,ball.position.y,25,25);
 
}





