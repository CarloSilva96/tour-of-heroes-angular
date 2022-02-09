import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, Subject, switchMap} from "rxjs";
import {Heroi} from "../../../core/models/heroi.model";
import {HeroiService} from "../../../core/services/heroi.service";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-buscar-heroi',
  templateUrl: './buscar-heroi.component.html',
  styleUrls: ['./buscar-heroi.component.scss']
})
export class BuscarHeroiComponent implements OnInit {
  /** Variavel do tipo observable **/
  herois$!: Observable<Heroi[]>;

  /** Input indica que recebe dado de um componente pai **/
  @Input() label = '';

  /** Output indica que esse dado será mandado de volta para o componente que chama esse **/
  @Output() private heroiSelecionado = new EventEmitter<Heroi>();

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

  /** metodo que recebe o valor selecionado do autoComplete **/
  onSelect(heroiSelecionado: MatAutocompleteSelectedEvent): void {
    /** Limpando subject após heroi ser selecionado **/
    this.buscarTermos.next('');

    const HEROI: Heroi = heroiSelecionado.option.value;

    /** Emitindo um evento e enviado o valor para quem estiver ouvido esse componente **/
    /** nesse caso é passado o heroi como valor **/
    this.heroiSelecionado.emit(HEROI);
  }
}
