//local storage
localStorage.setItem('r', '0');
localStorage.setItem('g', '0');
localStorage.setItem('b', '0');
localStorage.setItem('bool', 'false');
localStorage.setItem('retro', 'false');
localStorage.setItem('x', "0");
localStorage.setItem('y', "0");

//d3 reloj
function pocoTiempo(){
d3.select("#granopoco").attr("cy", "350px");
d3.select("#granopoco2").attr("cy", "350px");
d3.select("#relojpoco")
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

d3.select("#relojpoco2")
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

d3.select("#granopoco")
  .transition()
  .ease(d3.easeCubicInOut)
  .duration(1000)
  .attr("cy", "750px");

d3.select("#granopoco2")
  .transition()
  .ease(d3.easeCubicInOut)
  .duration(1000)
  .attr("cy", "750px");
}

function muchoTiempo(){
d3.select("#granopoco3").attr("cy", "350px");
d3.select("#granopoco4").attr("cy", "350px");
d3.select("#relojmucho")
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

d3.select("#relojmucho2")
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

d3.select("#granopoco3")
  .transition()
  .ease(d3.easeCubicInOut)
  .duration(1000)
  .attr("cy", "750px");

d3.select("#granopoco4")
  .transition()
  .ease(d3.easeCubicInOut)
  .duration(1000)
  .attr("cy", "750px");
}

