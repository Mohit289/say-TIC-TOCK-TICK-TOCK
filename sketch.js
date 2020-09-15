var tick;
var hr;
var mn;
var sc;
var scAngle;

function setup() {
  createCanvas(800,400);
 // createSprite(20, 20, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  
  let hr = hour();
  let mn = minute();
  let sc = second();

  //seconds
  scAngle = map(sc,0,60,0,360);
  //arc(100,20,60,60,0,scAngle);

  //minutes
  mnAngle = map(mn,0,60,0,360);
 //arc(100,100,280,280,0,mn);

  //hours
  hrAngle = map(hr%12,0,12,0,360);
  //arc(100,100,260,260,0,hr);


  // drawing second hand
  push();
  rotate(sc);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  // drawing second angle
  push();
  rotate(scAngle);
  stroke("yellow");
  strokeWeight(7);
  arc(0,0,120,120,0,scAngle);
  pop();
  

  drawSprites();
}