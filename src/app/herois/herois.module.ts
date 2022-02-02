import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesHeroisComponent } from './components/detalhes-herois/detalhes-herois.component';
import { HeroisComponent } from './components/herois/herois.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroisRoutingModule } from './herois-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetalhesHeroisComponent,
    HeroisComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    HeroisRoutingModule,
    ReactiveFormsModule,
  ]
})
export class HeroisModule { }
