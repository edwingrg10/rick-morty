import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters-list/characters.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CharacterService } from './services/character.service';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from '../shared/componentes/layout/layout.component';
import { HomeComponent } from '../shared/componentes/home/home.component';
import { FilterComponent } from '../shared/componentes/filter/filter.component';
import { DetailCharacterComponent } from './characters-detail/detail-character.component';

@NgModule({
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [
    CharactersComponent,
    LayoutComponent,
    HomeComponent,
    FilterComponent,
    DetailCharacterComponent
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [
    DetailCharacterComponent
  ]
})
export class CharactersModule { }
