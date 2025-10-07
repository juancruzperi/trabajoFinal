let imagen=[];
let estado=0;
let escobi;
let creditos;
let frases=['Ella es Cecy Elliot, una bruja de 17 años con un don único: puede dejar su cuerpo y habitar en animales, personas e incluso el viento. Sueña con experimentar el amor humano, pero su familia se lo prohíbe ya que pone en riesgo sus poderes.', 'Una noche de primavera, Cecy encuentra la oportunidad de vivir lo prohibido. Descubre a Ann, una joven del pueblo, a través de ella, podría experimentar lo que significa amar.', 'Cecy se queda sola y triste. Comprende que nunca podrá conocer el amor humano.', 'Dentro del cuerpo de Ann, Cecy conoce a Tom, un joven que trabaja en la granja. Ann lo ignora, pero Cecy se enamora de él.'];
function preload() {
  escobi = loadImage ('data/escobi.png');
  creditos = loadImage('data/creditos.png');
  for (let i=0; i<14; i++) {
    imagen[i]=loadImage('data/'+i+'.png');
  }
}

function setup() {
  createCanvas(640, 480);
  noCursor();
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(20);
  for (let i=0; i<14; i++) {
    imagen[i].resize(640, 480);
  }
}


function draw() {

  if (estado===0) {
    image( imagen[0], 0, 0);
  }

  if (estado===1) {
    image( imagen[1], 0, 0);
    push();
    noStroke();
    fill(240, 206, 228, 180);
    rect (15, 305, 610, 150, 20);
    fill(70, 30, 56);
    text(frases[0], 20, 280, 600, 200);
    pop();
    Botonavanzar(545, 410, 100, 50, 20, 'Avanzar');
  }

  if (estado===2) {
    image( creditos, 0, 0);
  }

  if (estado===3) {
    image( imagen [2], 0, 0);
  }
  image (escobi, mouseX-10, mouseY-10, 50, 50);
}

function mousePressed() {
  if (estado===0) {
    if (overMouse(376, 184, 161, 42)) {
      estado=1;
    } else if (overMouse(376, 266, 161, 42)) {
      estado=2;
    }
  }
  if (estado ===2) {
    if (overMouse(232, 362, 174, 42)) {
      estado=0;
    }
  }
  if (estado === 1) {
    if (overMouse(545, 410, 100, 50))
      estado = 3;
  }
}
