let dragon,dragonImage,dragon_fire,dragonfireimg;
let bgimg,bg,zombie,zombieimg;

function preload() {
  dragonImage = loadAnimation("Images/dragonrun1.png","Images/dragonrun2.png","Images/dragonrun3.png","Images/dragonrun4.png","Images/dragonrun5.png")
  bgimg = loadImage("Images/backimage.jpg")
  zombieimg = loadAnimation("Images/zombierun1.png","Images/zombierun2.png","Images/zombierun3.png","Images/zombierun4.png")  
  dragonfireimg = loadAnimation("Images/dragonfire1.png","Images/dragonfire2.png","Images/dragonfire3.png","Images/dragonfire4.png")
}


function setup() {
  createCanvas(1200,500);
  bg = createSprite(600,250,1200,500)
  bg.addImage("bgImg",bgimg)
  bg.velocityX = -6
  bg.scale = 8
  dragon = createSprite(200,350,200,200)
  // zombie = createSprite(200,200,200,200)
  dragon.addAnimation("fire", dragonImage)
  // dragon_fire = createSprite(400,350,200,200)
  // dragon_fire.addAnimation("run",dragonfireimg)
  // zombie.addAnimation("zombie",zombieimg)
  dragon.scale = 2
}

function Zombie() {}

function draw() {
  background(0);  
  if(bg.x < 0) {
    bg.x = 600
  }
  if(keyIsDown(32)){
    dragon.changeAnimation("fire",dragonfireimg)
    console.log("Hello")
  }
  drawSprites();
}
