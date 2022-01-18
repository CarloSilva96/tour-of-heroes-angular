import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  private mensagens: string[] = [];

  constructor() { }

  addMensagem(mensagem: string): void {
    this.mensagens.push(mensagem);
  }

  limparMensagens(): void {
    this.mensagens = [];
  }

  getMensagens(): string[] {
    return this.mensagens;
  }
}
