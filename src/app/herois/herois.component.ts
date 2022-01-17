import { Component, OnInit } from '@angular/core';
import { Heroi } from '../models/heroi.model';
import { HeroiService } from '../services/heroi.service';
@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.scss']
})
export class HeroisComponent implements OnInit {
  herois: Heroi[] = [];

  constructor(
    private heroiService: HeroiService
  ) { }

  ngOnInit(): void {
    this.setHerois();
  }

  heroiSelecionado?: Heroi;

  selecionarHeroi(heroi: Heroi): void{
    this.heroiSelecionado = heroi;
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
