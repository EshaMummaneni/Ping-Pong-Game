xpos = 200
ypos = 200
dx = 5;
dy = 3;

function preload()
{

}

function setup() {
  createCanvas(400,400);
 
}

function draw() 
{
background('blue');
rect(10,ypos,10,80);
rect(388,mouseY,10,80);
ellipse(xpos,ypos,15,15);
if(xpos>=width-20 || xpos==20)
   {
    dx = -dx
   }
   if (ypos>=height-20 || ypos==20)


   function render(){
   drawRect(0,0, canvas.width, canvas.height, "BLUE");
   drawText(user.score, canvas.width/4, canvas.height/5,"WHITE");
   drawText(come.score,3*canvas.width/4, canvas.height/5, "WHITE");
   drawNet();
   drawRect(user.x, user.y, user.width, user,height, user.color);
   drawCircle(ball.x, ball.y, ball.radius, ball.color);
   }

   function game(){

       render();
   }
   
   
      
      

fill('white')
text('BEACH PING PONG GAME',200,30);
xpos = xpos +dx;
ypos = ypos +dy;
for (var i=0; i < 400; i+=20){
    line(200,i,200,i+10);
}

  
  drawSprites();
}


