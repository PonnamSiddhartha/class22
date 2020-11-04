const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var ball2,ball3;

function setup() {
 var canvas= createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(400,390,800,10,ground_options);
  World.add(world,ground);
  var ball_options = {
    restitution :0.7
  }
  ball = Bodies.circle(300,100,50,ball_options);
  World.add(world,ball);
  
  var ball2_options = {
    restitution :0.8
  }
  ball2 = Bodies.circle(200,100,30,ball2_options);
  World.add(world,ball2);
  
  var ball3_options = {
    restitution :0.9
  }
  ball3 = Bodies.circle(400,100,20,ball3_options);
  World.add(world,ball3);

}

function draw() {
  background(25,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,800,10);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);

  ellipseMode(RADIUS);
  ellipse(ball2.position.x,ball2.position.y,30,30);

  ellipseMode(RADIUS);
  ellipse(ball3.position.x,ball3.position.y,20,20);
}