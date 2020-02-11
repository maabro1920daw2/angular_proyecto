import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  panelOpenState = false;
  see = [];
  constructor() {  
    this.readStorage();
    console.log(this.see);    
  }

  ngOnInit() {}
  
  Fav: any = this.see;

  readStorage(){
    for (let n = 0; n < localStorage.length; n++) {
      let key = localStorage.key(n);
      let value = JSON.parse(localStorage.getItem(key));
      this.see.push(value);
      console.log(key, value);
    }
  }
}
