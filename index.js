//local storage
localStorage.setItem('r', '0');
localStorage.setItem('g', '0');
localStorage.setItem('b', '0');
localStorage.setItem('bool', 'false');

//d3
function estirar1(){
intensidadChecker = "check";
d3.select("#grupod3")
  .transition()
  .ease(d3.easeCubicInOut)
  .duration(500)
  .attr("style", "opacity: 0.5;")
  .transition()
  .duration(1000)
  .attr("style", "opacity: 0.5;")
  .transition()
  .duration(500)
  .attr("style", "opacity: 0;");

d3.select("#my_rect_frente")
  .transition()
  .ease(d3.easeCubicInOut)
  .duration(1000)
  .attr("style", "filter: saturate(1);")
  .attr("width", "161.6");
}

function estirar2(){
intensidadChecker = "check";
d3.select("#grupod3")
  .transition()
  .ease(d3.easeCubicInOut)
  .duration(500)
  .attr("style", "opacity: 0.5;")
  .transition()
  .duration(1000)
  .attr("style", "opacity: 0.5;")
  .transition()
  .duration(500)
  .attr("style", "opacity: 0;");

d3.select("#my_rect_frente")
  .transition()
  .ease(d3.easeCubicInOut)
  .duration(1000)
  .attr("style", "filter: saturate(2);")
  .attr("width", "323.3");
}

function estirar3(){
intensidadChecker = "check";
d3.select("#grupod3")
  .transition()
  .ease(d3.easeCubicInOut)
  .duration(500)
  .attr("style", "opacity: 0.5;")
  .transition()
  .duration(1000)
  .attr("style", "opacity: 0.5;")
  .transition()
  .duration(500)
  .attr("style", "opacity: 0;");

d3.select("#my_rect_frente")
  .transition()
  .ease(d3.easeCubicInOut)
  .duration(1000)
  .attr("style", "filter: saturate(3);")
  .attr("width", "485");
}

//Variables globales
let pantallaP = {
};
let prompt = {
};
let ronda = 0;

let rondaPantalla = "p1";

let rondaPrompt = "p1";

let rondaPrompt2 = "p5";

let emotionChecker = "na";

let intensidadChecker = "na";

let tiempoChecker = "na";

let emojiNumber = 15;

let tiempoPregunta = 3000;

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
		rondaPantalla = "p1";
		rondaPrompt = "p2";
		setTimeout(()=>{rondaPrompt = "p2.5";}, tiempoPregunta);
		localStorage.setItem('bool', 'true');
		break;

		case 2:
		if(emotionChecker==="na"){
		ronda -= 1;
		}
		if(!(emotionChecker==="na")){
		rondaPrompt = "p3";
		setTimeout(()=>{rondaPrompt = "p3.5";}, tiempoPregunta);
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
		}
		}
		break;

		case 3:
		if(intensidadChecker==="na"){
		ronda -= 1;
		}
		if(!(intensidadChecker==="na")){
		rondaPrompt = "p4";
		setTimeout(()=>{rondaPrompt = "p4.5";}, tiempoPregunta);
		}
		break;

		case 4:
		if(tiempoChecker === "na"){
			ronda -= 1;
		}
		if(!(tiempoChecker === "na")){
			document.getElementById("contenedor2").setAttribute("style", "visibility : visible;");
			setTimeout(()=>{rondaPrompt2 = "p5.5";}, tiempoPregunta);
		}
		break;
	}
}

