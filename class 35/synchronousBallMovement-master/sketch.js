var ball, database;
var position;
var ballimg,bg
function preload() {
  ballimg=loadImage("balloon.png")
  bg=loadImage("bg.png")
}

function setup(){
database=firebase.database()
  createCanvas(1000,500);

  ball = createSprite(250,250,10,10);
  ball.addImage(ballimg)
  ball.shapeColor = "red";

  var loc=database.ref("ball/position")
  loc.on("value",readop)
  

  }

function draw(){
  background(bg);
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}
function readop(data){
  position=data.val(

  )
  ball.x=position.x
  ball.y=position.y
  
}
function writePosition(x,y){
  database.ref("ball/position").set({
    'x':position.x+x,
    'y':position.y+y
  })
}

