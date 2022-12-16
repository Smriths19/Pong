//Global variables for right paddle, left paddle, ball, scores & the sound 
let rightPaddle;
let leftPaddle;
let ball;
let sound;
let score1 = 10;
let score2 = 10;
let totalScore1 = 0;
let totalScore2 = 0;

//This function is to preload the losing sound when any one of the players loses a point
function preload() {
    sound = loadSound("song.mp3");
}


function setup() {  
  // Choosing the width and height to be the size of the screen (as you'd asked me to do in a previous class assignment)
  createCanvas(windowWidth, windowHeight); 
  rectMode(CENTER);
 
  //The two parameters for the paddle object are the x position and its speed
  leftPaddle= new Paddle(50, 5);          
  //Putting 0 as speed here because I'm using keypressed function instead
  rightPaddle = new Paddle(1390, 0);     
 
  //The one parameter for the ball object is the speed, which I'm giving a random speed.  
  ball = new Ball(random(3, 5));    
}


//This function is used for allowing the player (you) to use up and down arrows to play
function keyPressed()
{
  if(keyCode ==UP_ARROW)
  {
    rightPaddle.changeDir(-4);
  }
  
    if(keyCode ==DOWN_ARROW)
  {
    rightPaddle.changeDir(4);
  }
}

//This is where all the functions must be called on P5js

function draw() {
  background(0);
  strokeWeight(4);
  stroke(150);
  textSize(30);
 //Text for computer
  text("COMPUTER",200,60);
  textSize(20);
  text(score1,200,90);  
  strokeWeight(2);
  textSize(16);
  text("Total score:", 200, 20);
  text(totalScore1, 285, 20);

  //Text for the main "PONG"
  textSize(30);
  text("PONG", 680, 50);

  //Text your player
  strokeWeight(4);
  stroke(150);
  textSize(30);
  text("YOU",1090,60)
  textSize(20);
  text(score2,1090,90);
  strokeWeight(2);
  textSize(16);
  text("Total score: ", 1090, 20);
  text(totalScore2, 1175, 20);


  //The tennis net effect
  for(let i = 60; i < windowHeight; i+=40) {
    line(windowWidth/2, i, windowWidth/2, i+10)
  }

  //Each of the object functions being called
  leftPaddle.showPaddle();
  rightPaddle.showPaddle();
  leftPaddle.movePaddle();
  rightPaddle.movePaddle();
  leftPaddle.paddleCollision();
  rightPaddle.paddleCollision();
  ball.showBall();
  ball.moveBall();
  ball.ballCollision();
 
  //Change ball size in 40 seconds of the game
  setInterval(changeBallSize, 40000);
  


  //detecting collision between ball & either paddle
 //In each of the paddles, we are comparing the ball with their width and height 
  if(ball.x <= 65 && ball.y <= (leftPaddle.y + (leftPaddle.h/2)) && ball.y >= (leftPaddle.y - (leftPaddle.h/2)))
  {
    ball.vx *= -1;
    ball.vy *= -1;
  }

  //Repeating the same for the right paddle

  if(ball.x >= 1380 && ball.y <= (rightPaddle.y + (leftPaddle.h/2)) && ball.y >= (rightPaddle.y - (leftPaddle.h/2)))
  {
    ball.vx *= -1;
    ball.vy *= -1;
  }


  //if ball goes beyond the perimeter
  if (ball.x - ball.w > width)
  {
    score2--;
    ball.resetGame();
    sound.play();
  }
  
    if (ball.x + ball.w < 0)
  {
    score1--;
    ball.resetGame();
    sound.play();
  }

 // Letting you know who won the game 
 if(score1 <= 0) {
  totalScore2++;
  score1 = 10;
  score2 = 10;
  ball.resetGame();
  }

else if(score2 <= 0) {
  totalScore1++;
  score1 = 10;
  score2 = 10;
  ball.resetGame();
  }

}

function changeBallSize(){
    ball.w = 40;
}

 
