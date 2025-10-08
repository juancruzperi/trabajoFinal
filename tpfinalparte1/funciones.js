function overMouse(px, py, tamx, tamy) {
  return mouseX>px && mouseX<px+tamx && mouseY>py && mouseY<py+tamy;
}

function fondo1boton(imagen, pxt, pyt, tamx, tamy, radio, texto, anchoc, altoc) {
  image(imagen, 0, 0);
  fill(240, 206, 228, 160);
  rect (pxt, pyt, tamx, tamy, radio);
  fill(70, 30, 56);
  textAlign(CENTER, CENTER);
  text(texto, pxt + (tamx - anchoc) / 2, pyt + (tamy - altoc) / 2, anchoc, altoc);
}


function Boton(px, py, tamx, tamy, radio, texto) {
  push();
  if (overMouse(px, py, tamx, tamy)) {
    fill(255);
  } else {
    fill(240, 206, 228, 180);
  }
  noStroke();
  rect(px, py, tamx, tamy, radio);
  fill(0);
  textAlign(CENTER, CENTER);
  fill(70, 30, 56);
  text(texto, px+tamx/2, py+tamy/2);
  pop();
}
