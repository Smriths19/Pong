//OOP class of "paddles" using constructor function

class Paddle
{
  //We are setting an exact value for x here (so they're on either side)
  //The speed of the paddles can be allocated randomly, therefore a parameter
  constructor(x, vy)
  {
    this.x = x;
    this.y = 500;        
    this.w = 20;
    this.h = 100;
    this.vy = vy;
  }


  //Function that draws the paddles on the canvas
  showPaddle()
  {
    rect(this.x,this.y,this.w,this.h);
  }

  //Function that makes the paddles move in the y direction alone
  movePaddle()
  {
   this.y += this.vy; 
  }

  //Function that ensures the paddles don't go beyond the boundaries of your screen
  //Given -50 & +50 here because the paddles were going until the middle & since height is 100, we have to restrict it further

  paddleCollision()
  {
    if(this.y >= height- (this.h/2) || this.y <= (this.h/2))
    {
      this.vy *= -1;
    }
  }

  //Function used to ensure the keypressed function can change directions upon hitting the wall (check sketch.js)
  changeDir(y)
  {
    this.vy = y;
  }

}