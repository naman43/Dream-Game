const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground, groundImage;

var spawningDice;
var Lazer, LazerImage; 

var player;
var playerStandingImage, walkingAnimation;

var plat1,plat2;
var plat1Image,plat2Image;

var healthGUI; 
var healthGUIImage,image2,image3,image4,image5; 

var medikit;
var medikitImage;

var enemy,lazer2;
var enemyImage,lazer2Image;

var boss;
var BossImage;

function preload()
{
  
  groundImage = loadImage("background.gif");
  playerStandingImage = loadImage("Player/Standing.png");
  enemyImage = loadImage("Enemies/Enemyreal.png")
  medikitImage = loadImage("Pickups/Medikit.png")
  LazerImage = loadImage("Player/Lazer.png");
  lazer2Image = loadImage("Player/Lazer.png");
  enemyImage = loadImage("Enimies/Enemyreal.png")

  healthGUIImage = loadImage("HealthBar/full.png");
  image2 = loadImage("HealthBar/2.png");

  plat1Image = loadImage("base1.png")
  plat1Image = loadImage("base2.png")
}


function setup() 
{

  createCanvas(windowWidth,windowHeight);

  LazerG= new Group(); 

  engine = Engine.create();  
  world = engine.world;

  player = createSprite(50,360,10,1000);
  player.addImage(playerStandingImage);
  player.scale = 2;
  player.debug = false;
  player.setCollider('rectangle',1,10,50,60)

  enemy = createSprite(500,360,10,1000);
  enemy.addImage(enemyImage);
  enemy.scale = 0.38;
  enemy.debug = false;
  enemy.setCollider('rectangle',1,10,150,340)


  healthGUI = createSprite(1600,18,10,10);
  healthGUI.addImage(image2);  

  medikit = createSprite(100,280,10,10);
  medikit.addImage(medikitImage);
  medikit.scale = 0.2;
  medikit.debug = false;
  medikit.setCollider('rectangle',10,10,500,500) 
  medikit.visible = false;

  
}

function draw() 
{
  background(groundImage);
  

  Engine.update(engine);

  
  console.log(spawningDice);  
 
 
  drawSprites();
  
  
  control();
  lazer();
  shoot();
  spawn();
  pickUP();
}

//Game Elements;
function control()
{
  if (keyDown("up") || keyDown("w") ) {
   enemy.y -= 3;
  } 
  
  if (keyDown("down")|| keyDown("s")){
    enemy.y += 3;
  }  
  
  if (keyDown("left")|| keyDown("a")){
    enemy.x -=3;
  }
  
  if (keyDown("right")|| keyDown("d")){
    enemy.x += 3;
  }
}


function powerUp()
{

}

function pickUP()
{
  if(medikit.isTouching(enemy))
  {
    healthGUI.addImage(healthGUIImage);
  }
}


function lazer(){
  Lazer=createSprite(360,100,5,10);
  Lazer.velocityX=-6;
  Lazer.scale=0.3;
  LazerG.add(Lazer);
  return Lazer
  }


function shoot()
{
  if (keyWentDown ("space")){
    var lazer2 = lazer(); 
    lazer2.addImage(LazerImage);
    lazer2.y=enemy.y+20;
    lazer2.x=enemy.x-80;
    }
  

} 


function spawn()
{
  spawningDice = Math.round(random(1,10));
  if(frameCount % 10 === 0)
  {
    if(spawningDice === 2)
    {
      medikit.visible = true;
      medikit.x  = Math.round(random(500,1200)); 
      medikit.y  = 280;
      medikit.velocityY +=2; 
    }
  }
}

function die()
{

  
} 