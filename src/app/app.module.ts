import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeroisModule } from './herois/herois.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // IMPORTACOES PARA O @ANGULAR
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    // FEATURES DOS MODULOS
    DashboardModule,
    HeroisModule,

    // IMPORTACAO PARA TODA APLICACAO
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
