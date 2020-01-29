import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule} from 'ngx-webstorage-service';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FavComponent } from './fav/fav.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './home/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FavComponent,
    SearchComponent,
    FooterComponent,
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
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
