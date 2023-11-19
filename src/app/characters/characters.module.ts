import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters-list/characters.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CharacterService } from './services/character.service';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from '../shared/componentes/layout/layout.component';
import { HomeComponent } from '../shared/componentes/home/home.component';

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
    HomeComponent
  ],
  providers: [
    CharacterService
  ]
})
export class CharactersModule { }
