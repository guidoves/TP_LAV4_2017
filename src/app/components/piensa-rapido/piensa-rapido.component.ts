import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piensa-rapido',
  templateUrl: './piensa-rapido.component.html',
  styleUrls: ['./piensa-rapido.component.css']
})
export class PiensaRapidoComponent implements OnInit {


  /* numerosGenerados: number[][]; */
  numerosGenerados: number[];


  // nivel
  consigna: string;
  tiempo: number;


  constructor() {

      this.numerosGenerados = [];

      /* for (let i = 0; i < 6; i++) {
        this.numerosGenerados[i] = [];
        for (let j = 0; j < 5; j++) {
          this.numerosGenerados[i][j] = this.generarNumeroRandom();
        }
      } */

      for (let i = 0; i < 30; i++) {
        this.numerosGenerados.push(this.generarNumeroRandom());
      }

      console.log(this.numerosGenerados);

  }

  private generarNumeroRandom() {

    return Math.floor(Math.random() * (99 - 1) + 1);

  }

  private obtenerNumero(num: number) {
    console.log(num);
  }

  ngOnInit() {
  }

}
