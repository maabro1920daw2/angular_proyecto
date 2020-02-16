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
see = [];
  constructor() { 
    this.comprobarFavoritos();
  }

  ngOnInit() {

  }

  titulo='';
  dist='';
  desa='';
  
  comprobarFavoritos(){
    for (let n = 0; n < localStorage.length; n++) {
      let key = localStorage.key(n);
      for(let i = 0; i < this.dataSource.length; i++){
        if(key == this.dataSource[i].tag){
          this.see.push(i);
        }
      }

    }

    for(let j=0; j < this.dataSource.length; j++){
      for(let m=0; m < this.see.length; m++){
        if(j == this.see[m]){
          this.dataSource[j].fav = true;
          break;
        }else{
          this.dataSource[j].fav = false;
        }
      }
    }

  }

  displayedColumns: string[] = ['id', 'titulo', 'distribuidor', 'desarrollador', 'descripcion', 'fav'];
  dataSource = ELEMENT_DATA;
}