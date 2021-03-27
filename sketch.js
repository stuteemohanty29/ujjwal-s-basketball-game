const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var ball;
var hoop;
var score = 0 ;
var slingShot;
var ground;
var line;

var gameState = "READY";

function preload() {
    backgroundImg = loadImage("images and audio/images/audience.jpg");
    imagebasket = loadImage("images and audio/images/basketball hoop.png");
}

function setup(){
    var canvas = createCanvas(1350,610);
    
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(730,540);
    
    slingShot = new SlingShot(ball.body,{x:400,y:400});
    ground = new Ground(700,600,1400,20);

    //hoop = new Hoop(1000,300,300,600);

   
    


}



function draw(){
    background(backgroundImg);
    //  line = line(800,200,50,10);
    Engine.update(engine);
    fill("black");
    textSize(30);
    text("score: " + score,1150,100);

    ball.display();
   
    slingShot.display();
    ground.display();
    //hoop.display();
    image(imagebasket,900,30,300,600);
}

function mouseDragged(){
    if (gameState === "READY"){
    Matter.Body.setPosition(ball.body,{x:mouseX,y : mouseY});
    }
}

function mouseReleased(){
    slingShot.fly();
    gameState = "LAUNCHED";

}

function keyPressed(){
    if (keyCode === 32){
        slingShot.attach(ball.body);
        gameState = "READY";
    }
}
