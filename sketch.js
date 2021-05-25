var WELCOME = 0;
var PLAY = 1;
var END = 2;
var gameState = WELCOME;

var score=0;
var welcome_screen , game;
var shellsGroup;
var plasticDustbin , glassDustbin , PaperDustbin;
var PlasticBtn;

function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  game = new Game();
  welcome_screen = new WelcomeScreen();

  PlasticBtn=createButton("dispose waste in Plastic dustbin")
  PlasticBtn.position(593,118)
  //PlasticBtn.mousePressed(game.plasticDisposed)
  PlasticBtn.hide();
  
}

function draw() {
  background(255,255,255); 
  
  if(gameState === WELCOME){
    welcome_screen.display();
    textSize(30);
    text("Welcome", width/2, 0);
    stroke(255)
    fill(255)
    text("Press SPACE to start game", width/2-170, height-200);
    if(keyDown("space")){
      gameState = PLAY;
      
    }
  }
  else if(gameState === PLAY){
      game.play();
      game.spawnShells();
      game.calculateScore();
      game.dropWaste();
      textSize(35);
      textFont("Cavolini");
      fill(244, 75, 177);
      text("Score:"+score,640,64);
      if (keyDown(LEFT_ARROW)) {
          game.moveLeft();        
      }

      if (keyDown(RIGHT_ARROW)) {
          game.moveRight();        
      }

      if (keyDown(DOWN_ARROW)) {
          game.moveDown();        
      }

      if (keyDown(UP_ARROW)) {
          game.moveUp();        
        }

  }
}
