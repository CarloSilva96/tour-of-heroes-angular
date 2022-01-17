import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button'

import { AppComponent } from './app.component';
import { HeroisComponent } from './herois/herois.component';
import { DetalhesHeroisComponent } from './detalhes-herois/detalhes-herois.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MensagensComponent } from './mensagens/mensagens.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroisComponent,
    DetalhesHeroisComponent,
    MensagensComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
