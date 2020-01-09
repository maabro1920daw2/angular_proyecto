import { Component, OnInit } from '@angular/core';
// importar el archivo .json
import listaComics from 'src/assets/json/comics.json';
import listaJuegos from 'src/assets/json/gameboy.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // mostrar el archivo
  //Comics: any = listaComics;
  Juegos: any = listaJuegos;
}
