import { Component, OnInit } from '@angular/core';
import listaJuegos from 'src/assets/json/gameboy.json';
import { Lista } from 'src/app/models/Lista';

const ELEMENT_DATA: Lista[] = listaJuegos;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  filter='';
  

  displayedColumns: string[] = ['id', 'titulo', 'consola', 'distribuidor', 'desarrollador'];
  dataSource = ELEMENT_DATA;
}
