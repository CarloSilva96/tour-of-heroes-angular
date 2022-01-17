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
}
