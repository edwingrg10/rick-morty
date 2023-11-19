import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/componentes/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/characters/characters.module').then(mod => mod.CharactersModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('../app/characters/characters.module').then(mod => mod.CharactersModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