//d3 barra
function estirar1(){
intensidadChecker = "checkUno";
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
intensidadChecker = "checkDos";
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
intensidadChecker = "checkTres";
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

let audio = new Audio('boton.mp3');
let audio2 = new Audio('regreso.mp3');
let audio3 = new Audio('error.mp3');
let audio4 = new Audio('next.mp3');
let audio5 = new Audio('back.mp3');



let doit = false;
let alpha = 255;
let pantallaP = {
};
let prompt = {
};
let ronda = 0;

let rondaPantalla = "p0";

let rondaPrompt = "p1";

let rondaPrompt2 = "p5";

let emotionChecker = "na";

let intensidadChecker = "na";

let tiempoChecker = "na";

let emojiNumber = 7;

let tiempoPregunta = 2000;

let relojes = ["base", "arena", "base2", "arena2", "base3", "arena3", "base4", "arena4"];

//reseteo

//si avanzar deber detener el timer al que avanzare

function reset(){
ronda = 0;
rondaPantalla = "p0";
rondaPrompt = "p1";
rondaPrompt2 = "p5";

emotionChecker = "na";
intensidadChecker = "na";
tiempoChecker = "na";

localStorage.setItem('r', '0');
localStorage.setItem('g', '0');
localStorage.setItem('b', '0');
localStorage.setItem('retro', 'false');

alpha = 255;

document.getElementById("my_rect_frente").setAttribute("width", "0");

rondaHandler();
}

//Mapeo

let cuentaPersonas = 0;

let cuentaAngry = 0;
let cuentaHappy = 0;
let cuentaSad = 0;
let cuentaCalm = 0;

let cuentaAngryMap = 0;
let cuentaHappyMap = 0;
let cuentaSadMap = 0;
let cuentaCalmMap = 0;

let cuentaX = 0;
let cuentaY = 0;

function map_range(value, high1) {
 return Math.ceil(value/high1);
}

let mapping = 'media/neutral.mp4';

//expresiones de funcion
let prompt55;

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
		rondaPantalla = "p0";
		rondaPrompt = "p1";
		audio4.play();
		break;

		case 1:
		audio4.play();
		rondaPantalla = "p1";
		rondaPrompt = "p2";
		localStorage.setItem('bool', 'true');
		break;

		case 2:
		audio4.play();
		if(emotionChecker==="na"){
		ronda -= 1;
		audio3.play();
		}
		if(!(emotionChecker==="na")){
		audio4.play();
		rondaPrompt = "p3";
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
		audio4.play();
		if(intensidadChecker==="na"){
		audio3.play();
		ronda -= 1;
		}
		if(!(intensidadChecker==="na")){
		audio4.play();
		rondaPrompt = "p4";
		}
		break;

		case 4:
		
		if(tiempoChecker === "na"){
		audio3.play();
			ronda -= 1;
		}
		if(!(tiempoChecker === "na")){
			audio4.play();
			document.getElementById("contenedor2").setAttribute("style", "visibility : visible;");
			prompt55 = setTimeout(()=>{rondaPrompt2 = "p5.5";}, 4000);
		}
		break;

		case 5:
		audio4.play();
		clearTimeout(prompt55);
		document.getElementById("contenedor2").setAttribute("style", "visibility : hidden;");
		alpha = 0;
		localStorage.setItem('retro', 'true');
		localStorage.setItem('bool', 'false');
		localStorage.setItem('r',"255");
		localStorage.setItem('g',"255");
		localStorage.setItem('b',"255");

		//escoger retro 
		if(tiempoChecker === "checkPoco" || tiempoChecker === "checkDuda"){
			rondaPrompt = "p6";
		}
		if(tiempoChecker === "checkMucho"){
			if(emotionChecker === "angry" || emotionChecker === "sad"){
				rondaPrompt = "p7";
			}
			if(emotionChecker === "happy" || emotionChecker === "calm"){
				rondaPrompt = "p8";
			}
		}
	
		reinicio = setTimeout(reset, 7000);

		cuentaPersonas += 1;
		switch (emotionChecker){
			case "angry":
			switch (intensidadChecker){
				case "checkUno":
				cuentaAngry += 1;
				break;

				case "checkDos":
				cuentaAngry += 2;
				break;

				case "checkTres":
				cuentaAngry += 3;
				break;
			};
			break;

			case "happy":
			switch (intensidadChecker){
				case "checkUno":
				cuentaHappy += 1;
				break;

				case "checkDos":
				cuentaHappy += 2;
				break;

				case "checkTres":
				cuentaHappy += 3;
				break;
			}
			break;

			case "sad":
			switch (intensidadChecker){
				case "checkUno":
				cuentaSad += 1;
				break;

				case "checkDos":
				cuentaSad += 2;
				break;

				case "checkTres":
				cuentaSad += 3;
				break;
			}
			break;

			case "calm":
			switch (intensidadChecker){
				case "checkUno":
				cuentaCalm += 1;
				break;

				case "checkDos":
				cuentaCalm += 2;
				break;

				case "checkTres":
				cuentaCalm += 3;
				break;
			}
			break;
		};
		cuentaAngryMap = map_range(cuentaAngry,cuentaPersonas);
		cuentaHappyMap = map_range(cuentaHappy,cuentaPersonas);
		cuentaSadMap = map_range(cuentaSad,cuentaPersonas);
		cuentaCalmMap = map_range(cuentaCalm,cuentaPersonas);
		cuentaX = cuentaCalmMap - cuentaAngryMap;
		cuentaY = cuentaHappyMap - cuentaSadMap;
		localStorage.setItem('x', cuentaX.toString());
		localStorage.setItem('y', cuentaY.toString());
		
		//DEBUG
		console.log("personas " + cuentaPersonas);

		console.log("enojados " + cuentaAngry);
		console.log("felices " + cuentaHappy);
		console.log("tristes " + cuentaSad);
		console.log("calmados " + cuentaCalm);

		console.log("remap enojados " + cuentaAngryMap);
		console.log("remap felices " + cuentaHappyMap);
		console.log("remap tristes " + cuentaSadMap);
		console.log("remap calmados " + cuentaCalmMap);

		console.log("x " + cuentaX);
		console.log("y " + cuentaY);
		console.log(localStorage.getItem("x"));
		console.log(localStorage.getItem("y"));
		doit = true;
		break;
	}
}

