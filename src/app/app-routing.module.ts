import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalhesHeroisComponent } from './detalhes-herois/detalhes-herois.component';
import { HeroisComponent } from './herois/herois.component';

const ROTAS: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'herois/:id', component: DetalhesHeroisComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'herois', component: HeroisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROTAS)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
