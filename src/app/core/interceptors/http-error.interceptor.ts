import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { MensagemService } from '../services/mensagem.service';

/** Interceptor para pegar erros das requisicoes **/
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private mensagemService: MensagemService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      /** Capturando o error da requisicao **/
      catchError((err: HttpErrorResponse) => {
        let errorMsg = '';

        /** verificando se err é instancia de erro do tipo event **/
        if (err.error instanceof ErrorEvent) {
          errorMsg = `Erro: ${err.error.message}`
        }
        else {
          errorMsg = `Erro Código: ${err.status}, Mensagem: ${err.message}`
        }
        this.mensagemService.addMensagem(errorMsg);
        return throwError(() => new Error(errorMsg))
      })
    );
  }
}
