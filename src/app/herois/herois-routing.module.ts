import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesHeroisComponent } from './components/detalhes-herois/detalhes-herois.component';
import { HeroisComponent } from './components/herois/herois.component';

const ROTAS: Routes = [
  { path: 'herois', component: HeroisComponent },
  { path: 'herois/:id', component: DetalhesHeroisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROTAS)],
  exports: [RouterModule]
})
export class HeroisRoutingModule { }
