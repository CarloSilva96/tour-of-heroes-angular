import { Component, OnInit } from '@angular/core';
import { Heroi } from '../models/heroi.model';
import { HeroiService } from '../services/heroi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  herois: Heroi[] = [];

  constructor(
    private heroiService: HeroiService
  ) { }

  ngOnInit(): void {
    this.setHerois();
  }

  setHerois(): void {
    this.heroiService.getHerois().subscribe(herois => {
      this.herois = herois.slice(1, 5);
    });
  }

}
