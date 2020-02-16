import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resBus = [];
    for (const game of value){
      if(game.titulo.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resBus.push(game);
      }
      else if(game.distribuidor.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resBus.push(game);
      }
      else if(game.desarrollador.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resBus.push(game);
      }
    }
    return resBus;
  }

}
