import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit {
  prevs = [
    { src: "assets/preview/p01.png" },
    { src: "assets/preview/p02.png" },
    { src: "assets/preview/p03.png" },
    { src: "assets/preview/p04.png" },
    { src: "assets/preview/p05.png" }
  ];

  current = 0;

  constructor() { }

  ngOnInit() {
    this.preloadImages();
  }

  preloadImages() {
    for (const pr of this.prevs) {
      new Image().src = pr.src;
    }
  }

  onPrev() {
    const previous = this.current - 1;
    this.current = previous < 0 ? this.prevs.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.current);
  }

  onNext() {
    const next = this.current + 1;
    this.current = next === this.prevs.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.current);
  }


}
