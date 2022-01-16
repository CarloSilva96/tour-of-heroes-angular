import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HeroisComponent } from './herois/herois.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
