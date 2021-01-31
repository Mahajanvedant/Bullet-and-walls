var bullet,wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(215,315)
  weight=random(30,52)
  thickness=random(22, 83)

  bullet=createSprite(50, 200, 70, 10);

  wall=createSprite(1200,200, thickness, 200)

  bullet.velocityX = speed;


}

function draw() {
  background("black");  

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);


  if(damage>10)
      {
    wall.shapeColor = color(255,0,0);
      }

   if(damage<10)
      {
   wall.shapeColor = color(0,255,0);
      }


  }




  drawSprites();
}

function hasCollided(lbullet, lwall)
{
    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x
    wallLeftEdge = lwall.x;
    if (bulletRightEdge>=wallLeftEdge)
    {
        return true
    }
    return false;
} 