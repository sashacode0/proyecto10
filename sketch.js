var sea,ship;
var seaImg,shipImg;

function preload(){
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Mover el fondo
  sea=createSprite(0,200);
  sea.addImage(seaImg);
  sea.velocityX = 5;
  sea.scale=0.3;

  
  ship = createSprite(200,200,30,30);
  ship.addAnimation("movingShip",shipImg);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = 3;

  //descomentar el código para reiniciar el fondo
  if(sea.x > 400){
    sea.x = sea.width/-20;
  }

 
  drawSprites();
}
