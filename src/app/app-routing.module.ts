import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROTAS: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROTAS)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
