import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './shared/componentes/page-not-found/page-not-found.component';
import { CharacterService } from './characters/services/character.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        SharedModule.forRoot()
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    providers: [
        CharacterService
    ]
})
export class AppModule { }
