import { Component, OnInit } from '@angular/core';
import { Heroi } from '../../../core/models/heroi.model';
import { HeroiService } from '../../../core/services/heroi.service';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.scss']
})
export class HeroisComponent implements OnInit {
  herois: Heroi[] = [];
  atributosHerois: string[] = ['id', 'nome', 'excluir'];

  constructor(
    private heroiService: HeroiService
  ) { }

  ngOnInit(): void {
    this.setHerois();
  }

  setHerois(): void {
    this.heroiService.getHerois().subscribe(
      herois =>  this.herois = herois
    );
  }

  excluirHeroi(heroi: Heroi): void {
    this.heroiService.excluirHeroi(heroi).subscribe(() => {
      /** Atualizando lista usando filter
        this.herois = this.herois.filter((h) => h != heroi)
      **/
      /** Atualizando lista usando o setHerois **/
      this.setHerois();
    });
  }


}
