import { Component, OnInit } from '@angular/core';
import { Heroi } from '../models/heroi.model';
import { HeroiService } from '../services/heroi.service';
import { MensagemService } from '../services/mensagem.service';
@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.scss']
})
export class HeroisComponent implements OnInit {
  herois: Heroi[] = [];
  atributosHerois: string[] = ['id', 'nome'];

  constructor(
    private heroiService: HeroiService
  ) { }

  ngOnInit(): void {
    this.setHerois();
  }

  setHerois(): void {
    this.heroiService.getHerois().subscribe(
      herois => {
        this.herois = herois;
      },
      error => {
        console.log("Erro ao receber dados");
      }
    );
  }

}
