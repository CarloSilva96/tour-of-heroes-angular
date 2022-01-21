import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingPaginaService } from '../services/loading-pagina.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private requisicoesAtivas = 0;

  constructor(
    private loadingPaginaService: LoadingPaginaService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    /** Começa o loading da pagina a requisicao **/
    if (this.requisicoesAtivas === 0) {
      this.loadingPaginaService.exibirLoading();
    }

    /** Adicionando requisicoes ativas **/
    this.requisicoesAtivas++;

    return next.handle(request).pipe(
      finalize(() => {
        /** Retirando requisição após ser completada seja com erro ou sucesso **/
        this.requisicoesAtivas--;

        /** Termina o loading após ser finalizada a requisicao **/
        if (this.requisicoesAtivas === 0) {
          this.loadingPaginaService.ocultarLoading();
        }
      })
    );
  }
}