//Rojo handler
function rojoHandler(){
	switch(ronda){
		case 0:
		console.log("sfx");
		break;

		case 1:
		rondaPantalla = "p2.angry2";
		emotionChecker = "angry";
		localStorage.setItem('r', '241');
		localStorage.setItem('g', '203');
		localStorage.setItem('b', '196');
		document.getElementById("my_rect_frente").setAttribute("fill", "#ffb6af");
		//emoji
		emojisplosion({
		emojiCount: emojiNumber,
		emojis: ["😡"],
		container: document.getElementById("emojis"),
		className: "angry",
		position: {
		x: innerWidth*(1/4),
		y: innerHeight/2,
		},
		});
		emojisplosion({
		emojiCount: emojiNumber,
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
		localStorage.setItem('r', '0');
		localStorage.setItem('g', '0');
		localStorage.setItem('b', '0');
		emotionChecker = "na";
		intensidadChecker = "na";
		document.getElementById("my_rect_frente").setAttribute("width", "0");
		rondaHandler();
		break;

		case 3:
		ronda -= 1;
		intensidadChecker = "na";
		tiempoChecker = "na";
		switch(emotionChecker){
				case "angry":
				localStorage.setItem('r', '241');
				localStorage.setItem('g', '203');
				localStorage.setItem('b', '196');
				break;
				case "happy":
				localStorage.setItem('r', '243');
				localStorage.setItem('g', '238');
				localStorage.setItem('b', '198');
				break;
				case "sad":
				localStorage.setItem('r', '197');
				localStorage.setItem('g', '223');
				localStorage.setItem('b', '242');
				break;
				case "calm": 
				localStorage.setItem('r', '205');
				localStorage.setItem('g', '242');
				localStorage.setItem('b', '195');
				break;
		};
		document.getElementById("my_rect_frente").setAttribute("width", "0");
		rondaHandler();
		break;
	}
}

//Amarillo handler
function amarilloHandler(){
	switch(ronda){
		case 0:
		console.log("sfx");
		break;

		case 1:
		rondaPantalla = "p2.happy2";
		emotionChecker = "happy";
		localStorage.setItem('r', '243');
		localStorage.setItem('g', '238');
		localStorage.setItem('b', '198');
		document.getElementById("my_rect_frente").setAttribute("fill", "#f4f1bb");
		//emoji
		emojisplosion({
		emojiCount: emojiNumber,
		emojis: ["😃"],
		container: document.getElementById("emojis"),
		className: "happy",
		position: {
		x: innerWidth*(1/4),
		y: innerHeight/2,
		},
		});
		emojisplosion({
		emojiCount: emojiNumber,
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
		estirar1();
			switch(emotionChecker){
				case "angry":
				rondaPantalla = "p2.angry1";
				localStorage.setItem('r', '245');
				localStorage.setItem('g', '214');
				localStorage.setItem('b', '192');
				break;
				case "happy":
				rondaPantalla = "p2.happy1";
				localStorage.setItem('r', '246');
				localStorage.setItem('g', '244');
				localStorage.setItem('b', '217');
				break;
				case "sad":
				rondaPantalla = "p2.sad1";
				localStorage.setItem('r', '213');
				localStorage.setItem('g', '231');
				localStorage.setItem('b', '245');
				break;
				case "calm": 
				rondaPantalla = "p2.calm1";
				localStorage.setItem('r', '218');
				localStorage.setItem('g', '244');
				localStorage.setItem('b', '209');
				break;
			}
		}
		break;

		case 3:
		tiempoChecker = "check";
		break;
	}
}

//Azul handler
function azulHandler(){
	switch(ronda){
		case 0:
		console.log("sfx");
		break;

		case 1:
		rondaPantalla = "p2.sad2";
		emotionChecker = "sad";
		localStorage.setItem('r', '197');
		localStorage.setItem('g', '223');
		localStorage.setItem('b', '242');
		document.getElementById("my_rect_frente").setAttribute("fill", "#b2e2f2");
		//emoji
		emojisplosion({
		emojiCount: emojiNumber,
		emojis: ["🙁"],
		container: document.getElementById("emojis"),
		className: "sad",
		position: {
		x: innerWidth*(1/4),
		y: innerHeight/2,
		},
		});
		emojisplosion({
		emojiCount: emojiNumber,
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
		estirar2();
			switch(emotionChecker){
				case "angry":
				rondaPantalla = "p2.angry2";
				localStorage.setItem('r', '241');
				localStorage.setItem('g', '203');
				localStorage.setItem('b', '196');
				break;
				case "happy":
				rondaPantalla = "p2.happy2";
				localStorage.setItem('r', '243');
				localStorage.setItem('g', '238');
				localStorage.setItem('b', '198');
				break;
				case "sad":
				rondaPantalla = "p2.sad2";
				localStorage.setItem('r', '197');
				localStorage.setItem('g', '223');
				localStorage.setItem('b', '242');
				break;
				case "calm": 
				rondaPantalla = "p2.calm2";
				localStorage.setItem('r', '205');
				localStorage.setItem('g', '242');
				localStorage.setItem('b', '195');
				break;
			};
		}
		break;

		case 3:
		tiempoChecker = "check";
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
		localStorage.setItem('r', '205');
		localStorage.setItem('g', '242');
		localStorage.setItem('b', '195');
		document.getElementById("my_rect_frente").setAttribute("fill", "#b0f2c2");
		//emoji
		emojisplosion({
		emojiCount: emojiNumber,
		emojis: ["👌"],
		container: document.getElementById("emojis"),
		className: "calm",
		position: {
		x: innerWidth*(1/4),
		y: innerHeight/2,
		},
		});
		emojisplosion({
		emojiCount: emojiNumber,
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
		estirar3();
			switch(emotionChecker){
				case "angry":
				rondaPantalla = "p2.angry3";
				localStorage.setItem('r', '251');
				localStorage.setItem('g', '198');
				localStorage.setItem('b', '187');
				break;
				case "happy":
				rondaPantalla = "p2.happy3";
				localStorage.setItem('r', '239');
				localStorage.setItem('g', '233');
				localStorage.setItem('b', '182');
				break;
				case "sad":
				rondaPantalla = "p2.sad3";
				localStorage.setItem('r', '181');
				localStorage.setItem('g', '218');
				localStorage.setItem('b', '239');
				break;
				case "calm": 
				rondaPantalla = "p2.calm3";
				localStorage.setItem('r', '195');
				localStorage.setItem('g', '239');
				localStorage.setItem('b', '181');
				break;
			}
		};
		break;

		case 3:
		tiempoChecker = "check";
		break;
	}
}

//Processing
//
//
//

const s = p => {
	p.setup = function(){
		p.createCanvas(window.innerWidth,window.innerHeight);

		  //Ronda 1, 2 PantallaP
		  pantallaP["p1"] = p.createVideo('media/neutral.mp4');
		  pantallaP["p1"].hide();
		  pantallaP["p1"].volume(0);
		  pantallaP["p1"].loop();

		  //Ronda 2 Emociones
		  //intensidad 2
		  pantallaP["p2.angry2"] = p.createVideo('media/emociones/Angry02.mp4');
		  pantallaP["p2.angry2"].hide();
		  pantallaP["p2.angry2"].volume(0);
		  pantallaP["p2.angry2"].loop();

		  pantallaP["p2.happy2"] = p.createVideo('media/emociones/Happy02.mp4');
		  pantallaP["p2.happy2"].hide();
		  pantallaP["p2.happy2"].volume(0);
		  pantallaP["p2.happy2"].loop();

		  pantallaP["p2.sad2"] = p.createVideo('media/emociones/Sad02.mp4');
		  pantallaP["p2.sad2"].hide();
		  pantallaP["p2.sad2"].volume(0);
		  pantallaP["p2.sad2"].loop();

		  pantallaP["p2.calm2"] = p.createVideo('media/emociones/Calm02.mp4');
		  pantallaP["p2.calm2"].hide();
		  pantallaP["p2.calm2"].volume(0);
		  pantallaP["p2.calm2"].loop();

		  //Ronda 3 intensidad
		  //intesidad 1
		  pantallaP["p2.angry1"] = p.createVideo('media/emociones/Angry01.mp4');
		  pantallaP["p2.angry1"].hide();
		  pantallaP["p2.angry1"].volume(0);
		  pantallaP["p2.angry1"].loop();

		  pantallaP["p2.happy1"] = p.createVideo('media/emociones/Happy01.mp4');
		  pantallaP["p2.happy1"].hide();
		  pantallaP["p2.happy1"].volume(0);
		  pantallaP["p2.happy1"].loop();

		  pantallaP["p2.sad1"] = p.createVideo('media/emociones/Sad01.mp4');
		  pantallaP["p2.sad1"].hide();
		  pantallaP["p2.sad1"].volume(0);
		  pantallaP["p2.sad1"].loop();

		  pantallaP["p2.calm1"] = p.createVideo('media/emociones/Calm01.mp4');
		  pantallaP["p2.calm1"].hide();
		  pantallaP["p2.calm1"].volume(0);
		  pantallaP["p2.calm1"].loop();

		  //intensidad 3
		  pantallaP["p2.angry3"] = p.createVideo('media/emociones/Angry03.mp4');
		  pantallaP["p2.angry3"].hide();
		  pantallaP["p2.angry3"].volume(0);
		  pantallaP["p2.angry3"].loop();

		  pantallaP["p2.happy3"] = p.createVideo('media/emociones/Happy03.mp4');
		  pantallaP["p2.happy3"].hide();
		  pantallaP["p2.happy3"].volume(0);
		  pantallaP["p2.happy3"].loop();

		  pantallaP["p2.sad3"] = p.createVideo('media/emociones/Sad03.mp4');
		  pantallaP["p2.sad3"].hide();
		  pantallaP["p2.sad3"].volume(0);
		  pantallaP["p2.sad3"].loop();

		  pantallaP["p2.calm3"] = p.createVideo('media/emociones/Calm03.mp4');
		  pantallaP["p2.calm3"].hide();
		  pantallaP["p2.calm3"].volume(0);
		  pantallaP["p2.calm3"].loop();

  
		  //Ronda 1, 2 Prompt
		  prompt["p1"] = p.loadImage('media/prompt/prompt1.gif');
		  prompt["p2"] = p.loadImage('media/prompt/prompt2.gif');
		  prompt["p2.5"] = p.loadImage('media/prompt/prompt2.5.gif');
		  prompt["p3"] = p.loadImage('media/prompt/prompt3.gif');
		  prompt["p3.5"] = p.loadImage('media/prompt/prompt3.5.gif');
		  prompt["p4"] = p.loadImage('media/prompt/prompt4.gif');
		  prompt["p4.5"] = p.loadImage('media/prompt/prompt4.5.gif');
     }
	 p.draw = function(){
	  p.noTint();
	  p.fill(255);
	  p.rect(0,0,window.innerWidth,window.innerHeight);
	  //pantallaP
	  p.image(pantallaP[rondaPantalla], 0, 0, window.innerWidth,window.innerHeight); 
	  p.tint(255, 200);
	  //mensaje
	  p.image(prompt[rondaPrompt], 0, 0, window.innerWidth,window.innerHeight);
	 }
}

new p5(s, "contenedor");

const s2 = p => {
	let video;
	let vScale = 12;
	p.setup = function(){
		p.createCanvas(window.innerWidth,window.innerHeight);
		p.pixelDensity(1);
		video = p.createCapture(p.VIDEO);
		video.size(window.innerWidth / vScale, window.innerHeight / vScale);
		video.hide();
		prompt["p5"] = p.loadImage('media/prompt/prompt5.gif');
		prompt["p5.5"] = p.loadImage('media/prompt/prompt5.5.gif');
	}
	p.draw = function(){
		p.background(parseInt(localStorage.getItem('r')),parseInt(localStorage.getItem('g')),parseInt(localStorage.getItem('b')));
		video.loadPixels();
		for (var y = 0; y < video.height; y++) {
		for (var x = 0; x < video.width; x++) {
			var index = (video.width - x + 1 + (y * video.width)) * 4;
			var r = video.pixels[index + 0];
			var g = video.pixels[index + 1];
			var b = video.pixels[index + 2];
			var bright = (r + g + b) / 3;
			var w = p.map(bright, 0, 255, 0, vScale);
			p.noStroke();
			p.fill(255);
			p.rectMode(p.CENTER);
			p.rect(x * vScale, y * vScale, w, w);
		}
	    }
		p.image(prompt[rondaPrompt2], 0, 0, window.innerWidth,window.innerHeight);
	}
}

new p5(s2, "contenedor2");


