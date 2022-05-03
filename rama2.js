let video;

let vScale = 12;

let fondo;

let stopper = false;

let checkX;
let checkY;

function setup() {
 createCanvas(window.innerWidth,window.innerHeight);
 pixelDensity(1);
 video = createCapture(VIDEO);
 video.size(window.innerWidth / vScale, window.innerHeight / vScale);
 video.hide();

 fondo = createVideo('media/Right/R_Neutral.mp4');
 fondo.hide();
 fondo.volume(0);
 fondo.loop();
}

function draw() {
  let mirrorChecker = localStorage.getItem('bool');

  let retroChecker = localStorage.getItem('retro');

  let mirrorColorR = localStorage.getItem('r');
  let mirrorColorG = localStorage.getItem('g');
  let mirrorColorB = localStorage.getItem('b');

  let xChecker = parseInt(localStorage.getItem('x'));
  let yChecker = parseInt(localStorage.getItem('y'));

  background(mirrorColorR,mirrorColorG,mirrorColorB);
  video.loadPixels();

  if(retroChecker === "true"){

  }

  if(retroChecker === "false"){
      if(mirrorChecker === "false"){
        if(stopper){
            checkX = xChecker;
            checkY = yChecker
            fondoColor();
            stopper = false;
        }

        //esto se podria quitar
        fill(255);
        rect(0,0,window.innerWidth,window.innerHeight);
        image(fondo, 0, 0, window.innerWidth,window.innerHeight);
      }

      if(mirrorChecker === "true"){
          stopper = true;
          for (var y = 0; y < video.height; y++) {
            for (var x = 0; x < video.width; x++) {
              var index = (video.width - x + 1 + (y * video.width)) * 4;
              var r = video.pixels[index + 0];
              var g = video.pixels[index + 1];
              var b = video.pixels[index + 2];
              var bright = (r + g + b) / 3;
              var w = map(bright, 0, 255, 0, vScale);
              noStroke();
              fill(255);
              rectMode(CENTER);
              rect(x * vScale, y * vScale, w, w);
            }
          }
      }
  }
  
}

function fondoColor(){
    switch(checkX){
        case -3:
        switch(checkY){
            case -3:
            fondo = createVideo('media/Right/R_Bloque3_3-3.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case -2:
            fondo = createVideo('media/Right/R_Bloque3_3-2.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case -1:
            fondo = createVideo('media/Right/R_Bloque3_3-1.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 0:
            fondo = createVideo('media/Right/R_Angry03.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 1:
            fondo = createVideo('media/Right/R_Bloque4_3-1.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 2:
            fondo = createVideo('media/Right/R_Bloque4_3-2.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 3:
            fondo = createVideo('media/Right/R_Bloque4_3-3.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;
        }
        break;

        case -2:
        switch(checkY){
            case -3:
            fondo = createVideo('media/Right/R_Bloque3_2-3.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case -2:
            fondo = createVideo('media/Right/R_Bloque3_2-2.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case -1:
            fondo = createVideo('media/Right/R_Bloque3_2-1.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 0:
            fondo = createVideo('media/Right/R_Angry02.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 1:
            fondo = createVideo('media/Right/R_Bloque4_2-1.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 2:
            fondo = createVideo('media/Right/R_Bloque4_2-2.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 3:
            fondo = createVideo('media/Right/R_Bloque4_2-3.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;
        }
        break;

        case -1:
        switch(checkY){
            case -3:
            fondo = createVideo('media/Right/R_Bloque3_1-3.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case -2:
            fondo = createVideo('media/Right/R_Bloque3_1-2.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case -1:
            fondo = createVideo('media/Right/R_Bloque3_1-1.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 0:
            fondo = createVideo('media/Right/R_Angry01.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 1:
            fondo = createVideo('media/Right/R_Bloque4_1-1.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 2:
            fondo = createVideo('media/Right/R_Bloque4_1-2.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 3:
            fondo = createVideo('media/Right/R_Bloque4_1-3.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;
        }
        break;

        case 0:
        switch(checkY){
            case -3:
            fondo = createVideo('media/Right/R_Sad01.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case -2:
            fondo = createVideo('media/Right/R_Sad02.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case -1:
            fondo = createVideo('media/Right/R_Sad03.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            //NEUTRAL
            case 0:
            fondo = createVideo('media/Right/R_Neutral.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 1:
            fondo = createVideo('media/Right/R_Happy01.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 2:
            fondo = createVideo('media/Right/R_Happy02.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 3:
            fondo = createVideo('media/Right/R_Happy03.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;
        }
        break;

        case 1:
        switch(checkY){
            case -3:
            fondo = createVideo('media/Right/R_Bloque4_1-3.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case -2:
            fondo = createVideo('media/Right/R_Bloque4_1-2.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case -1:
            fondo = createVideo('media/Right/R_Bloque4_1-1.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 0:
            fondo = createVideo('media/Right/R_Calm01.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 1:
            fondo = createVideo('media/Right/R_Bloque1_1-1.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 2:
            fondo = createVideo('media/Right/R_Bloque1_1-2.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 3:
            fondo = createVideo('media/Right/R_Bloque1_1-3.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;
        }
        break;

        case 2:
        switch(checkY){
            case -3:
            fondo = createVideo('media/Right/R_Bloque4_2-3.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case -2:
            fondo = createVideo('media/Right/R_Bloque4_2-2.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case -1:
            fondo = createVideo('media/Right/R_Bloque4_2-1.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 0:
            fondo = createVideo('media/Right/R_Calm02.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 1:
            fondo = createVideo('media/Right/R_Bloque1_2-1.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 2:
            fondo = createVideo('media/Right/R_Bloque1_2-2.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 3:
            fondo = createVideo('media/Right/R_Bloque1_2-3.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;
        }
        break;

        case 3:
        switch(checkY){
            case -3:
            fondo = createVideo('media/Right/R_Bloque4_3-3.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case -2:
            fondo = createVideo('media/Right/R_Bloque4_3-2.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case -1:
            fondo = createVideo('media/Right/R_Bloque4_3-1.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 0:
            fondo = createVideo('media/Right/R_Calm03.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 1:
            fondo = createVideo('media/Right/R_Bloque1_3-1.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 2:
            fondo = createVideo('media/Right/R_Bloque1_3-2.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;

            case 3:
            fondo = createVideo('media/Right/R_Bloque1_3-3.mp4');
            fondo.hide();
            fondo.volume(0);
            fondo.loop();
            break;
        }
        break;
    }
}