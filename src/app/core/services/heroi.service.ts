import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Heroi } from '../models/heroi.model';
import { MensagemService } from './mensagem.service';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {

  herois: Heroi = {
    id: 0,
    nome: '',
    forcaFisica: ''
  };

  private apiHeroisUrl = 'api/herois'

  constructor(
    private httpCliente: HttpClient,
    private mensagemService: MensagemService
  ) { }

  getHerois(): Observable<Heroi[]> {
    return this.httpCliente.get<Heroi[]>(this.apiHeroisUrl);
    // this.mensagemService.addMensagem("Heróis recebido!")
  }

  getHeroi(id: number): Observable<Heroi> {
    /* ! NO FINAL INDICA PARA CASO NAO EXISTA ALGUM ID INFORMADO */
    const HEROI = this.herois //.find(heroi => heroi.id === id)!;
    this.mensagemService.addMensagem(`Retornado heroi com id = ${id}`)
    return of(HEROI);
  }

  private logMsg(mensagem: string): void {
    this.mensagemService.addMensagem(`HeroiService: ${mensagem}`);
  }
}
