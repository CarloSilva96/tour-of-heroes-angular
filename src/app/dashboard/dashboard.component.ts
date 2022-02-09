import { Component, OnInit } from '@angular/core';
import { Heroi } from '../core/models/heroi.model';
import { HeroiService } from '../core/services/heroi.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  herois: Heroi[] = [];

  constructor(
    private heroiService: HeroiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setHerois();
  }

  setHerois(): void {
    this.heroiService.getHerois().subscribe(herois => {
      this.herois = herois.slice(1, 5);
    });
  }

  onSelect(heroi: Heroi): void {
    /** Abrindo show do heroi selecionado **/
    this.router.navigate([`/herois/${heroi.id}`])
  }
}
