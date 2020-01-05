import { Component } from '@angular/core';
// importar el archivo .json
import listaComics from 'src/assets/json/comics.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comix-zone';
  // mostrar el archivo
  Comics: any = listaComics;
}
