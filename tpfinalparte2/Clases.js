class Juego{
  
constructor(){
//this.Ann = new Ann();
this.Cecy = new Cecy();
}

mostrar(){
  this.Cecy.mostrar();
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

//class Ann{//(Jugador)
  
//constructor(){
//this.px=0;
//this.py=0;
//this.vidas=3;
//}

//moverX(){
//  if (KeyCode===LEFT_ARROW){
//  this.px --;
//}
  
//  if (KeyCode===RIGHT_ARROW){
//  this.px ++;
//}
//}

//moverY(){
//  if (KeyCode===UP_ARROW){
//  this.py --;
//  }
//  if (KeyCode===DOWN_ARROW){
//  this.py ++;
//  }
//}

//vidas(){
//  this.vidas=3;
//  if (this.vidas = 0){ //no se si va asi 
//  Juego.perder();
//  }
//}

//}



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
this.Hechizo.mostrar(this.px-40, this.py+30)
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


class Hechizo {//los hechizos salen desde la varita de cecy que va a estar en movimiento, lo ideal seria que se disparen automaticamente cada un segundo

constructor(){
this.px = 470;
this.py = 50;
this.baja = true;
}

mostrar(px,py){
this.mover();
image(hechizo, px, py, 70, 30);
}

mover(){

}

}
