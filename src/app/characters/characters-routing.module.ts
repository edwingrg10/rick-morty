import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters-list/characters.component';
import { DetailCharacterComponent } from './characters-detail/detail-character.component';
import { LayoutComponent } from '../shared/componentes/layout/layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            {
                path: 'list', component: CharactersComponent
            }/* ,
            {
                path: 'detail-character/:id', component: DetailCharacterComponent
            } */
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CharactersRoutingModule { }
