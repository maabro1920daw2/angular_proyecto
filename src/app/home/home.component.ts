import { Component, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
// importar el archivo .json
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
    Juegos: any = listaJuegos;

  //$scope.favouriteList = [];
  //$scope.favouriteThis = function (juego) {
    //$scope.favouriteList.push(juego); 
    // make sure to check for duplicates before pushing the item, the logic for which i've not included here.
  //}
}
