import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters-list/characters.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersLayoutModule } from './characters-layout/characters-layout.module';
import { SharedModule } from '../shared/shared.module';
import { CharacterService } from './services/character.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CharactersRoutingModule,
    CharactersLayoutModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [
    CharactersComponent
  ],
  providers: [
    CharacterService
  ]
})
export class CharactersModule { }
