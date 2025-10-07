let imagen=[];
let estado=0;
let frases=['Aguante Processing!', 'el 11 de septiembre entregan', 'ponganse las pilas', 'queda poco tiempo'];
function preload() {
  for (let i=0; i<14; i++) {
    imagen[i]=loadImage('data/'+i+'.png');
  }
}

function setup() {
  createCanvas(640, 480);
  for (let i=0; i<14; i++) {
    imagen[i].resize(640, 480); 
  }
  textSize(24);
}


function draw() {
  //function fondo(imagen, texto, posX, posY, posXB, posYB, tamXB, tamYB, textoB) {
  //image(imagen, 0, 0);
  //fill(255);
  //text(texto, posX, posY, width-tamXB, height-tamYB);
  //botonilli(posXB, posYB, tamXB, tamYB, textoB);

  if (estado===0) {
image( imagen[0], 0,0);

  }

  if (estado===1) {
image( imagen[1], 0,0);
  }

  if (estado===2) {
image( imagen[2], 0,0);
  }
}

function mousePressed() {
  if (estado===0) {
    if (overmouse(376, 184, 161, 42)) {
      estado=1;
    } else if (overMouse(376, 266, 161, 42)) {
      estado=2;
    }
  }
}
function botonilli(posX, posY, tamX, tamY, textoB) { // una función para dibujar zonas rectangulares
  if (overMouse(posX, posY, tamX, tamY)) {
    fill(255, 0, 255);
  } else {
    fill(200, 120, 0, 100);
  }
  rect(posX, posY, tamX, tamY, tamY/4);
  fill(100, 255, 0);
  textAlign(CENTER, CENTER);
  text(textoB, posX+tamX/2, posY+tamY/2);
}

function overMouse(posX, posY, tamX, tamY) {
  return mouseX>posX && mouseX<posX+tamX && mouseY>posY && mouseY<posY+tamY;
}

function fondo(imagen, texto, posX, posY, posXB, posYB, tamXB, tamYB, textoB) {
  image(imagen, 0, 0);
  fill(255);
  text(texto, posX, posY, width-tamXB, height-tamYB);
  botonilli(posXB, posYB, tamXB, tamYB, textoB);
}
