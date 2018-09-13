import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  eleccionMaquina: number;
  eleccionJugador: number;

  // Round
  resultado: string;

  // Resultados Partida
  jugador = 0;
  maquina = 0;

  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

  jugar(eleccion: number) {

    this.eleccionJugador = eleccion;
  
    this.loading = true;

    setTimeout(() => {
        
      this.loading = false;
      this.eleccionMaquina = Math.floor(Math.random() * (4 - 1) + 1);

      switch (eleccion) {
        case 1:
         if (this.eleccionMaquina == 1) {
           this.resultado = 'Empate';
           break;
         }
         if (this.eleccionMaquina == 2) {
           this.resultado = 'Gano';
           this.jugador++;
           break;
         }
         if (this.eleccionMaquina == 3) {
           this.resultado = 'Perdio';
           this.maquina++;
           break;
         }
         case 2:
         if (this.eleccionMaquina == 1) {
           this.resultado = 'Perdio';
           this.maquina++;
           break;
         }
         if (this.eleccionMaquina == 2) {
           this.resultado = 'Empate';
           break;
         }
         if (this.eleccionMaquina == 3) {
           this.resultado = 'Gano';
           this.jugador++;
           break;
         }
         case 3:
         if (this.eleccionMaquina == 1) {
           this.resultado = 'Gano';
           this.jugador++;
           break;
         }
         if (this.eleccionMaquina == 2) {
           this.resultado = 'Perdio';
           this.maquina++;
           break;
         }
         if (this.eleccionMaquina == 3) {
           this.resultado = 'Empate';
           break;
         }
      }



    }, 2000);

  }

}
