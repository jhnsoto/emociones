let video;

let vScale = 12;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(window.innerWidth / vScale, window.innerHeight / vScale);
  video.hide();
}

function draw() {
  let mirrorChecker = localStorage.getItem('bool');
  background(51);
  video.loadPixels();
  if(mirrorChecker === "true"){
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
