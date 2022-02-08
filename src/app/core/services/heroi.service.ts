import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroi } from '../models/heroi.model';
import { MensagemService } from './mensagem.service';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {

  herois: Heroi[] = [];

  private apiHeroisUrl = `${environment.baseUrl}/herois`;

  constructor(
    private httpCliente: HttpClient,
    private mensagemService: MensagemService
  ) { }

  getHerois(): Observable<Heroi[]> {
    // this.mensagemService.addMensagem("Heróis recebido!")
    return this.httpCliente.get<Heroi[]>(this.apiHeroisUrl)
                           .pipe(tap((herois) => this.logMsg(`Foram recebidos ${herois.length} heroi(s).`)));
  }

  getHeroi(id: number): Observable<Heroi> {
    return this.httpCliente.get<Heroi>(this.getUrl(id))
                           .pipe(tap((heroi) => this.logMsg(`Selecionado: ${this.descricaoAtributos(heroi)}`)));
  }

  atualizarHeroi(heroi: Heroi): Observable<Heroi> {
    return this.httpCliente.put<Heroi>(this.getUrl(heroi.id), heroi)
                           .pipe(tap((heroi) => this.logMsg(`Atulizado: ${this.descricaoAtributos(heroi)}`)));
  }

  criarHeroi(heroi: Heroi): Observable<Heroi> {
    return this.httpCliente.post<Heroi>(this.apiHeroisUrl, heroi)
                           .pipe(tap((heroi) => (this.logMsg(`Criado: ${this.descricaoAtributos(heroi)}`))));
  }

  excluirHeroi(heroi: Heroi): Observable<any> {
    return this.httpCliente.delete<any>(this.getUrl(heroi.id))
                           .pipe(tap(() =>  this.logMsg(`Excluído: ${this.descricaoAtributos(heroi)}`)));

  }

  private descricaoAtributos(heroi: Heroi): string {
    return `ID: ${heroi.id}, HEROI: ${heroi.nome}`;
  }

  private logMsg(mensagem: string): void {
    this.mensagemService.addMensagem(`HeroiService: ${mensagem}`);
  }

  private getUrl(id: Number): string {
    return `${this.apiHeroisUrl}/${id}`
  }
}
