import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  eleccionMaquina: number;
  eleccionJugador: number;

  opcionJugador;

  // Round
  resultado: string;

  // Resultados Partida
  jugador = 0;
  maquina = 0;

  // Contador
  contador = 3;

  juego: boolean;

  inicioPartida = false;

  constructor() { }

  ngOnInit() {
  }

  botonInicio() {

    this.jugador = 0;
    this.maquina = 0;
    this.eleccionJugador = null;
    this.eleccionMaquina = null;
    this.resultado = null;

    this.inicioPartida = true;
  }

  comienzaJuego() {

    this.juego = false;
    
    this.eleccionJugador = this.opcionJugador;

    this.eleccionMaquina = Math.floor(Math.random() * (4 - 1) + 1);


    switch (this.eleccionJugador) {
      case 1:
       if (this.eleccionMaquina === 1) {
         this.resultado = '¡Empate!, ¡De vuelta!';
         break;
       }
       if (this.eleccionMaquina === 2) {
         this.resultado = '¡Ganaste!, ¡Dale que ganamos!';
         this.jugador++;
         break;
       }
       if (this.eleccionMaquina === 3) {
         this.resultado = '¡Perdiste!, ¡Todavía no termina!';
         this.maquina++;
         break;
       }
       case 2:
       if (this.eleccionMaquina === 1) {
        this.resultado = '¡Perdiste!, ¡Todavía no termina!';
         this.maquina++;
         break;
       }
       if (this.eleccionMaquina === 2) {
        this.resultado = '¡Empate!, ¡De vuelta!';
         break;
       }
       if (this.eleccionMaquina === 3) {
        this.resultado = '¡Ganaste!, ¡Dale que ganamos!';
         this.jugador++;
         break;
       }
       case 3:
       if (this.eleccionMaquina === 1) {
        this.resultado = '¡Ganaste!, ¡Dale que ganamos!';
         this.jugador++;
         break;
       }
       if (this.eleccionMaquina === 2) {
        this.resultado = '¡Perdiste!, ¡Todavía no termina!';
         this.maquina++;
         break;
       }
       if (this.eleccionMaquina === 3) {
        this.resultado = '¡Empate!, ¡De vuelta!';
         break;
       }
    }

    if (this.jugador === 5) {
      this.resultado = `¡GANASTE! :) (${this.jugador}-${this.maquina})`;
     // this.inicioPartida = false;
    }
    if (this.maquina === 5) {
      this.resultado = `¡OTRA VEZ SERA! :( (${this.jugador}-${this.maquina})`;
     // this.inicioPartida = false;
    }

  } 
  
  
  jugar(eleccion: number) {
    
    this.eleccionJugador = null;
    this.eleccionMaquina = null;
    this.resultado = null;
    
    this.juego = true;
    
    this.opcionJugador = eleccion; 

  }

}
