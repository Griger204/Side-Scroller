var person;
var sceneNum = 0;

function setup() {
  createCanvas(640, 360);
  person = new Person();
}

function keyPressed(){
  if (key == ' '){
    var jump = createVector(0, -9.1);
    person.applyForce(jump);
  } else if (key=='q'){
    sceneNum++;
  }
  if (key == 's'){
    var force = createVector(-1,0);
    person.applyForce(force)
   }
  if (key == 'w'){
   var forceForward = createVector(1,0);
   person.applyForce(forceForward)
  }
  if (key == '1'){
    sceneNum = 0; 
     }
  if (key == 'q'){
    person = new Person();

  }
  
}
function draw() {
  if(sceneNum===0){
    background(203, 244, 1);
    textSize(20);
    fill(50, 40, 30);
    text("2D side Scroller!!!", 200, 100);
    fill(50, 40, 30);
    text("press q to start game", 190, 200);
  }
  else if(sceneNum==1){
  background(244, 143, 66);
  translate(-person.pos.x, 0);
  var gravity = createVector(0, 0.3);
  person.applyForce(gravity);
  if(mouseIsPressed){  
    
}
  person.update();
  person.edges();
  person.display();
  fill(255, 0, 100);
  rect(400, height-50, 30, 50);
  rect(600, height-50, 20, 50);
  rect(650, height-100, 40, 150);
  rect(1000, height-70, 30, 70);
  fill(66, 86, 244);
  rect(1400, height-200, 50, 200);
    text("Level 1", 100, 100);
    text("Level 2", 1400, 100);
  }else{
    background(203, 244, 1);
    fill(30, 30, 30)
    textSize(30)
    text("Game Over", 200, 200);
    text("Thanks for playing", 175, 300);
    textSize(10)
    text("press 1 to go back to home screen", 475, 350)
  
  
  }
}
