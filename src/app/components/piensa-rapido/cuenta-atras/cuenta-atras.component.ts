import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';


@Component({
  selector: 'app-cuenta-atras',
  templateUrl: './cuenta-atras.component.html',
  styleUrls: ['./cuenta-atras.component.css']
})
export class CuentaAtrasComponent implements OnInit {

  @Input() segundos: number;
  @Output() completado: EventEmitter<any>;
  intervalo: any;


  @ViewChild('div') div;

  mostrar = true;

  constructor() {

    this.completado = new EventEmitter();

    this.intervalo = setInterval( () => this.cuentaAtras(), 1000 );

   }

  private cuentaAtras() {


    if ( --this.segundos < 1) {
      clearTimeout(this.intervalo);
      this.completado.emit(0);

    }

  }


  ngOnInit() {
  }

}
