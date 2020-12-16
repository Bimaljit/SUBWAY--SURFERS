  var player,playerImage;

  var coin,coinImage;

  var stone,stoneImage;

  var Background,Back_image;

  var stonesGroup;

  var coinsGroup;

  var score = 0;    
  

function preload(){
  
  playerImage = loadImage("f81158eae9a6257cdcd0bef382f31b51.png");
  
  coinImage = loadImage("f9da09a345b352d9f6cd4e59f66197c4.png");
  
  Background_image = loadImage("android-games_news.jpg");
  
  stoneImage = loadImage("grey-stone-rock-vector-clipart.png");
       
 
  
  
  
}

function setup() {
  
  createCanvas(600, 600);
  
  Background = createSprite(400,350,900,10);
  Background.addImage(Background_image);
  Background.scale = 2.2;

  player = createSprite(100,500);
  player.addImage(playerImage);
  player.scale = 0.09;
  
  coinsGroup = new Group();
  
  stonesGroup = new Group();
  
  
  
  edges = createEdgeSprites();
  
}

function draw() {
  
  background("white");
  
  Background.velocityX = -2;
  
   if(Background.x<0) 
  { 
    Background.x=Background.width/2; 
  }
  
  if(keyDown("space")){
    
    player.velocityY = -12;     
     
     }
  player.velocityY = player.velocityY + 0.8;
  player.collide(edges[3]);
  
  spawnCoins();
  
  spawnStones();
   
  drawSprites(); 
  
  stroke("white"); 
  textSize(20); 
  fill("red"); 
  text("Score: "+ score, 300,50);
  
  if(player.isTouching(coinsGroup)){    
    
    score = score+2;
    coinsGroup.destroyEach();   
     
     }
  
  if(stonesGroup.isTouching(player))
  { 
    Background.velocityX = 0;
    player.velocityY = 0;
    
    stonesGroup.setVelocityXEach(0);
    coinsGroup.setVelocityXEach(0);
    
    stonesGroup.setLifetimeEach(-1);
    coinsGroup.setLifetimeEach(-1); 
    
  }
  
}

function spawnCoins() {
   
  if (frameCount % 80 === 0)
  { 
    coin = createSprite(600,250,40,10);
    coin.y = random(120,200);
    coin.velocityX = -5;
    coin.lifetime = 300; 
    player.depth = coin.depth + 1;
    coin.addImage(coinImage);
    coin.scale=0.03  ;
    coinsGroup.add(coin);
  } 
  
} 

function spawnStones() {
  if(frameCount % 300 === 0) 
  { 
    stone = createSprite(800,560,10,40);
    stone.velocityX = -6; 
    stone.addImage(stoneImage);
    stone.scale=0.05;
    stone.lifetime = 300;
    stonesGroup.add(stone);
  }
}