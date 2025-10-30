//Agregar condicion de tiempo, si no llegas a la salida antes del tiempo, perdes


class Juego{
  
//constructor(){
//this.Ann;
//this.Cecy;
//this.Hechizos;
//this.vidas=3;
//}
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
this.py=0;
this.vidas=3;
}
moverIzquierda(){
  this.px -=5;
}

moverDerecha(){
  this.px +=5;
}

moverArriba(){
  this.py -=5;
}

moverAbajo(){
  this.py +=5;
}

vidas(){
  this.vidas=3;
  if (this.vidas = 0){ //no se si va asi 
  Juego.perder();
  }
}

}



class Cecy{//(Enemigo)
  
constructor(){
this.posx=0;
this.py=0;
}

mover(){//la idea es que vaya subiendo y bajando automaticamente, se inicia cuando se clickea la pantalla al comenzar
}

}

class Hechizos {//los hechizos salen desde la varita de cecy que va a estar en movimiento, lo ideal seria que se disparen automaticamente cada un segundo

constructor(){
this.px=0;
this.py=0;
}

mover(){
}
}
