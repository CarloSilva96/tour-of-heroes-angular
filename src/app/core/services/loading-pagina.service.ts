import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/** SERVICE QUE CONTROLA A EXIBICAO DO LOADING DE CARREGAMENTO EM CADA PAGINA **/
export class LoadingPaginaService {
  /** ATRIBUTO DO TIPO BEHAVIOR SUBJECT - PODE SER SETADO VALOR INICIAL - POSSO TRABALHAR COM OS VALORES DENTRO DA VARIAVEL **/
  private loadingSubject = new BehaviorSubject<boolean>(false);

  /**
    loading é do tipo Observable, ou seja, ele fica observando qualquer alteração *
    que aconteça em loadingSubject quando for alterado ou recebido alguma coisa o loading
    tem acesso a isso pois é um Observable
  **/
  loading$: Observable<boolean> = this.loadingSubject.asObservable();



  ocultarLoading(): void {
    /** COLOCA O VALOR DO loading$ COMO FALSE**/
    this.loadingSubject.next(false);
  }

  exibirLoading(): void {
    /** COLOCA O VALOR DO loading$ COMO TRUE**/
    this.loadingSubject.next(true);
  }
}
