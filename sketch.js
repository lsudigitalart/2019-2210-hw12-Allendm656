//Pump Vars
  var cs1 = 70, cs2 = 55, cs3 = 40, cs4 = 25
  var circlestate1 = true, circlestate2 = false, circlestate3 = true, circlestate4 = false, circlestate5 = true, circlestate6 = false, circlestate7 = true, circlestate8 = false
//Piston Vars
  var px1 = 210, py1 = 210, px2 = 240, py2 = 180
  var px3 = 250, py3 = 190, px4 = 280, py4 = 160
  var px5 = 290, py5 = 170, px6 = 320, py6 = 140
  var px7 = 330, py7 = 150, px8 = 360, py8 = 120
  var px9 = 370, py9 = 130, px10 = 400, py10 = 100

  var px11 = 1390, py11 = 210, px12 = 1360, py12 = 180
  var px13 = 1350, py13 = 190, px14 = 1320, py14 = 160
  var px15 = 1310, py15 = 170, px16 = 1280, py16 = 140
  var px17 = 1270, py17 = 150, px18 = 1240, py18 = 120
  var px19 = 1230, py19 = 130, px20 = 1200, py20 = 100
  
  var pistonstate1 = true, pistonstate2 = false, pistonstate3 = true, pistonstate4 = false, pistonstate5 = true, pistonstate6 = false, pistonstate7 = true, pistonstate8 = false, pistonstate9 = true, pistonstate10 = false
  var pistonstate11 = true, pistonstate12 = false, pistonstate13 = true, pistonstate14 = false, pistonstate15 = true, pistonstate16 = false, pistonstate17 = true, pistonstate18 = false, pistonstate19 = true, pistonstate20 = false
  var screenstate = true
//Color Vars 
  var plat1, plat2
  var pump
  var piston
  var a = 255
  var red
  var green
  var blue

//Variable Vars
  var x
  var y
  var r
//Music Vars
  var song
  var songstate = true
  var playTime, loadTime;
  var amp, level;
  var fft
  var spectrum 
  var trebleVol 
  var midVol 
  var bassVol 

function preload(){
  song = loadSound("TWRP.mp3");
}

function setup() {
  createCanvas(1600, 800);

  plat1 = color(50, 50, 100) 
  plat2 = color(60, 60, 110)
  pump = color(125)

  amp = new p5.Amplitude();
  fft = new p5.FFT();
}

function mousePressed(){  
  if(song.isLoaded() && songstate == true){
    loadTime = millis()
    song.play()
    songstate = false
    screenstate = false
  }
}


