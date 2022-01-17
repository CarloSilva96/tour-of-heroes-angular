import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroisComponent } from './herois/herois.component';

const ROTAS: Routes = [
  { path: 'herois', component: HeroisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROTAS)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
