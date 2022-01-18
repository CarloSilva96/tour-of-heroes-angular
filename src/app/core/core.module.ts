import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MensagensComponent } from './components/mensagens/mensagens.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  MensagensComponent,
  ToolbarComponent
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
  exports: [MODULES, COMPONENTS]
})
export class CoreModule {
  /** Bloqueando para que o CoreModule não seja importando em outros módulos **/
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule já foi carregado. Já foi importado em AppModule');
    }
  }
}