function draw() {
  playTime = millis() - loadTime
  print(playTime)
  level = amp.getLevel();
  grad1 = lerpColor(color("black"), color("red"), level);

  spectrum = fft.analyze();
  trebleVol = fft.getEnergy("treble");
  midVol = fft.getEnergy("mid");
  bassVol = fft.getEnergy("bass");

  if(screenstate == false){
    a -= 1
  }

//Background + Inner Background + Outer edge lines
  background(30, 30, 60);

  strokeWeight(1)
  line(0, 0, 40, 40)
  line(1600, 0, 1560, 40)
  line(1600, 800, 1560, 760)
  line(0, 800, 40, 760)

  fill(40, 40, 70)
  beginShape()
  vertex(40, 40) 
  vertex(1560, 40)
  vertex(1560, 760)
  vertex(40, 760)
  endShape(CLOSE)

//Pistons
  leftpiston(0, 0)
  leftpiston(60, 0)
  leftpiston(120, 0)
  leftpiston(180, 0)
  leftpiston(240, 0)
  
  rightpiston (0, 0)
  rightpiston (60, 0)
  rightpiston (120, 0)
  rightpiston (180, 0)
  rightpiston (240, 0)

//Piston 1 Motion
  push()
  if(pistonstate2){
    px1 -= 4
    py1 -= 4
    px2 -= 4
    py2 -= 4
  if( px2 <= 140 && py2 <= 80){
    pistonstate1 = true
    pistonstate2 = false
  }
  }
  if(pistonstate1){
    px1 += 4
    py1 += 4
    px2 += 4
    py2 += 4
  if(px2 >= 260 && py2 >= 200){
    pistonstate1 = false
    pistonstate2 = true
    }
    }
    fill(pump)
    beginShape()
    vertex(px1, py1)
    vertex(px2, py2)
    vertex(560, 500)
    vertex(500, 500)
    endShape(CLOSE)
    pop()

//Piston 2 Motion
  push()
  if(pistonstate4){
    px3 -= 4
    py3 -= 4
    px4 -= 4
    py4 -= 4
  if( px4 <= 200 && py4 <= 80){
    pistonstate3 = true
    pistonstate4 = false
  }
  }
  if(pistonstate3){
    px3 += 4
    py3 += 4
    px4 += 4
    py4 += 4
  if(px4 >= 320 && py4 >= 200){
    pistonstate3 = false
    pistonstate4 = true
    }
    }
    fill(pump)
    beginShape()
    vertex(px3, py3)
    vertex(px4, py4)
    vertex(620, 500)
    vertex(560, 500)
    endShape(CLOSE)
    pop()

//Piston 3 Motion
  push()
  if(pistonstate6){
    px5 -= 4
    py5 -= 4
    px6 -= 4
    py6 -= 4
  if( px6 <= 260 && py6 <= 80){
    pistonstate5 = true
    pistonstate6 = false
  }
  }
  if(pistonstate5){
    px5 += 4
    py5 += 4
    px6 += 4
    py6 += 4
  if(px6 >= 380 && py6 >= 200){
    pistonstate5 = false
    pistonstate6 = true
    }
    }
    fill(pump)
    beginShape()
    vertex(px5, py5)
    vertex(px6, py6)
    vertex(680, 500)
    vertex(620, 500)
    endShape(CLOSE)
    pop()

//Piston 4 Motion
  push()
  if(pistonstate8){
    px7 -= 4
    py7 -= 4
    px8 -= 4
    py8 -= 4
  if( px8 <= 320 && py8 <= 80){
    pistonstate7 = true
    pistonstate8 = false
  }
  }
  if(pistonstate7){
    px7 += 4
    py7 += 4
    px8 += 4
    py8 += 4
  if(px8 >= 440 && py8 >= 200){
    pistonstate7 = false
    pistonstate8 = true
    }
    }
    fill(pump)
    beginShape()
    vertex(px7, py7)
    vertex(px8, py8)
    vertex(740, 500)
    vertex(680, 500)
    endShape(CLOSE)
    pop()

//Piston 5 Motion
  push()
  if(pistonstate10){
    px9 -= 4
    py9 -= 4
    px10 -= 4
    py10 -= 4
  if( px10 <= 380 && py10 <= 80){
    pistonstate9 = true
    pistonstate10 = false
  }
  }
  if(pistonstate9){
    px9 += 4
    py9 += 4
    px10 += 4
    py10 += 4
  if(px10 >= 500 && py10 >= 200){
    pistonstate9 = false
    pistonstate10 = true
    }
    }
    fill(pump)
    beginShape()
    vertex(px9, py9)
    vertex(px10, py10)
    vertex(800, 500)
    vertex(740, 500)
    endShape(CLOSE)
    pop()

//Piston 6 Motion
push()
if(pistonstate12){
  px11 += 4
  py11 -= 4
  px12 += 4
  py12 -= 4
if( px12 >= 1460 && py12 <= 80){
  pistonstate11 = true
  pistonstate12 = false
}
}
if(pistonstate11){
  px11 -= 4
  py11 += 4
  px12 -= 4
  py12 += 4
if(px12 <= 1340 && py12 >= 200){
  pistonstate11 = false
  pistonstate12 = true
  }
  }
  fill(pump)
  beginShape()
  vertex(px11, py11)
  vertex(px12, py12)
  vertex(1040, 500)
  vertex(1100, 500)
  endShape(CLOSE)
  pop()

//Piston 7 Motion
push()
if(pistonstate14){
  px13 += 4
  py13 -= 4
  px14 += 4
  py14 -= 4
if( px14 >= 1400 && py14 <= 80){
  pistonstate13 = true
  pistonstate14 = false
}
}
if(pistonstate13){
  px13 -= 4
  py13 += 4
  px14 -= 4
  py14 += 4
if(px14 <= 1280 && py14 >= 200){
  pistonstate13 = false
  pistonstate14 = true
  }
  }
  fill(pump)
  beginShape()
  vertex(px13, py13)
  vertex(px14, py14)
  vertex(980, 500)
  vertex(1040, 500)
  endShape(CLOSE)
  pop()

//Piston 8 Motion
push()
if(pistonstate16){
  px15 += 4
  py15 -= 4
  px16 += 4
  py16 -= 4
if( px16 >= 1340 && py16 <= 80){
  pistonstate15 = true
  pistonstate16 = false
}
}
if(pistonstate15){
  px15 -= 4
  py15 += 4
  px16 -= 4
  py16 += 4
if(px16 <= 1220 && py16 >= 200){
  pistonstate15 = false
  pistonstate16 = true
  }
  }
  fill(pump)
  beginShape()
  vertex(px15, py15)
  vertex(px16, py16)
  vertex(920, 500)
  vertex(980, 500)
  endShape(CLOSE)
  pop()

//Piston 9 Motion
push()
if(pistonstate18){
  px17 += 4
  py17 -= 4
  px18 += 4
  py18 -= 4
if( px18 <= 1280 && py18 <= 80){
  pistonstate17 = true
  pistonstate18 = false
}
}
if(pistonstate17){
  px17 -= 4
  py17 += 4
  px18 -= 4
  py18 += 4
if(px18 >= 1160 && py18 >= 200){
  pistonstate17 = false
  pistonstate18 = true
  }
  }
  fill(pump)
  beginShape()
  vertex(px17, py17)
  vertex(px18, py18)
  vertex(860, 500)
  vertex(920, 500)
  endShape(CLOSE)
  pop()

//Piston 10 Motion
push()
if(pistonstate20){
  px19 += 4
  py19 -= 4
  px20 += 4
  py20 -= 4
if( px20 >= 1220 && py20 <= 80){
  pistonstate19 = true
  pistonstate20 = false
}
}
if(pistonstate19){
  px19 -= 4
  py19 += 4
  px20 -= 4
  py20 += 4
if(px20 <= 1100 && py20 >= 200){
  pistonstate19 = false
  pistonstate20 = true
  }
  }
  fill(pump)
  beginShape()
  vertex(px19, py19)
  vertex(px20, py20)
  vertex(800, 500)
  vertex(860, 500)
  endShape(CLOSE)
  pop()

//Pumps 
  pumps(140, 240)
  pumps(1460, 240)
  pumps(240, 340)
  pumps(1360, 340)
  pumps(340, 440)
  pumps(1260, 440)
  pumps(440, 540)
  pumps(1160, 540)

//Pump motion - Tops
  push()
  if(circlestate2){
    cs1 -= 2.5
    if(cs1 <= 30){
      circlestate1 = true
      circlestate2 = false
    }
  }
  if(circlestate1){
    cs1 += 6.5
    if(cs1 >= 80){
      circlestate1 = false
      circlestate2 = true
   }
  }
  strokeWeight(2)
  fill(pump)
  ellipse(140, 240, cs1, cs1)
  ellipse(1460, 240, cs1, cs1)
  pop()

//Pump Motion - Top mid
  push()
  if(circlestate4){
    cs2 -= 2.5
    if(cs2 <= 30){
      circlestate3 = true
      circlestate4 = false
    }
  }
  if(circlestate3){
    cs2 += 6.5
    if(cs2 >= 80){
      circlestate3 = false
      circlestate4 = true
  }
  }
  strokeWeight(2)
  fill(pump)
  ellipse(240, 340, cs2, cs2)
  ellipse(1360, 340, cs2, cs2)
  pop()

//Pump Motion - Bottom mid
  push()
  if(circlestate6){
    cs3 -= 2.5
    if(cs3 <= 30){
      circlestate5 = true
      circlestate6 = false
    }
  }
  if(circlestate5){
    cs3 += 6.5
    if(cs3 >= 80){
      circlestate5 = false
      circlestate6 = true
  }
  }
  strokeWeight(2)
  fill(pump)
  ellipse(340, 440, cs3, cs3)
  ellipse(1260, 440, cs3, cs3)
  pop()

//Pump Motion - Bottom
  push()
  if(circlestate8){
    cs4 -= 2.5
    if(cs4 <= 30){
      circlestate7 = true
      circlestate8 = false
    }
  }
  if(circlestate7){
    cs4 += 6.5
    if(cs4 >= 80){
      circlestate7 = false
      circlestate8 = true
  }
  }
  strokeWeight(2)
  fill(pump)
  ellipse(440, 540, cs4, cs4)
  ellipse(1160, 540, cs4, cs4)
  pop()


//Mid Circle Comp
  strokeWeight(1)
  fill(plat1)
  ellipse(800, 400, 640, 640)
  fill(trebleVol, 20, 20)
  ellipse(800, 400, 560, 560)
  fill(plat1)
  ellipse(800, 400, 480, 480)
  fill(midVol, 20, 20)
  ellipse(800, 400, 400, 400)
  fill(plat1)
  ellipse(800, 400, 320, 320)
  fill(bassVol, 20, 20)
  ellipse(800, 400, 240, 240)
  fill(plat1)
  ellipse(800, 400, 160, 160)

  fill(80)
  push()
  translate(800, 400);
  translate(p5.Vector.fromAngle(millis() / 200, 100));
  ellipse(0, 0, 40, 40)
  pop()

  push()
  translate(800, 400);
  translate(p5.Vector.fromAngle(millis() / 195, 180));
  ellipse(0, 0, 40, 40)
  pop()

  push()
  translate(800, 400);
  translate(p5.Vector.fromAngle(millis() / 190, 260));
  ellipse(0, 0, 40, 40)
  pop()
  
//Armor Plates
  //Left Top
  fill(plat1)
  beginShape()
  vertex(425, 60)
  vertex(405, 80)
  vertex(530, 200)
  vertex(600, 120)
  vertex(700, 80)
  vertex(680, 60)
  endShape(CLOSE)

  line(405, 80, 425, 80)
  line(425, 60, 425, 80)
  line(680, 60, 680, 80)
  line(700, 80, 680, 80)
  line(600, 120, 585, 110)
  line(530, 200, 530, 175)

  fill(plat2)
  beginShape()
  vertex(425, 80)
  vertex(680, 80)
  vertex(585, 110)
  vertex(530, 175)
  endShape(CLOSE)

  //Left Bottom 
  fill(plat1)
  beginShape()
  vertex(60, 300)
  vertex(80, 280)
  vertex(420, 620)
  vertex(520, 620)
  vertex(620, 720)
  vertex(600, 740)
  vertex(80, 740)
  vertex(60, 720)
  endShape(CLOSE)

  line(60, 300, 80, 300)
  line(80, 280, 80, 300)
  line(420, 620, 420, 640)
  line(520, 620, 520, 640)
  line(620, 720, 600, 720)
  line(600, 740, 600, 720)
  line(80, 740, 90, 720)
  line(60, 720, 80, 710)

  fill(plat2)
  beginShape()
  vertex(80, 300)
  vertex(420, 640)
  vertex(520, 640)
  vertex(600, 720)
  vertex(90, 720)
  vertex(80, 710)
  endShape(CLOSE)

  //Right Top
  fill(plat1)
  beginShape()
  vertex(1175, 60)
  vertex(1195, 80)
  vertex(1070, 200)
  vertex(1000, 120)
  vertex(900, 80)
  vertex(920, 60)
  endShape(CLOSE)

  line(1175, 60, 1175, 80)
  line(1195, 80, 1175, 80)
  line(1070, 200, 1070, 175)
  line(1000, 120, 1015, 110)
  line(900, 80, 920, 80)
  line(920, 60, 920, 80)

  fill(plat2)
  beginShape()
  vertex(1175, 80)
  vertex(920, 80)
  vertex(1015, 110)
  vertex(1070, 175)
  endShape(CLOSE)

  //Right Bottom
  fill(plat1)
  beginShape()
  vertex(1540, 300)
  vertex(1520, 280)
  vertex(1180, 620)
  vertex(1080, 620)
  vertex(980, 720)
  vertex(1000, 740)
  vertex(1520, 740)
  vertex(1540, 720)
  endShape(CLOSE)

  line(1540, 300, 1520, 300)
  line(1520, 280, 1520, 300)
  line(1180, 620, 1180, 640)
  line(1080, 620, 1080, 640)
  line(980, 720, 1000, 720)
  line(1000, 740, 1000, 720)
  line(1520, 740, 1510, 720)
  line(1540, 720, 1520, 710)

  fill(plat2)
  beginShape()
  vertex(1520, 300)
  vertex(1180, 640)
  vertex(1080, 640)
  vertex(1000, 720)
  vertex(1510, 720)
  vertex(1520, 710)
  endShape(CLOSE)

//Plate screws
  //Top left
  screw(480, 100, 90)
  screw(527, 147, 20)
  //Bottom left
  screw(100, 350, 50)
  screw(100, 700, 190)
  screw(530, 680, 60)
  screw(375, 630, 325)
  //Top right
  screw(1120, 100, 310)
  screw(1073, 147, 280)
  //Bottom right
  screw(1500, 350, 60)
  screw(1500, 700, 80)
  screw(1070, 680, 280)
  screw(1225, 630, 90)

//radio Comm
  fill(plat1)
  beginShape()
  vertex(1330, 515)
  vertex(1345, 500)
  vertex(1455, 500)
  vertex(1470, 515)
  vertex(1470, 685)
  vertex(1455, 700)
  vertex(1345, 700)
  vertex(1330, 685)
  endShape(CLOSE)
  line(1330, 515, 1340, 520)
  line(1345, 500, 1350, 510)
  line(1455, 500, 1450, 510)
  line(1470, 515, 1460, 520)
  line(1470, 685, 1460, 680)
  line(1455, 700, 1450, 690)
  line(1345, 700, 1350, 690)
  line(1330, 685, 1340, 680)
  beginShape()
  vertex(1340, 520)
  vertex(1350, 510)
  vertex(1450, 510)
  vertex(1460, 520)
  vertex(1460, 680)
  vertex(1450, 690)
  vertex(1350, 690)
  vertex(1340, 680)
  endShape(CLOSE)
  fill(40)
  rect(1325, 530, 5, 75)

//Screen
  fill(red, green, blue)
  strokeWeight(1)
  beginShape()
  vertex(1350, 525)
  vertex(1355, 520)
  vertex(1445, 520)
  vertex(1450, 525)
  vertex(1450, 585)
  vertex(1445, 590)
  vertex(1355, 590)
  vertex(1350, 585)
  endShape(CLOSE)

  fill(20)
  strokeWeight(0)
  rect(1357.5, 527.5, 85, 5)
  rect(1357.5, 537.5, 40, 5)
  rect(1357.5, 547.5, 20, 5)
  rect(1357.5, 557.5, 12.5, 5)
  rect(1357.5, 567.5, 7.5, 5)
  rect(1357.5, 577.5, 5, 5)

  textSize(20)
  text('141.12', 1375, 580)

  if(playTime < 12000){
    red = 50
    green = 60
    blue = 50
    fill(grad1)
  }

  if(playTime > 12000 && playTime < 43000){
    red = 20
    green = 20
    blue = 20
    fill(20)
  }

  if(playTime > 43000 && playTime < 48500){
    red = 50
    green = 60
    blue = 50
    fill(grad1)
  }

  if(playTime > 48500 && playTime < 80000){
    red = 20
    green = 20
    blue = 20
    fill(20)
  }

  if(playTime > 80000 && playTime < 83500){
    red = 50
    green = 60
    blue = 50
    fill(grad1)
  }

  if(playTime > 83500 && playTime < 106000){
    red = 20
    green = 20
    blue = 20
    fill(20)
  }

  if(playTime > 106000 && playTime < 120000){
    red = 50
    green = 60
    blue = 50
    fill(grad1)
  }

  if(playTime > 120000 && playTime < 176000){
    red = 20
    green = 20
    blue = 20
    fill(20)
  }

  if(playTime > 176000 && playTime < 204500){
    red = 50
    green = 60
    blue = 50
    fill(grad1)
  }

  if(playTime > 204500 && playTime < 224000){
    red = 20
    green = 20
    blue = 20
    fill(20)
  }

  if(playTime > 224000 && playTime < 239000){
    red = 50
    green = 60
    blue = 50
    fill(grad1)
  }

  if(playTime > 239000 && 268000){
    red = 20
    green = 20
    blue = 20
    fill(20)
  }

  if(playTime > 268000){
    screenstate = true
    a += 1
  }

//Radio Light
strokeWeight(1)
ellipse(1352.5, 605, 15, 15)

//Speaker
  fill(20)
  strokeWeight(1)
  rect(1365, 610, 70, 5)
  rect(1355, 620, 90, 5)
  rect(1350, 630, 100, 5)
  rect(1350, 640, 100, 5)
  rect(1350, 650, 100, 5)
  rect(1355, 660, 90, 5)
  rect(1365, 670, 70, 5)

//Black Screen
  push()
  fill(0, 0, 0, a)
  strokeWeight(0)
  rect(0, 0, width, height)
  fill(80, 80, 80, a)
  circle(width/2, height/2, 160)
  noFill()
  stroke(0, 0, 0, a)
  strokeWeight(10)
  arc(width/2, height/2, 100, 100, -45 , 225)
  line(800, 350, 800, 400)
  pop()
}

