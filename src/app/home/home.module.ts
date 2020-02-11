import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';

//import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GameComponent } from './game/game.component';
//import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [HomeComponent, GameComponent],
  imports: [
    CommonModule,
    //HomeRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class HomeModule { }
