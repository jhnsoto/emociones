//Variables globales
let pantallaP = {
};
let prompt = {
};
let ronda = 0;

let rondaPantalla = "p1";

let rondaPrompt = "p1";

let emotionChecker = "na";

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

		case 2:
		if(emotionChecker==="na"){
		ronda -= 1;
		}else{
		rondaPrompt = "p3";
		};
		break;

		case 3:
		rondaPrompt = "p4";
		break;

		case 4:
		rondaPrompt = "p5";
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
		rondaPantalla = "p2.angry2";
		emotionChecker = "angry";
		//emoji
		emojisplosion({
		emojiCount: 15,
		emojis: ["😡"],
		container: document.getElementById("emojis"),
		className: "angry",
		position: {
		x: innerWidth*(1/4),
		y: innerHeight/2,
		},
		});
		emojisplosion({
		emojiCount: 15,
		emojis: ["😡"],
		container: document.getElementById("emojis"),
		className: "angry",
		position: {
		x: innerWidth*(3/4),
		y: innerHeight/2,
		},
		});
		break;

		case 2:
		ronda -= 1;
		emotionChecker = "na";
		rondaHandler();
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
		rondaPantalla = "p2.happy2";
		emotionChecker = "happy";
		//emoji
		emojisplosion({
		emojiCount: 15,
		emojis: ["😃"],
		container: document.getElementById("emojis"),
		className: "happy",
		position: {
		x: innerWidth*(1/4),
		y: innerHeight/2,
		},
		});
		emojisplosion({
		emojiCount: 15,
		emojis: ["😃"],
		container: document.getElementById("emojis"),
		className: "happy",
		position: {
		x: innerWidth*(3/4),
		y: innerHeight/2,
		},
		});
		break;

		case 2:{
			switch(emotionChecker){
				case "angry":
				rondaPantalla = "p2.angry1";
				break;
				case "happy":
				rondaPantalla = "p2.happy1";
				break;
				case "sad":
				rondaPantalla = "p2.sad1";
				break;
				case "calm": 
				rondaPantalla = "p2.calm1";
				break;
			}
		}
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
		rondaPantalla = "p2.sad2";
		emotionChecker = "sad";
		//emoji
		emojisplosion({
		emojiCount: 15,
		emojis: ["🙁"],
		container: document.getElementById("emojis"),
		className: "sad",
		position: {
		x: innerWidth*(1/4),
		y: innerHeight/2,
		},
		});
		emojisplosion({
		emojiCount: 15,
		emojis: ["🙁"],
		container: document.getElementById("emojis"),
		className: "sad",
		position: {
		x: innerWidth*(3/4),
		y: innerHeight/2,
		},
		});
		break;

		case 2:{
			switch(emotionChecker){
				case "angry":
				rondaPantalla = "p2.angry2";
				break;
				case "happy":
				rondaPantalla = "p2.happy2";
				break;
				case "sad":
				rondaPantalla = "p2.sad2";
				break;
				case "calm": 
				rondaPantalla = "p2.calm2";
				break;
			};
		}
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
		rondaPantalla = "p2.calm2";
		emotionChecker = "calm";
		//emoji
		emojisplosion({
		emojiCount: 15,
		emojis: ["👌"],
		container: document.getElementById("emojis"),
		className: "calm",
		position: {
		x: innerWidth*(1/4),
		y: innerHeight/2,
		},
		});
		emojisplosion({
		emojiCount: 15,
		emojis: ["👌"],
		container: document.getElementById("emojis"),
		className: "calm",
		position: {
		x: innerWidth*(3/4),
		y: innerHeight/2,
		},
		});
		break;

		case 2:{
			switch(emotionChecker){
				case "angry":
				rondaPantalla = "p2.angry3";
				break;
				case "happy":
				rondaPantalla = "p2.happy3";
				break;
				case "sad":
				rondaPantalla = "p2.sad3";
				break;
				case "calm": 
				rondaPantalla = "p2.calm3";
				break;
			}
		};
		break;
	}
}

//Processing
//
//
//

function setup() {
  let cnv = createCanvas(windowWidth,windowHeight);
  cnv.id("canvas");
  cnv.parent("contenedor");
  background(41);

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
  //intensidad 2
  pantallaP["p2.angry2"] = createVideo('media/emociones/Angry02.mp4');
  pantallaP["p2.angry2"].hide();
  pantallaP["p2.angry2"].volume(0);
  pantallaP["p2.angry2"].loop();

  pantallaP["p2.happy2"] = createVideo('media/emociones/Happy02.mp4');
  pantallaP["p2.happy2"].hide();
  pantallaP["p2.happy2"].volume(0);
  pantallaP["p2.happy2"].loop();

  pantallaP["p2.sad2"] = createVideo('media/emociones/Sad02.mp4');
  pantallaP["p2.sad2"].hide();
  pantallaP["p2.sad2"].volume(0);
  pantallaP["p2.sad2"].loop();

  pantallaP["p2.calm2"] = createVideo('media/emociones/Calm02.mp4');
  pantallaP["p2.calm2"].hide();
  pantallaP["p2.calm2"].volume(0);
  pantallaP["p2.calm2"].loop();

  //Ronda 3 intensidad
  //intesidad 1
  pantallaP["p2.angry1"] = createVideo('media/emociones/Angry01.mp4');
  pantallaP["p2.angry1"].hide();
  pantallaP["p2.angry1"].volume(0);
  pantallaP["p2.angry1"].loop();

  pantallaP["p2.happy1"] = createVideo('media/emociones/Happy01.mp4');
  pantallaP["p2.happy1"].hide();
  pantallaP["p2.happy1"].volume(0);
  pantallaP["p2.happy1"].loop();

  pantallaP["p2.sad1"] = createVideo('media/emociones/Sad01.mp4');
  pantallaP["p2.sad1"].hide();
  pantallaP["p2.sad1"].volume(0);
  pantallaP["p2.sad1"].loop();

  pantallaP["p2.calm1"] = createVideo('media/emociones/Calm01.mp4');
  pantallaP["p2.calm1"].hide();
  pantallaP["p2.calm1"].volume(0);
  pantallaP["p2.calm1"].loop();

  //intensidad 3
  pantallaP["p2.angry3"] = createVideo('media/emociones/Angry03.mp4');
  pantallaP["p2.angry3"].hide();
  pantallaP["p2.angry3"].volume(0);
  pantallaP["p2.angry3"].loop();

  pantallaP["p2.happy3"] = createVideo('media/emociones/Happy03.mp4');
  pantallaP["p2.happy3"].hide();
  pantallaP["p2.happy3"].volume(0);
  pantallaP["p2.happy3"].loop();

  pantallaP["p2.sad3"] = createVideo('media/emociones/Sad03.mp4');
  pantallaP["p2.sad3"].hide();
  pantallaP["p2.sad3"].volume(0);
  pantallaP["p2.sad3"].loop();

  pantallaP["p2.calm3"] = createVideo('media/emociones/Calm03.mp4');
  pantallaP["p2.calm3"].hide();
  pantallaP["p2.calm3"].volume(0);
  pantallaP["p2.calm3"].loop();

  
  //Ronda 1, 2 Prompt
  prompt["p1"] = loadImage('media/prompt/prompt1.gif');
  prompt["p2"] = loadImage('media/prompt/prompt2.gif');
  prompt["p3"] = loadImage('media/prompt/prompt3.gif');
  prompt["p4"] = loadImage('media/prompt/prompt4.gif');
  prompt["p5"] = loadImage('media/prompt/prompt5.gif');
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

