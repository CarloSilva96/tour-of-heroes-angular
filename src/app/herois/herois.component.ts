import { Component, OnInit } from '@angular/core';
import { Heroi } from '../models/heroi.model';
import { HEROIS } from '../mocks/mock-herois'
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.scss']
})
export class HeroisComponent implements OnInit {

  herois = HEROIS;

  constructor() { }

  ngOnInit(): void {
  }

  heroiSelecionado?: Heroi;

  selecionarHeroi(heroi: Heroi): void{
    this.heroiSelecionado = heroi;
  }

}