function screw(x, y, r){
  push()
  translate(x, y)
  angleMode(DEGREES)
  rotate(r)
  fill(50)
  strokeWeight(3)
  circle(0, 0, 20)
  strokeWeight(2)
  line(-3, -10, -3, 10)
  line(3, -10, 3, 10)
  pop()
}

function pumps(x, y){
  push()
  translate(x, y)
  strokeWeight(1)
  fill(80, 80, 100)
  ellipse(0, 0, 80, 80)
  strokeWeight(0)
  fill(70, 70, 90)
  ellipse(0, 0, 70, 70)
  fill(60, 60, 80)
  ellipse(0, 0, 60, 60)
  fill(50, 50, 70)
  ellipse(0, 0, 50, 50)
  fill(40, 40, 60)
  ellipse(0, 0, 40, 40)
  pop()
}

function leftpiston (x, y){
  push()
  translate(x, y)
  fill(30, 30, 60)
  strokeWeight(1)
  beginShape()
  vertex(80, 80)
  vertex(140, 80)
  vertex(560, 500)
  vertex(500, 500)
  endShape(CLOSE)
  pop()
}

function rightpiston (x, y){
  push()
  translate(x, y)
  fill(30, 30, 60)
  strokeWeight(1)
  beginShape()
  vertex(1280, 80)
  vertex(1220, 80)
  vertex(800, 500)
  vertex(860, 500)
  endShape(CLOSE)
  pop()
}
