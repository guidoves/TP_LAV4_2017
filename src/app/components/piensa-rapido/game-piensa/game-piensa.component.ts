import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-piensa',
  templateUrl: './game-piensa.component.html',
  styleUrls: ['./game-piensa.component.css']
})
export class GamePiensaComponent implements OnInit {

  numerosGenerados: number[] = [];
  objetivo = '';
  tiempo: number;
  ordenCorrecto: number[] = [];
  numerosSeleccionados: number[] = [];
  jugadas: number;
  gana: boolean;

  constructor() { }

  ngOnInit() {
  }

  comenzar(nivel: Function) {

    this.resetSeleccionados();

    this.generarNumeros();

    this.ordenCorrecto = this.numerosGenerados.slice();

    this.jugadas = 0;

    nivel();

    this.gana = true;
    
  }

  private resetSeleccionados() {

    this.numerosSeleccionados = [];

    for (let index = 0; index < 30; index++) {
      this.numerosSeleccionados.push(-1);
    }
  }

  private generarNumeroRandom() {

    return Math.floor(Math.random() * (99 - 1) + 1);

  }

  private generarNumeros() {

    this.numerosGenerados = [];

    for (let i = 0; i < 30; i++) {

      let numeroGenerado = this.generarNumeroRandom();

      let busqueda = this.numerosGenerados.find((num) => num === numeroGenerado);

      if (busqueda === undefined) {
        this.numerosGenerados.push(numeroGenerado);
      } else {
        i--;
      }

    }
  }

  private opcionJugador(num: number, index: number) {

    this.numerosSeleccionados[index] = num;

    if (this.ordenCorrecto[this.jugadas] === num) {
      this.jugadas++;

      if (this.jugadas === 30) {
        console.log('gano');
      }

    } else {
      this.gana = false;
    }

  }

  private nivelUno() {
    this.objetivo = 'Ordena los números de menor a mayor';
    this.tiempo = 30;
    this.ordenCorrecto = this.ordenCorrecto.sort((a, b) => a - b);
  }

}
