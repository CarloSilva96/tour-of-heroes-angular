import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesHeroisComponent } from './components/detalhes-herois/detalhes-herois.component';
import { HeroisComponent } from './components/herois/herois.component';

const ROTAS: Routes = [
  /** ROTA INICIAL AO ENTRAR NE COMPONENTE /herois**/
  { path: '', component: HeroisComponent },
  { path: ':id', component: DetalhesHeroisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROTAS)],
  exports: [RouterModule]
})
export class HeroisRoutingModule { }
