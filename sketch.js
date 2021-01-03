var background, ball, basket;
var backImg, ballImg, basketImg;
var score;

function preload(){

  backImg = loadImage("court.png");

  ballImg = loadImage("ball.png");

  basketImg = loadImage("basket.png");
  

}

function setup() {
  createCanvas(1000,600);

  background = createSprite(500,300,1000,600);
  background.addImage(backImg);
  background.scale = 1.5

  basket = createSprite(900,500,30,30);
  basket.addImage(basketImg);
  basket.scale = 0.4;

  
  ball = createSprite(Math.round(random(1000, 100)),35, 10, 10);
  ball.addImage(ballImg);
  ball.scale = 0.5;
  ball.velocityY = 6;
  


  score = 0;
 
}

function draw() {
   text("score:", + score, 100,100 );
  
 basket.x= World.mouseX;

  drawSprites();
}