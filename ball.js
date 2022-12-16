//OOP class of "ball" using constructor function
class Ball
{
  constructor(vx)
  {
    this.x = width/2; //This ensures the ball starts at the center
    this.y = height/2;
    this.w = 20;      
    this.vx = vx;    //Since we're setting the x-speed as random
    this.vy = 2;
  }
  
  //This function lets you see the ball
  showBall()
  {
    fill(255);
    noStroke();
    ellipse(this.x,this.y,this.w);
  }
  
  //This function allows the ball to move in both x & y directions
  moveBall()
  {
    this.y += this.vy;
    this.x += this.vx;
  } 
  
  //This function makes sure that as soon as the ball is between 0-height (in y axis), it deflects in the other direction
  ballCollision()
  {
    if(this.y >= height || this.y <= 0)
    {
      this.vy *= -1;
    }
  }


  //This function resets the ball to the center
  resetGame()
  {
    this.x = width/2;
    this.y = height/2;
    this.vx *= -1;
    this.vy *= -1;
  }
}