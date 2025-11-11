//Falta: vidas, agregar puerta, ganar, perder, estados, iniciar, reiniciar y tiempo
//Cambiar: centro de ann por zona de ann

class Juego{
  
constructor(){
this.Ann = new Ann();
this.Cecy = new Cecy();
this.Vidas= new Vidas();
}

mostrar(){
  this.Cecy.mostrar();
  this.Ann.mostrar();
  this.Vidas.mostrar();
  this.colision();
}

flechas(keyCode){
this.Ann.flechas(keyCode);
}


colision(){
  
//circulos para ver donde son los puntos desde donde se mide la distancia:

//ellipse(this.Ann.px + this.Ann.tam/2, this.Ann.py + this.Ann.tam/2, 10);
//ellipse(this.Cecy.Hechizo.px + 20, this.Cecy.py + 50, 10);

let Distancia = dist ( this.Ann.px + this.Ann.tam/2, this.Ann.py + this.Ann.tam/2, this.Cecy.Hechizo.px + 20, this.Cecy.py + 50);
if (Distancia <60){
this.Vidas.vida-=1;
  fill(255,0,0);
  textSize(100);
text("toco", 300,200);
}

}// llave metodo colision


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
this.py=50;
this.tam = 120;
}

mostrar(){
image(Annimg, this.px, this.py, this.tam-20, this.tam);
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
  if (this.px>0){
  this.px -=20;
  }
}

moverDer(){
  this.px +=20;
}
  

moverArriba(){
  if (this.py>50){
  this.py -=20;
  }
}

moverAbajo(){
  if (this.py<height-this.tam){
  this.py +=20;
  }
}

}//no tocar



class Cecy{//(Enemigo)
  
constructor(){
this.px = 520;
this.py = 30;
this.alto = 150;
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
image(hechizo, this.px, py, 80, 40);
}

disparo(){
this.px -=5;
if (this.px <= -100) {
this.px=430;
}
}

}//no tocar

class Vidas {
  
constructor(){
this.vida = 5;

}

mostrar(){
this.corazones();
}

corazones(){
if (this.vida === 5){
for (let i=10; i<=130; i+=30){
image (vidas, i, 10, 30, 30);
}
}
if (this.vida === 4){
for (let i=10; i<=100; i+=30){
image (vidas, i, 10, 30, 30);
}
image (novida, 130,10,30,30);
}
if (this.vida === 3){
for (let i=10; i<=70; i+=30){
image (vidas, i, 10, 30, 30);
}
image (novida, 100,10,30,30);
image (novida, 130,10,30,30);
}

if (this.vida === 2){
image (vidas, 10,10,30,30);  
image (vidas, 40,10,30,30);
for (let i=70; i<=130; i+=30){
image (novida, i, 10, 30, 30);
}
}

if (this.vida === 1){
image (vidas, 10,10,30,30);  
for (let i=40; i<=130; i+=30){
image (novida, i, 10, 30, 30);
}
}

if (this.vida === 0){
for (let i=10; i<=130; i+=30){
image (novida, i, 10, 30, 30);
}
}

}//cierre metodo


}// no tocar, cierre clase vidas
