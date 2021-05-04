var mario, marioimg;

function preload(){
 marioimg = loadImage("MA.png");
}

function setup(){
  createCanvas(500, 500);
  mario = createSprite(250, 250, 20, 20);
  mario.addImage("mar", marioimg);
}

function draw(){
  background("black");
  drawSprites();
}