const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
const Event=Matter.Event

var particles=[]
var plinko =[]
var division=[]
var divisionHeight=300


function setup() {
  createCanvas(600,600);
  
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(10,590,1000,10)

  for (var k=0;k<=width;k=k+80){
  division.push(new Division(k,450,10,divisionHeight))
  }

  for (var j=75;j<=width;j=j+50){
    plinko.push(new Plinko(j,25))
  }

  for (var j=50;j<=width-10;j=j+50){
    plinko.push(new Plinko(j,175))
  }

  for (var j=75;j<=width;j=j+50){
    plinko.push(new Plinko(j,275))
  }

  for (var j=50;j<=width;j=j+50){
    plinko.push(new Plinko(j,375))
  }


  Engine.run(engine);
}

function draw() {
  background("black");  
  drawSprites();
  ground.display()

  for (var k=0;k<division.length;k++){
division[k].display()
  }

  for (var i =0;i<plinko.length;i++){
    plinko[i].display()
  }

  if (frameCount%60===0){
    particles.push(new Particle(random(100,700),10,10))
  }

  for (var j=0;j<particles.length;j++){
    particles[j].display()
  }

}