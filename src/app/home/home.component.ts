import { Component, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
// importar el archivo .json
import listaJuegos from 'src/assets/json/gameboy.json';
import { Lista } from 'src/app/models/Lista';

const ELEMENT_DATA: Lista[] = listaJuegos;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  save = [];
  dataSource = ELEMENT_DATA;
  constructor() {

  }

  ngOnInit() {

  }
  // mostrar el archivo
  Juegos: any = listaJuegos;
  public slides = [
    { src: "assets/caratulas/s07.png" },
    { src: "assets/caratulas/s12.png" },
    { src: "assets/caratulas/s15.png" }
  ];
  handleClick(event: Event) {
    console.log('‘Click’', event);
    this.save.push(event);
    this.saveStorage(event);
  }

  saveStorage(num){
    for (let i = 0; i < this.dataSource.length; i++) {
      if(num == this.dataSource[i].id){
        this.dataSource[i].fav = true;
        if(localStorage.length > 0){
          let keyn;
          let eqs = false;
          for (let n = 0; n < localStorage.length; n++){
            //console.log(localStorage.length);
            keyn = localStorage.key(n);
            //console.log(keyn);
            //console.log(keyn+" - "+this.dataSource[i].tag);
            if(keyn == this.dataSource[i].tag){
              //console.log("Son iguales!");
              eqs = true;
              break;
            }
          }
          if(eqs){
            //console.log(keyn);
            localStorage.removeItem(keyn);
          }else{
            localStorage.setItem(this.dataSource[i].tag, JSON.stringify(this.dataSource[i]));
          }          
        }else{
          let key = this.dataSource[i].tag;
          localStorage.setItem(key, JSON.stringify(this.dataSource[i]));
        }        
        //console.log(this.dataSource[i].titulo);
        break;
      }     
    }
  }
  
  
}
