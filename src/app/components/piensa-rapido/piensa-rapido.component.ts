import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piensa-rapido',
  templateUrl: './piensa-rapido.component.html',
  styleUrls: ['./piensa-rapido.component.css']
})
export class PiensaRapidoComponent implements OnInit {


  /* numerosGenerados: number[][]; */
  numerosGenerados: number[] = [];


  // nivel
  consigna: string;
  tiempo: number;
  ordenCorrecto: number[] = [];
  numerosSeleccionados: number[] = [];
  jugadas: number;

  gana: boolean;

  constructor() {

      this.gana = false;

      this.jugadas = 0;

      console.log(this.numerosGenerados);


      console.log(this.ordenCorrecto);

  }

  comenzar(  ) {
      this.resetearSeleccionados();

      this.jugadas = 0;

      this.generarNumeros();

      this.nivelUno();

      this.gana = true;
  }

  private generarNumeros() {

    this.numerosGenerados = [];

    for (let i = 0; i < 30; i++) {
      this.numerosGenerados.push(this.generarNumeroRandom());
    }
  }

  private resetearSeleccionados() {

    this.numerosSeleccionados = [];

    for (let index = 0; index < 30; index++) {
      this.numerosSeleccionados.push(-1);
    }
  }

  private nivelUno() {
      this.consigna = 'Ordena los números de menor a mayor';
      this.tiempo = 30;

      let orden = this.numerosGenerados.slice();

      this.ordenCorrecto = orden.sort( (a, b) => a - b );

  }

  private generarNumeroRandom() {

    return Math.floor(Math.random() * (99 - 1) + 1);

  }

  private obtenerNumero(num: number, index: number) {

    this.numerosSeleccionados[index] = num;

    if ( this.ordenCorrecto[this.jugadas] === num ) {
       console.log('ok');
    } else {
      this.gana = false;
    }

    this.jugadas++;

  }

  ngOnInit() {
  }

}
