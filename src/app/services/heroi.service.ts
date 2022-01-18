import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HEROIS } from '../mocks/mock-herois'
import { Heroi } from '../models/heroi.model';
import { MensagemService } from './mensagem.service';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {

  herois = HEROIS;

  constructor(
    private mensagemService: MensagemService
  ) { }

  getHerois(): Observable<Heroi[]> {
    const herois = of(HEROIS)
    this.mensagemService.addMensagem("HeroiService: Heróis recebido!")
    return herois;
  }

  getHeroi(id: number): Observable<Heroi> {
    /* ! NO FINAL INDICA PARA CASO NAO EXISTA ALGUM ID INFORMADO */
    const HEROI = this.herois.find(heroi => heroi.id === id)!;
    this.mensagemService.addMensagem(`HeroService: Encontrado heroi com id = ${id}`)
    return of(HEROI);
  }
}
