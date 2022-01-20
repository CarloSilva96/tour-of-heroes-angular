import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './core/components/pagina-nao-encontrada/pagina-nao-encontrada.component';

const ROTAS: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  /** (LAZY LOADING/CARREGAMENTO POR DEMANDA) PARA MODULO DE DASHBOARD **/
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module') // importando modulo dashboard
                        .then((modulo) => (modulo.DashboardModule)) // retornando modulo dashboard para ser carregado
  },

  /** (LAZY LOADING/CARREGAMENTO POR DEMANDA) PARA MODULO DE HEROIS **/
  {
    path: 'herois',
    loadChildren: () => import('./herois/herois.module') // importando modulo herois
                        .then((modulo) => (modulo.HeroisModule)) // retornando modulo herois para ser carregado

  },

  /** ROTA PARA PAGINA NAO ENCONTRADA **/
  {
    path: '**',
    component: PaginaNaoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROTAS)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
