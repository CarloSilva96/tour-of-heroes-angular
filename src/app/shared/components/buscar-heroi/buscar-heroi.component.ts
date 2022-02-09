import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subject, switchMap} from "rxjs";
import {Heroi} from "../../../core/models/heroi.model";
import {HeroiService} from "../../../core/services/heroi.service";

@Component({
  selector: 'app-buscar-heroi',
  templateUrl: './buscar-heroi.component.html',
  styleUrls: ['./buscar-heroi.component.scss']
})
export class BuscarHeroiComponent implements OnInit {
  /** Variavel do tipo observable **/
  herois$!: Observable<Heroi[]>;
  @Input() label = '';

  private buscarTermos = new Subject<string>();

  constructor(
    private heroiService: HeroiService
  ) { }

  ngOnInit(): void {
    this.herois$ = this.buscarTermos.pipe(
      /** Pegando o valor atualizado de termo e passando para busca de heroi **/
      /** o switchMap usa intervalos para trabalhar com isso **/
      switchMap(termo => this.heroiService.buscarHeroi(termo))
    );
  }

  buscar(termo: string): void {
    /** Recebe o valor na variavel e vai atualizado o subject buscarTermos **/
    this.buscarTermos.next(termo);
  }

}
