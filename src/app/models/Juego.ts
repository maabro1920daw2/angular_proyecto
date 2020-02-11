export class Juego {
    id: number;
    titulo: string;  
    distribuidor: string;
    desarrollador: string;
    consola: string;
    fecha: string;
    img: string;
    tag: string;
    fav: boolean;

    constructor(id:number, titulo:string, distribuidor:string, desarrollador:string, consola:string, fecha:string, img:string, tag: string, fav: boolean){
        this.id = id;
        this.titulo = titulo;  
        this.distribuidor = distribuidor;
        this.desarrollador = desarrollador;
        this.consola = consola;
        this.fecha = fecha;
        this.img = img;
        this.tag = tag;
        this.fav = fav;
    }
}