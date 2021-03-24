var hr,min,sec;
var hrangle,minangle,secangle


function setup() {
  createCanvas(800,600);
 
  angleMode(DEGREES);
  

}

function draw() {
  background(0);
  translate(400,300)
  
  hr = hour();
  min = minute();
  sec = second();

  //seconds hand
  secangle = map(sec,0,60,0,360)
  push();
  rotate(secangle);
  stroke("yellow");
  strokeWeight(5);
  line(0,0,110,0);
  pop();

  point(0,0);
  strokeWeight(10);
  noFill()
  stroke("yellow");
  arc(0,0,310,310,0,secangle);

  //hour hand
  hrangle = map(hr,0,60,0,360)
  push();
  rotate(hrangle);
  stroke("red");
  strokeWeight(6);
  line(0,0,70,0);
  pop();

  point(0,0);
  strokeWeight(10);
  noFill();
  stroke("red");
  arc(0,0,250,250,0,hrangle)

  //minute hand
  minangle = map(min,0,60,0,360)
  push();
  rotate(minangle);
  stroke("blue");
  strokeWeight(5);
  line(0,0,95,0);
  pop();

  point(0,0);
  strokeWeight(10);
  noFill();
  stroke("blue");
  arc(0,0,280,280,0,minangle)


}