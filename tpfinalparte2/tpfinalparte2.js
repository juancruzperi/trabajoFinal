//Comision 1
//Hanna Mendoza y Juan Cruz Peri
let juego;
let fondo, Annimg, Cecyimg, hechizo, comenzar;
let cancion;

function preload (){
fondo = loadImage('data/fondo.jpg');
Annimg = loadImage('data/Annimg.png');
Cecyimg = loadImage('data/Cecyimg.png');
hechizo = loadImage('data/hechizo.png');
comenzar = loadImage('data/comenzar.png');
cancion = loadSound('data/cancion.mp3');
}

function setup() {
createCanvas(640,480);
juego = new Juego();
}


function draw() {
image(fondo, 0,0);
juego.mostrar();
}

function keyPressed(){
juego.flechas(keyCode);
}
