var cenario;
var player;
var playerimg;
var playerGif;

function preload() {
  cenario = loadImage("imgs/kitchen.png");
  playerimg = loadImage("imgs/player.png");
  playerGif = loadImage("imgs/playewalk.gif");
}

function setup() {
  createCanvas(1200, 800);

  player = createSprite(600, 635, 30, 200);
  player.addImage("stop", playerimg);
  player.addImage("Walk", playerGif);
  player.scale = 3.0;
}

function draw() {
  background("white");

  text("Seu jogo aqui :D", width / 2, height / 2);

  image(cenario, 0, 0, 1200, 800);

  controls();

  console.log("x: " + player.x);

  drawSprites();
}

function controls() {
  if (keyDown(RIGHT_ARROW)) {
    player.x = player.x + 15;
    player.changeImage("Walk");
    player.mirrorX(+1);
  }
  if (keyDown(LEFT_ARROW)) {
    player.x = player.x - 15;
    player.changeImage("Walk");
    player.mirrorX(-1);
  }
  if (player.x >= 1140) {
    player.x = 1140;
  }
  if (player.x <= 60) {
    player.x = 60;
  }
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    player.changeImage("stop");
  }

  if (keyCode === LEFT_ARROW) {
    player.changeImage("stop");
  }
}