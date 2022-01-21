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
                            .pipe(
                              tap((herois) => this.logMsg(`Foram recebidos ${herois.length} heroi(s).`))
                            );
  }

  getHeroi(id: number): Observable<Heroi> {
    //this.mensagemService.addMensagem(`Retornado heroi com id = ${id}`)
    //const HEROI = this.herois //.find(heroi => heroi.id === id)!;
    return this.httpCliente.get<Heroi>(`${this.apiHeroisUrl}/${id}`)
                            .pipe(
                              tap((heroi) => this.logMsg(`Selecionado ${heroi.nome} #ID: ${heroi.id}`))
                            );
  }

  private logMsg(mensagem: string): void {
    this.mensagemService.addMensagem(`HeroiService: ${mensagem}`);
  }
}