//Rojo handler
function rojoHandler(){
	switch(ronda){
		case 0:
		audio3.play();
		console.log("sfx");
		break;

		case 1:
		audio.play();
		rondaPantalla = "p2.angry2";
		emotionChecker = "angry";
		localStorage.setItem('r', '241');
		localStorage.setItem('g', '203');
		localStorage.setItem('b', '196');
		document.getElementById("my_rect_frente").setAttribute("fill", "#ffb6af"); 
		//emoji
		emojisplosion({
		physics:{
			initialVelocities: {
				rotation: {
					max: 7,
					min: -7,
				},
				x: {
					max: 3,
					min: -3,
				},
				y: {
					max: 0,
					min: -6,
				},
			},
		},
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
		physics:{
			initialVelocities: {
				rotation: {
					max: 7,
					min: -7,
				},
				x: {
					max: 3,
					min: -3,
				},
				y: {
					max: 0,
					min: -6,
				},
			},
		},
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
		audio5.play();
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
		audio5.play();
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

		case 4:
		audio4.play();
		ronda += 1;
		rondaHandler();
		break;
	}
}

//Amarillo handler
function amarilloHandler(){
	switch(ronda){
		case 0:
		console.log("sfx");
		audio3.play();
		break;

		case 1:
		audio.play();
		rondaPantalla = "p2.happy2";
		emotionChecker = "happy";
		localStorage.setItem('r', '243');
		localStorage.setItem('g', '238');
		localStorage.setItem('b', '198');
		document.getElementById("my_rect_frente").setAttribute("fill", "#f4f1bb");
		//emoji
		emojisplosion({
		physics:{
			initialVelocities: {
				rotation: {
					max: 7,
					min: -7,
				},
				x: {
					max: 3,
					min: -3,
				},
				y: {
					max: 0,
					min: -6,
				},
			},
		},
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
		physics:{
			initialVelocities: {
				rotation: {
					max: 7,
					min: -7,
				},
				x: {
					max: 3,
					min: -3,
				},
				y: {
					max: 0,
					min: -6,
				},
			},
		},
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

		case 2:
		audio.play();
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
		break;

		case 3:
		audio.play();
		pocoTiempo();
		tiempoChecker = "checkPoco";
		break;

		case 4:
		audio4.play();
		ronda += 1;
		rondaHandler();
		break;
	}
}

//Azul handler
function azulHandler(){
	switch(ronda){
		case 0:
		audio3.play();
		console.log("sfx");
		break;

		case 1:
		audio.play();
		rondaPantalla = "p2.sad2";
		emotionChecker = "sad";
		localStorage.setItem('r', '197');
		localStorage.setItem('g', '223');
		localStorage.setItem('b', '242');
		document.getElementById("my_rect_frente").setAttribute("fill", "#b2e2f2");
		//emoji
		emojisplosion({
		physics:{
			initialVelocities: {
				rotation: {
					max: 7,
					min: -7,
				},
				x: {
					max: 3,
					min: -3,
				},
				y: {
					max: 0,
					min: -6,
				},
			},
		},
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
		physics:{
			initialVelocities: {
				rotation: {
					max: 7,
					min: -7,
				},
				x: {
					max: 3,
					min: -3,
				},
				y: {
					max: 0,
					min: -6,
				},
			},
		},
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

		case 2:
		audio.play();
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
			}
		break;

		case 3:
		audio.play();
		muchoTiempo();
		tiempoChecker = "checkMucho";
		break;

		case 4:
		audio4.play();
		ronda += 1;
		rondaHandler();
		break;
	}
}

//Verde handler
function verdeHandler(){
	switch(ronda){
		case 0:
		audio3.play();
		console.log("sfx")
		break;

		case 1:
		audio.play();
		rondaPantalla = "p2.calm2";
		emotionChecker = "calm";
		localStorage.setItem('r', '205');
		localStorage.setItem('g', '242');
		localStorage.setItem('b', '195');
		document.getElementById("my_rect_frente").setAttribute("fill", "#b0f2c2");
		//emoji
		emojisplosion({
		physics:{
			initialVelocities: {
				rotation: {
					max: 7,
					min: -7,
				},
				x: {
					max: 3,
					min: -3,
				},
				y: {
					max: 0,
					min: -6,
				},
			},
		},
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
		physics:{
			initialVelocities: {
				rotation: {
					max: 7,
					min: -7,
				},
				x: {
					max: 3,
					min: -3,
				},
				y: {
					max: 0,
					min: -6,
				},
			},
		},
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

		case 2:
		audio.play();
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
		break;

		case 3:
		audio.play();
		tiempoChecker = "checkDuda";
		emojisplosion({
		physics:{
			initialVelocities: {
				rotation: {
					max: 7,
					min: -7,
				},
				x: {
					max: 3,
					min: -3,
				},
				y: {
					max: 0,
					min: -6,
				},
			},
		},
		emojiCount: emojiNumber,
		emojis: ["❔"],
		container: document.getElementById("emojis"),
		position: {
		x: innerWidth*(1/4),
		y: innerHeight/2,
		},
		});
		emojisplosion({
		physics:{
			initialVelocities: {
				rotation: {
					max: 7,
					min: -7,
				},
				x: {
					max: 3,
					min: -3,
				},
				y: {
					max: 0,
					min: -6,
				},
			},
		},
		emojiCount: emojiNumber,
		emojis: ["❔"],
		container: document.getElementById("emojis"),
		position: {
		x: innerWidth*(3/4),
		y: innerHeight/2,
		},
		});
		break;

		case 4:
		audio4.play();
		ronda += 1;
		rondaHandler();
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
		  pantallaP["p0"] = p.createVideo(mapping);
		  pantallaP["p0"].hide();
		  pantallaP["p0"].volume(0);
		  pantallaP["p0"].loop();

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
		  prompt["p3"] = p.loadImage('media/prompt/prompt3.gif');
		  prompt["p4"] = p.loadImage('media/prompt/prompt4.gif');

		  //retro
		  prompt["p6"] = p.loadImage('media/prompt/prompt6.gif');
		  prompt["p7"] = p.loadImage('media/prompt/prompt7.gif');
		  prompt["p8"] = p.loadImage('media/prompt/prompt8.gif');
     }
	 p.draw = function(){
	 if(doit){
		  p.promedio();
		  doit = false;
	 }
	  p.noTint();
	  p.fill(255);
	  p.rect(0,0,window.innerWidth,window.innerHeight);
	  //pantallaP
	  p.tint(255, alpha);
	  p.image(pantallaP[rondaPantalla], 0, 0, window.innerWidth,window.innerHeight); 
	  //mensaje
	  p.tint(255, 200);
	  p.image(prompt[rondaPrompt], 0, 0, window.innerWidth,window.innerHeight);
	 }

	 p.promedio = function (){
	 switch(cuentaX){
			case -3:
			switch(cuentaY){
				case -3:
				pantallaP["p0"] = p.createVideo("media/Bloque3/Bloque3_3,3.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case -2:
				pantallaP["p0"] = p.createVideo("media/Bloque3/Bloque3_3,2.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case -1:
				pantallaP["p0"] = p.createVideo("media/Bloque3/Bloque3_3,1.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 0:
				pantallaP["p0"] = p.createVideo("media/emociones/Angry03.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 1:
				pantallaP["p0"] = p.createVideo("media/Bloque2/Bloque2_3,1.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 2:
				pantallaP["p0"] = p.createVideo("media/Bloque2/Bloque2_3,2.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 3:
				pantallaP["p0"] = p.createVideo("media/Bloque2/Bloque2_3,3.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;
			}
			break;

			case -2:
			switch(cuentaY){
				case -3:
				pantallaP["p0"] = p.createVideo("media/Bloque3/Bloque3_2,3.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case -2:
				pantallaP["p0"] = p.createVideo("media/Bloque3/Bloque3_2,2.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case -1:
				pantallaP["p0"] = p.createVideo("media/Bloque3/Bloque3_2,1.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 0:
				pantallaP["p0"] = p.createVideo("media/emociones/Angry02.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 1:
				pantallaP["p0"] = p.createVideo("media/Bloque2/Bloque2_2,1.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 2:
				pantallaP["p0"] = p.createVideo("media/Bloque2/Bloque2_2,2.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 3:
				pantallaP["p0"] = p.createVideo("media/Bloque2/Bloque2_2,3.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;
			}
			break;

			case -1:
			switch(cuentaY){
				case -3:
				pantallaP["p0"] = p.createVideo("media/Bloque3/Bloque3_1,3.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case -2:
				pantallaP["p0"] = p.createVideo("media/Bloque3/Bloque3_1,2.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case -1:
				pantallaP["p0"] = p.createVideo("media/Bloque3/Bloque3_1,1.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 0:
				pantallaP["p0"] = p.createVideo("media/emociones/Angry01.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 1:
				pantallaP["p0"] = p.createVideo("media/Bloque2/Bloque2_1,1.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 2:
				pantallaP["p0"] = p.createVideo("media/Bloque2/Bloque2_1,2.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 3:
				pantallaP["p0"] = p.createVideo("media/Bloque2/Bloque2_1,3.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;
			}
			break;

			case 0:
			switch(cuentaY){
				case -3:
				pantallaP["p0"] = p.createVideo("media/emociones/Sad03.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case -2:
				pantallaP["p0"] = p.createVideo("media/emociones/Sad02.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case -1:
				pantallaP["p0"] = p.createVideo("media/emociones/Sad01.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 0:
				pantallaP["p0"] = p.createVideo("media/neutral.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 1:
				pantallaP["p0"] = p.createVideo("media/emociones/Happy01.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 2:
				pantallaP["p0"] = p.createVideo("media/emociones/Happy02.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 3:
				pantallaP["p0"] = p.createVideo("media/emociones/Happy03.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;
			}
			break;

			case 1:
			switch(cuentaY){
				case -3:
				pantallaP["p0"] = p.createVideo("media/Bloque4/Bloque4_1,3.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case -2:
				pantallaP["p0"] = p.createVideo("media/Bloque4/Bloque4_1,2.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case -1:
				pantallaP["p0"] = p.createVideo("media/Bloque4/Bloque4_1,1.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 0:
				pantallaP["p0"] = p.createVideo("media/emociones/Calm01.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 1:
				pantallaP["p0"] = p.createVideo("media/Bloque1/Bloque1_1,1.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 2:
				pantallaP["p0"] = p.createVideo("media/Bloque1/Bloque1_1,2.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 3:
				pantallaP["p0"] = p.createVideo("media/Bloque1/Bloque1_1,3.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;
			}
			break;

			case 2:
			switch(cuentaY){
				case -3:
				pantallaP["p0"] = p.createVideo("media/Bloque4/Bloque4_2,3.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case -2:
				pantallaP["p0"] = p.createVideo("media/Bloque4/Bloque4_2,2.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case -1:
				pantallaP["p0"] = p.createVideo("media/Bloque4/Bloque4_2,1.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 0:
				pantallaP["p0"] = p.createVideo("media/emociones/Calm02.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 1:
				pantallaP["p0"] = p.createVideo("media/Bloque1/Bloque1_2,1.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 2:
				pantallaP["p0"] = p.createVideo("media/Bloque1/Bloque1_2,2.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 3:
				pantallaP["p0"] = p.createVideo("media/Bloque1/Bloque1_2,3.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;
			}
			break;

			case 3:
			switch(cuentaY){
				case -3:
				pantallaP["p0"] = p.createVideo("media/Bloque4/Bloque4_3,3.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case -2:
				pantallaP["p0"] = p.createVideo("media/Bloque4/Bloque4_3,2.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case -1:
				pantallaP["p0"] = p.createVideo("media/Bloque4/Bloque4_3,1.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 0:
				pantallaP["p0"] = p.createVideo("media/emociones/Calm03.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 1:
				pantallaP["p0"] = p.createVideo("media/Bloque1/Bloque1_3,1.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 2:
				pantallaP["p0"] = p.createVideo("media/Bloque1/Bloque1_3,2.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;

				case 3:
				pantallaP["p0"] = p.createVideo("media/Bloque1/Bloque1_3,3.mp4");
				pantallaP["p0"].hide();
				pantallaP["p0"].volume(0);
				pantallaP["p0"].loop();
				break;
			}
			break;
		}
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


