import { Component, OnInit } from '@angular/core';
import { Heroi } from '../models/heroi.model';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.scss']
})
export class HeroisComponent implements OnInit {

  heroi: Heroi = {
    id: 1,
    nome: 'Batman'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
