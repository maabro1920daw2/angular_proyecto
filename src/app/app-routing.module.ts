import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// importar componentes
import { FavComponent } from './fav/fav.component';
import { SearchComponent } from './search/search.component';
import { GameComponent } from './home/game/game.component';
import { HomeComponent } from './home/home.component'
// rutas
const routes: Routes = [
  // ruta vacia para indicar componente inicio loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  { path: '',  component: HomeComponent, data: {animation: 'paginaInicio'}},
  { path: 'favoritos', component: FavComponent, data: {animation: 'paginaFavoritos'} },
  { path: 'busqueda', component: SearchComponent, data: {animation: 'paginaBusqueda'} },
  { path: 'juego/:id', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
