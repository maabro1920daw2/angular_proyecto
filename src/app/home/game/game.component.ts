import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Juego } from 'src/app/models/Juego';
import listaJuegos from 'src/assets/json/gameboy.json';
import { Lista } from 'src/app/models/Lista';

const ELEMENT_DATA: Lista[] = listaJuegos;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public gameId = '';
  titulo = '';
  img = '';
  fecha = '';
  distribuidor = '';
  consola = '';
  desarrollador = '';

  constructor(activateRoute: ActivatedRoute) { 
    this.gameId = activateRoute.snapshot.params.id;
    this.buscarJuegos(this.gameId);

  }

  ngOnInit() {
  }
  

  buscarJuegos(tag){
    for(let i = 0; i < ELEMENT_DATA.length; i++){
      if(tag == ELEMENT_DATA[i].tag){
        this.titulo = ELEMENT_DATA[i].titulo;
        this.img = ELEMENT_DATA[i].img;
        this.fecha = ELEMENT_DATA[i].fecha;
        this.distribuidor = ELEMENT_DATA[i].distribuidor;
        this.consola = ELEMENT_DATA[i].consola;
        this.desarrollador = ELEMENT_DATA[i].desarrollador;
      }
    }
  }

}
