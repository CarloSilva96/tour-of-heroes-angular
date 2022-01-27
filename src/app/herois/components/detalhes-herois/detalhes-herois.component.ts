import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Heroi } from "../../../core/models/heroi.model";
import { HeroiService } from "../../../core/services/heroi.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalhes-herois',
  templateUrl: './detalhes-herois.component.html',
  styleUrls: ['./detalhes-herois.component.scss']
})

export class DetalhesHeroisComponent implements OnInit{
  heroi!: Heroi;
  editando!: boolean;

  constructor(
    private heroiService: HeroiService,

    /* permite interagir com histórico do navegador */
    private location: Location,

    /* segura as informacoes sobre o momento onde a rota estiver */
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getHeroi();
  }

  getHeroi(): void {
    /* PEGA O ID DA URL NAQUELE MOMENTO */
    const PARAM_ID = this.route.snapshot.paramMap.get('id');

    if (PARAM_ID === 'new') {
      this.editando = false;
      /** Informando que heroi é do tipo Heroi mas nao recebe id na criação **/
      this.heroi = {
        nome: '',
        forcaFisica: ''
      } as Heroi;

    } else {
      this.editando = true;
      const ID = Number(PARAM_ID);
      this.heroiService.getHeroi(ID).subscribe( heroi => (this.heroi = heroi));
    }
  }

  voltar(): void {
    this.location.back();
  }

  formularioValido(): boolean {
    return !!this.heroi.nome.trim();
  }

  atualizarHeroi(): void {
    this.heroiService.atualizarHeroi(this.heroi).subscribe(() => this.voltar());
  }
  criarHeroi(): void {
    this.heroiService.criarHeroi(this.heroi).subscribe((heroi) => this.voltar());
  }
}
