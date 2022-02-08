import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MensagensComponent } from './components/mensagens/mensagens.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LoadingPaginaComponent } from './components/loading-pagina/loading-pagina.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { ConfimarDialogComponent } from './components/confimar-dialog/confimar-dialog.component';

const COMPONENTS = [
  ConfimarDialogComponent,
  MensagensComponent,
  PaginaNaoEncontradaComponent,
  ToolbarComponent,
  LoadingPaginaComponent,
];

const MODULES = [
  MaterialModule,
  FlexLayoutModule,
  RouterModule
];

@NgModule({
  /* coreModule está declarando alguns components para o projeto */
  declarations: [COMPONENTS],
  /* coreModule está importando Material */
  imports: [CommonModule, MODULES],
  /* coreModule está exportando o Material e os Components permitindo que seja usado em outros
  componentes */
  exports: [MODULES, COMPONENTS],
  /** Passando arrays de interceptors **/
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true // Pode ter mais de um interceptor
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  /** Bloqueando para que o CoreModule não seja importando em outros módulos **/
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule já foi carregado. Já foi importado em AppModule');
    }
  }
}
