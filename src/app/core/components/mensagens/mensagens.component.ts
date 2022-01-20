import { Component, OnInit } from '@angular/core';
import { MensagemService } from '../../services/mensagem.service';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html'
})
export class MensagensComponent {

  constructor(
    public mensagemService: MensagemService
  ) { }

  ngOnInit(): void {
  }

}
