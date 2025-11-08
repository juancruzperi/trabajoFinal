class Juego{
  
constructor(){
this.Ann = new Ann();
this.Cecy = new Cecy();
}

mostrar(){
  this.Cecy.mostrar();
  this.Ann.mostrar();
  this.colision();
}

flechas(keyCode){
this.Ann.flechas(keyCode);
}

colision(){
  
//circulos para ver donde son los puntos desde donde se mide la distancia

//ellipse(this.Ann.px + this.Ann.tam/2, this.Ann.py + this.Ann.tam/2, 10);
//ellipse(this.Cecy.Hechizo.px + 20, this.Cecy.py + 50, 10);

let Distancia = dist ( this.Ann.px + this.Ann.tam/2, this.Ann.py + this.Ann.tam/2, this.Cecy.Hechizo.px + 20, this.Cecy.py + 50);
if (Distancia <60){
  fill(255,0,0);
  textSize(100);
text("toco", 300,200);
}


//dos distancias donde en la primera el punto es en "la punta del hechizo" y en la segunda, el punto es en el medio del hechizo
//ellipse(this.Cecy.Hechizo.px + 50, this.Cecy.py + 50, 10);

let Distancia2 = dist ( this.Ann.px + this.Ann.tam/2, this.Ann.py + this.Ann.tam/2, this.Cecy.Hechizo.px + 50, this.Cecy.py + 50);
if (Distancia2 <60){
  fill(255,0,0);
  textSize(100);
text("toco", 300,200);
}

}


iniciar(){
}

perder(){
}

ganar(){
}

reiniciar(){
}

}

class Ann{//(Jugador)
  
constructor(){
this.px=0;
this.py=31;
this.tam = 200;
//this.vidas=3;
}

mostrar(){
image(Annimg, this.px, this.py, this.tam, this.tam);
}


flechas(keyCode){
  if (keyCode == LEFT_ARROW){
  this.moverIzq();
}
else if (keyCode == RIGHT_ARROW){
  this.moverDer();
}

  if (keyCode == UP_ARROW){
  this.moverArriba();
  }
  
  else if (keyCode == DOWN_ARROW){
  this.moverAbajo();
  }
}

moverIzq(){
  this.px -=20;
}

moverDer(){
  this.px +=20;
}
  

moverArriba(){
  if (this.py>30){
  this.py -=20;
  }
}

moverAbajo(){
  this.py +=20;
}



//vidas(){
//  this.vidas=3;
//  if (this.vidas = 0){ //no se si va asi 
//  Juego.perder();
//  }
//}

}//no tocar



class Cecy{//(Enemigo)
  
constructor(){
this.px = 520;
this.py = 30;
this.alto = 170;
this.baja = true;
this.Hechizo = new Hechizo();
}

mostrar(){
this.mover();
image (Cecyimg, this.px, this.py, 100,this.alto);
this.Hechizo.mostrar(this.py+35)
}

mover(){
  
  if (this.baja) {
    this.py += 5;
  if (this.py >= height - this.alto) {
    this.baja = false;
  }
  }
  
  else { this.py -= 5
  if (this.py <= 30){
  this.baja = true;
  }
  }
}

}


class Hechizo {

constructor(){
this.px = 430;
this.baja = true;
}

mostrar(py){
this.disparo();
image(hechizo, this.px, py, 100, 40);
}

disparo(){
this.px -=5;
if (this.px <= -100) {
this.px=430;
}
}

}
