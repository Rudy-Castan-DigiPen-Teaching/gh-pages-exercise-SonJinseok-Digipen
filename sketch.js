/*Author : Jinseok Son
Assignment name :Animate a Face
Course : CS099
Semester : Spring-2020
*/



  var face_X;
  var face_Y;
  var face_sizeX=330;
  var face_sizeY=320;
  var mouth_X;
  var mouth_Y;
  var mouth_sizeX=190;
  var mouth_sizeY=0;
  var left_eyeX;
  var left_eyeY;
  var left_eyeR=195;
  var left_eyeG=220;
  var left_eyeB=141;
  var left_eyeD=90;
  var angle1=0; 
  var angle2=0;
  var angle3=0;
  var right_eyeX;
  var right_eyey;
  var right_eyeD=90;
  var left_eyeR=195;
  var left_eyeG=220;
  var left_eyeB=141;
  var left_beyeX;
  var left_beyeY;
  var right_beyeX;
  var right_beyeY;
  var right_beyeR=120;
  var right_beyeG=76;
  var right_beyeB=110;
  var nose_X;
  var nose_Y;
  var hair1_X;
  var hair1_Y;
  var hair2_X;
  var hair2_Y;
  var hair3_X;
  var hair3_Y;
  var hair3_X;
  var hair3_Y;
  var left_earX;
  var left_earY;
  var left_earSize=70;
  var right_earX;
  var right_earY;
  var right_earSize=70;
  var mouth_color;
  var face_colorR=242;
  var face_colorG=202;
  var face_colorB=106
  var ear_colorR=230;
  var ear_colorG=232;
  var ear_colorB=136;
  var mouth_colorR=189;
  var mouth_colorG=37;
  var mouth_colorB=39;
  var noseR=242;
  var noseG=187;
  var noseB=153;
  var stroke_R=130;
  var stroke_G=97;
  var stroke_B=70;
  var left_beyeR=25;
  var left_beyeG=148;
  var left_beyeB=169;
 
  

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  strokeWeight(5);
  frameRate(60);
  
}

function draw() {
  background(220)
  face_X=width/2;
  face_Y=height/2;
  mouth_X=width/2;
  mouth_Y=height/2+70
  left_eyeX=width/2-70;
  left_eyeY=width/2-50;
  right_eyeX=width/2+70;
  right_eyeY=width/2-50;
  left_earX=width/2-165;
  left_earY=height/2;
  right_earX=width/2+120;
  right_earY=height/2;
  noseX=mouseX;
  noseY=mouseY;
  
 
  
  push();
  fill(face_colorR,face_colorG,face_colorB);
  ellipse(face_X,face_Y,face_sizeX,face_sizeY);
  pop();
  
  push();
  fill(mouth_colorR,mouth_colorG,mouth_colorB);
  arc(mouth_X,mouth_Y,mouth_sizeX,mouth_sizeY,0,360)
  mouth_sizeY=(mouth_sizeY%40+0.1);
  pop();
  
  push();
  fill(left_eyeR,left_eyeG,left_eyeB);
  ellipse(left_eyeX,left_eyeY,left_eyeD,left_eyeD);
  ellipse(right_eyeX,right_eyeY,right_eyeD,right_eyeD);
  pop();
  
  left_beyeX=map(cos(angle1),-1,1,width/2-95,width/2-50);
 left_beyeY=map(sin(angle1),-1,1,width/2-30,width/2-60);
 angle1=angle1%360+1;
 angle2=atan2(mouseY-face_Y,mouseX-face_X);
 angle3=angle3%260+1;
 right_beyeX=map(cos(angle2),-1,1,width/2+60,width/2+90);
 right_beyeY=map(sin(angle2),-1,1,width/2-30,width/2-80); 
 left_earSize=left_earSize%70+0.3;
 right_earSize=map(mouseX,0,width,0,50);
 
 push()
 strokeWeight(2);
 fill(left_beyeR,left_beyeG,left_beyeB);
 ellipse(left_beyeX,left_beyeY,30);
 push();
 fill(right_beyeR,right_beyeG,right_beyeB);
 ellipse(right_beyeX,right_beyeY,30);
 pop();
 pop();
  
  push();
  strokeWeight(3);
  noseX=map(mouseX,0,width,face_X-20,face_X+40);
  noseY=map(mouseY,0,height,face_Y-20,face_Y+40);
  fill(noseR,noseG,noseB);
  triangle(face_X-30,face_Y+10,face_X+30,face_Y+10,noseX,noseY);
  pop();
  
  hair1_X=map(cos(angle3),-1,1,296,270);
  hair1_Y=map(sin(angle3),-1,1,291,220);
  hair2_X=map(cos(angle3),-1,1,393,410);
  hair2_Y=map(sin(angle3),-1,1,280,210);
  hair3_X=map(cos(angle3),-1,1,469,510);
  hair3_Y=map(sin(angle3),-1,1,280,210);
  hair4_X=map(cos(angle3),-1,1,341,370);
  hair4_Y=map(sin(angle3),-1,1,310,210);
  
  push();
  stroke(stroke_R,stroke_G,stroke_B);
  line(296,291,hair1_X,hair1_Y);
  line(393,266,hair2_X,hair2_Y);
  line(469,278,hair3_X,hair3_Y);
  line(341,267,hair4_X,hair3_Y);
  pop();
  
  fill(ear_colorR,ear_colorG,ear_colorB);
  arc(left_earX,left_earY,left_earSize,left_earSize,89,272);
  arc(right_earX+44,right_earY,right_earSize,right_earSize,270,90);
  
  
  
  
  
}
function mousePressed()
{
  

  face_colorR=242;
  face_colorG=202;
  face_colorB=106;
  ear_colorR=230;
  ear_colorG=232;
  ear_colorB=106;
  mouth_colorR=189;
  mouth_colorG=37;
  mouth_colorB=39;
  left_eyeR=195;
  left_eyeG=220;
  left_eyeB=141;
  right_beyeR=120;
  right_beyeG=76;
  right_beyeB=110;
  noseR=242;
  noseG=187;
  noseB=153;
  left_eyeR=195;
  left_eyeG=220;
  left_eyeB=141;
  stroke_R=130;
  stroke_G=97;
  stroke_B=70;
}


function keyPressed() {
  face_colorR=random(0,255);
  face_colorG=random(0,255);
  face_colorB=random(0,255);
  ear_colorR=random(0,255);
  ear_colorG=random(0,255);
  ear_colorB=random(0,255);
  mouth_colorR=random(0,255);
  mouth_colorG=random(0,255);
  mouth_colorB=random(0,255);
  left_eyeR=random(0,255);
  left_eyeG=random(0,255);
  left_eyeB=random(0,255);
  right_beyeR=random(0,255);
  right_beyeG=random(0,255);
  right_beyeB=random(0,255);
  noseR=random(0,255);
  noseG=random(0,255);
  noseB=random(0,255);
  stroke_R=random(10,220);
  stroke_G=random(10,197);
  stroke_B=random(0,255);
  left_beyeR=random(0,170);
  left_beyeG=random(0,230);
  left_beyeB=random(0,255);
  left_eyeR=random(0,255);
  left_eyeG=random(0,255);
  left_eyeB=random(0,255);
}






