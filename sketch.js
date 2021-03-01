var WELCOME = 0;
var PLAY = 1;
var END = 2;
var gameState = WELCOME;

var score;
var welcome_screen , game;

function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  game = new Game();
  welcome_screen = new WelcomeScreen();
}

function draw() {
  background(255,255,255); 
  
  if(gameState === WELCOME){
    welcome_screen.display();
    textSize(30);
    text("Welcome", width/2, 0);
    stroke(255)
    fill(255)
    text("Press SPACE to start game", width/2-100, height-200);
    if(keyDown("space")){
      gameState = PLAY;
      
    }

  }else if(gameState === PLAY){
      game.play();
      game.spawnShells();
      if (keyDown(LEFT_ARROW)) {
          game.moveLeft();        
      }
  }else {

  }
  
}