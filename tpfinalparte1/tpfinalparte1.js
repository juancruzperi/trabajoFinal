let imagen=[];
let estado=0;
let escobi, creditos;
let frases=['Ella es Cecy Elliot, una bruja de 17 años con un don único: puede dejar su cuerpo y habitar en animales, personas e incluso el viento. Sueña con experimentar el amor humano, pero su familia se lo prohíbe ya que pone en riesgo sus poderes.', 'Una noche de primavera, Cecy encuentra la oportunidad de vivir lo prohibido. Descubre a Ann, una joven del pueblo, a través de ella, podría experimentar lo que significa amar.', 'Cecy se queda sola y triste. Comprende que nunca podrá conocer el amor humano.', 'Dentro del cuerpo de Ann, Cecy conoce a Tom, un joven que trabaja en la granja. Ann lo ignora, pero Cecy se enamora de él.'];
function preload() {
  escobi = loadImage ('data/escobi.png');
  creditos = loadImage('data/creditos.png');
  for (let i=0; i<15; i++) {
    imagen[i]=loadImage('data/'+i+'.png');
  }
}

function setup() {
  createCanvas(640, 480);
  noCursor();
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(18);
  for (let i=0; i<15; i++) {
    imagen[i].resize(640, 480);
  }
}


function draw() {

  if (estado===0) { // Pantalla inicial
    image( imagen[0], 0, 0);
  }
  //fondo1boton(imagen, pxt, pyt, tamx, tamy, radio, texto, anchoc, altoc)

  if (estado===1) { // Presentacion de Cecy
    fondo1boton(imagen[1], 15, 300, 610, 120, 20, frases[0], 600, 200);
    Boton(width/2-50, 425, 100, 50, 20, 'Avanzar');
  }

  if (estado===2) { // Creditos
    image( creditos, 0, 0);
  }

  if (estado===3) { // Conocemos a Ann
    fondo1boton(imagen[2], 15, 5, 610, 80, 20, frases[1], 600, 200);
      Boton(20, 410, 220, 50, 20, 'Escuchar a sus padres');
    Boton(420, 410, 200, 50, 20, 'Entrar al cuerpo');
  }

  if (estado===4) { // Primera decision, Cecy llorando
    image( imagen [3], 0, 0);
  }

  if (estado===5) { // Conocemos a Tom
    image( imagen [4], 0, 0);
  }

  if (estado===6) { // Tom la nota distinta a Ann
    image( imagen [5], 0, 0);
  }

  if (estado===7) { // Cecy y Ann enojadas porque no quiso ir al baile
    image( imagen [6], 0, 0);
  }

  if (estado===8) { // Conmo comportarse en el baile?
    image( imagen [7], 0, 0);
  }

  if (estado===9) { //Cecy entiende que Tom ama a Ann
    image( imagen [8], 0, 0);
  }

  if (estado===10) { // Cecy renuncia al cuerpo de Ann
    image( imagen [9], 0, 0);
  }

  if (estado===11) { // Decision no disimular, Tom lo nota
    image( imagen [10], 0, 0);
  }

  if (estado===12) { // Cecy confiesa que es una bruja
    image( imagen [11], 0, 0);
  }

  if (estado===13) { // Cecy y Tom se enamoran
    image( imagen [12], 0, 0);
  }

  if (estado===14) { // Cecy es rechazada y muere de tristeza
    image( imagen [13], 0, 0);
  }

  if (estado===15) { // Cecy renuncia al amor
    image( imagen [14], 0, 0);
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
    if (overMouse(width/2-50, 425, 100, 50)) {
      estado = 3;
    }
  }

  if (estado === 3) {
    if (overMouse(20, 410, 220, 50)) {
      estado = 4;
    } else if (overMouse(420, 410, 200, 50)) {
      estado = 5;
    }
  }

}
