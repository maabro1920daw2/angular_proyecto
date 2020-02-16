import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StorageServiceModule} from 'ngx-webstorage-service';

import { MatToolbarModule, 
          MatButtonModule, 
          MatIconModule, 
          MatCardModule, 
          MatFormFieldModule, 
          MatInputModule, 
          MatTableModule,
          MatExpansionModule,
          MatDividerModule,
          MatListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FavComponent } from './fav/fav.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { SearchPipe } from './pipes/search.pipe';
import { PreviewComponent } from './preview/preview.component';
import { GameComponent } from './home/game/game.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FavComponent,
    SearchComponent,
    FooterComponent,
    GameComponent,
    SearchPipe,
    PreviewComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    StorageServiceModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
