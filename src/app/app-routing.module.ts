import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// importar componentes
import { HomeComponent } from './home/home.component';
import { FavComponent } from './fav/fav.component';
import { SearchComponent } from './search/search.component';
// rutas
const routes: Routes = [
  // ruta vacia para indicar componente inicio
  { path: '', component: HomeComponent },
  { path: 'favoritos', component: FavComponent },
  { path: 'busqueda', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
