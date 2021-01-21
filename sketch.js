var AWM ,Militarywall;
var S,weight,T;

function setup() {
  createCanvas(2000,600);
  S= random(223,321)
  T=random(22,83)
  weight=random(30,52)
  Militarywall = createSprite(1000, 400, T,height/2);
  AWM = createSprite(50, 400, 80, 20);
}


function draw() {
  background(0); 
  AWM.velocityX=S;
  AWM.shapeColor=color("gold");
  if(hasCollided(AWM,Militarywall)){
    
    var damage=0.5*weight*S*S/T*T*T;
    if(damage>10){
      Militarywall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      Militarywall.shapeColor=color(0,255,0);
    }
    AWM.velocityX= 0;
  }


  drawSprites();
}

function hasCollided(Lbullet,Lwall)
{
  var bulletRightEdge=Lbullet.x+Lbullet.width;
  var wallLeftEdge=Lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}
