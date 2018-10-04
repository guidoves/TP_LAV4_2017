import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  displayedColumns: string[] = ['juego', 'partidas', 'ranking'];

  juegos: string[] = ['Piedra papel o tijeras', 'Velocidad y agilidad mental', 'Adivina el número secreto', 
'Anagrama', 'Ta-Te-Ti', 'Piensa Rapido'];

  constructor() { }

  ngOnInit() {
  }

}
