function overMouse(px, py, tamx, tamy) {
  return mouseX>px && mouseX<px+tamx && mouseY>py && mouseY<py+tamy;
}

//pasar esto a una sola funcion

//if (estado===1) {
//  image( imagen[1], 0, 0);
//  push();
//  noStroke();
//  fill(240, 206, 228, 180);
//  rect (15, 305, 610, 150, 20);
//  fill(70, 30, 56);
//  text(frases[0], 20, 280, 600, 200);
//  pop();
//  Botonavanzar(545, 410, 100, 50, 20, 'Avanzar');
//}

//function fondo1boton(imagen, pxb, pyb, tamxb, tamyb, radio, texto) {
//  image(imagen, 0, 0);
//  fill(240, 206, 228, 180);
//  rect (pxb, pyb, tamxb, tamyb, radio);
//  fill(70, 30, 56);
//  text(texto, px+10, py+10, tamxb-10, tamyb-10);
//}


//function fondo2botones(imagen, texto, posX, posY, cancho, calto) {
//  image(imagen, 0, 0);
//  fill(255);
//  text(texto, posX, posY, cancho, calto);
//}

function Botonavanzar(px, py, tamx, tamy, radio, texto) {
  push();
  if (overMouse(px, py, tamx, tamy)) {
    fill(255);
  } else {
    fill(240, 206, 228);
  }
  noStroke();
  rect(px, py, tamx, tamy, radio);
  fill(0);
  textAlign(CENTER, CENTER);
  fill(70, 30, 56);
  text(texto, px+tamx/2, py+tamy/2);
  pop();
}
