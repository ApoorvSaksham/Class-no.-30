
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball;
var box1;
var box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;
var bgImage;
var constraintLog;
var slingshot;

var platfom;
function preload(){
bgImage = loadImage("sprites/bg.png");
}

function setup(){
 createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

box1 = new Box(800,355);
box2 = new Box(1000,355);
box3 = new Box(800,320);
box4 = new Box(1000,320);
box5 = new Box(900,290);



ground = new Ground(600, 390, 1200, 20);
platform = new Ground(100,300,500,200);

pig1 = new Pig(900,360);
pig2 = new Pig(900,325);
log1 = new Log(900,330,270,PI/2);
log2 = new Log(900,310,270,PI/2);
log3 = new Log(815,270,110,PI/4);
log4 = new Log(980,270,110,-PI/4);
//constraintLog = new Log(100,200,150,PI/2);

bird1 = new Bird(100,100);
slingshot = new Slingshot(bird1.body,{x:200,y:50});


}

function draw(){
    background(bgImage);
    Engine.update(engine);


box1.display();
box2.display();
ground.display();
pig1.display();
log1.display();
box3.display();
box4.display();
pig2.display();
log2.display();
box5.display();
log3.display();
log4.display();
bird1.display();
platform.display();
slingshot.display();


}

function mouseDragged(){
    Matter.Body.setPosition(bird1.body,{x:mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
if(keyCode===32){
    slingshot.attach(bird1.body);
}

}