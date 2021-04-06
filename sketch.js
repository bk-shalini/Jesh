 
 
 var PLAY = 1;
 var END = 0;
 var gameState = PLAY;
 var EnemyGroup;
 var gameOver;
 var restart;

 var count = 0;
 var spaceship;

function setup()
{

  EnemyGroup = createGroup();
  gameOver = createSprite(200,300);
restart = createSprite(200,340);
//gameOver.setAnimation("gameover.png");
gameOver.scale = 0.5;
//restart.setAnimation("restart.png");
restart.scale = 0.5;

gameOver.visible = false;
restart.visible = false;

spaceship = createSprite(200,300, 200, 200); 
//spaceship.image =("unnamed(29).png");
spaceship.scale = 0.5;
spaceship.x = 200;
}
 




 


 
function draw() {

  background(0);
  textSize(18);
textFont("Ariel");
textStyle(BOLD);
  text("Score: "+ count, 250, 100);
  rectMode(CENTER);
 
  
 

  spaceship.x = World.mouseX;
   
  
    

  if(gameState === PLAY)
  {
    
  if(keyDown("space"))
  {

    var laser = createSprite(spaceship.x,spaceship.y,100,10);
    laser.shapeColor= "red";

    laser.velocityY = -60
  }
  
  if (EnemyGroup.isTouching(laser)) 
  {
    EnemyGroup.destroyEach();
    score = score + 2
     
  }
    if(count===20)
    {
      if(World.frameCount % 1000 === 0)
      {
        for (var n = 0; n < 400; n = n +20) 
        {
          var black = createSprite(n, 100, 10, 10);
          black.scale = 0.2
          //black.setAnimation("Imported piskel.gif");
        }
      }
      if (enemyGroup.y===400 ){ 
        gameState = END
      }
  
  }
    

  }



   
    else if(gameState === END) {
      gameOver.visible = true;
    restart.visible = true;
    
    
    spaceship.velocityX = 0;
    EnemyGroup.velocityY = 0;
        
      }
  
 Enemy();
  drawSprites();

  


}


function Enemy(){
  if (count > 200)
  {
    if (World.frameCount % 100 === 0) {

 
      var evil = createSprite(400,200,20,20)
      //evil.image=("");
      evil.x = randomNumber(100,300)
      evil.velocityY = -5;
      
      EnemyGroup.add(evil)
      
    }
  }
  
  

}