import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';

import {
  fadeIn,
  fadeOut
} from "./slider.animations";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('sliderAnimation', [
      transition("void => *", [
        useAnimation(fadeIn, { params: { time: "600ms" } })
      ]),
      transition("* => void", [
        useAnimation(fadeOut, { params: { time: "600ms" } })
      ])
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() slides;

  currentSlide = 0;

  constructor() { }

  ngOnInit() {
    this.preloadImages();
  }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }

  onPrev() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNext() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

}
