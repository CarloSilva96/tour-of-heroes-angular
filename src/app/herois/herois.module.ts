import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesHeroisComponent } from './components/detalhes-herois/detalhes-herois.component';
import { HeroisComponent } from './components/herois/herois.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroisRoutingModule } from './herois-routing.module';


@NgModule({
  declarations: [
    DetalhesHeroisComponent,
    HeroisComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HeroisRoutingModule
  ]
})
export class HeroisModule { }
