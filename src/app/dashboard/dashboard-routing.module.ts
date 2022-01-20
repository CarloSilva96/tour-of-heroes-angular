import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

// CONFIGURACAO DE ROTAS
const ROTAS: Routes = [
  /** ROTA INICIAL AO ENTRAR NE COMPONENTE /dashboard **/
  { path: '', component: DashboardComponent },
];

// ADICIONADO AS ROTAS DESSE MODULO COMO ROTAS FILHAS A ROTA ROOT
@NgModule({
  imports: [RouterModule.forChild(ROTAS)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
