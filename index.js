//Variables globales
let pantallaP = {
};
let prompt = {
};
let ronda = 0;

let rondaPantalla = "p1";

let rondaPrompt = "p1";

//Key handler 
const Action = {
  bRojo() { console.log("rojo"); rojoHandler();},
  bAmarillo() { console.log("amarillo"); amarilloHandler();},
  bAzul() { console.log("azul"); azulHandler();},
  bVerde() { console.log("verde"); verdeHandler();},
  bBlanco() { console.log("blanco"); ronda += 1; rondaHandler();},
};

const keyAction = {
  a: Action.bRojo,
  s: Action.bAmarillo,
  d: Action.bAzul,
  f: Action.bVerde,
  g: Action.bBlanco,
};

const keyHandler = (ev) => {
  if (ev.repeat) return;                             
  if (!(ev.key in keyAction)) return;
  keyAction[ev.key]();
};

document.addEventListener('keydown', keyHandler);

//Ronda handler
function rondaHandler(){
	switch(ronda){
		case 0:
		rondaPantalla = "p1";
		rondaPrompt = "p1";
		break;

		case 1:
		rondaPantalla = "p2";
		rondaPrompt = "p2";
		break;
	}
}

//Rojo handler
function rojoHandler(){
	switch(ronda){
		case 0:
		console.log("sfx")
		break;

		case 1:
		rondaPantalla = "p2.angry";
		break;
	}
}

//Amarillo handler
function amarilloHandler(){
	switch(ronda){
		case 0:
		console.log("sfx")
		break;

		case 1:
		rondaPantalla = "p2.happy";
		break;
	}
}

//Azul handler
function azulHandler(){
	switch(ronda){
		case 0:
		console.log("sfx")
		break;

		case 1:
		rondaPantalla = "p2.sad";
		break;
	}
}

//Verde handler
function verdeHandler(){
	switch(ronda){
		case 0:
		console.log("sfx")
		break;

		case 1:
		rondaPantalla = "p2.calm";
		break;
	}
}

//Processing
//
//
//

function setup() {
  background(41);
  createCanvas(windowWidth,windowHeight);
  
  //Ronda 1, 2 PantallaP
  pantallaP["p1"] = createVideo('media/ronda1.mp4');
  pantallaP["p1"].hide();
  pantallaP["p1"].volume(0);
  pantallaP["p1"].loop();

  pantallaP["p2"] = createVideo('media/neutral.mp4');
  pantallaP["p2"].hide();
  pantallaP["p2"].volume(0);
  pantallaP["p2"].loop();

  //Ronda 2 Emociones
  pantallaP["p2.angry"] = createVideo('media/emociones/Angry02.mp4');
  pantallaP["p2.angry"].hide();
  pantallaP["p2.angry"].volume(0);
  pantallaP["p2.angry"].loop();

  pantallaP["p2.happy"] = createVideo('media/emociones/Happy02.mp4');
  pantallaP["p2.happy"].hide();
  pantallaP["p2.happy"].volume(0);
  pantallaP["p2.happy"].loop();

  pantallaP["p2.sad"] = createVideo('media/emociones/Sad02.mp4');
  pantallaP["p2.sad"].hide();
  pantallaP["p2.sad"].volume(0);
  pantallaP["p2.sad"].loop();

  pantallaP["p2.calm"] = createVideo('media/emociones/Calm02.mp4');
  pantallaP["p2.calm"].hide();
  pantallaP["p2.calm"].volume(0);
  pantallaP["p2.calm"].loop();

  
  //Ronda 1, 2 Prompt
  prompt["p1"] = loadImage('media/prompt/prompt1.gif');
  prompt["p2"] = loadImage('media/prompt/prompt2.gif');
}

function draw() {
  noTint();
  fill(255);
  rect(0,0,windowWidth,windowHeight);
  //pantallaP
  image(pantallaP[rondaPantalla], 0, 0, windowWidth, windowHeight); 
  tint(255, 200);
  //mensaje
  image(prompt[rondaPrompt], 0, 0, windowWidth, windowHeight);
}

