import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarHeroiComponent } from './components/buscar-heroi/buscar-heroi.component';
import {MaterialModule} from "../material/material.module";

const COMPONENTS = [
  BuscarHeroiComponent,
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    COMPONENTS
  ],
})
export class SharedModule { }
