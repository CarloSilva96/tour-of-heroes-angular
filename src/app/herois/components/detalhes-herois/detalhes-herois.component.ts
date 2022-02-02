import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Heroi } from "../../../core/models/heroi.model";
import { HeroiService } from "../../../core/services/heroi.service";
import { Location } from '@angular/common';
import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-detalhes-herois',
  templateUrl: './detalhes-herois.component.html',
  styleUrls: ['./detalhes-herois.component.scss']
})

export class DetalhesHeroisComponent implements OnInit{
  heroi!: Heroi;
  editando = false;

  formHeroi = this.formBuilder.group({
    id: [{ value: '', disabled: true }],
    forcaFisica: ['', [Validators.required, Validators.minLength(3)]],
    nome: ['', [Validators.required, Validators.minLength(3)] ]
  });

  constructor(
    private heroiService: HeroiService,
    /* permite interagir com histórico do navegador */
    private location: Location,
    /* segura as informacoes sobre o momento onde a rota estiver */
    private route: ActivatedRoute,
    /* maneira de trabalhar com formularios */
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getHeroi();
  }

  getHeroi(): void {
    /* PEGA O ID DA URL NAQUELE MOMENTO */
    const PARAM_ID = this.route.snapshot.paramMap.get('id');

    if (PARAM_ID !== 'new') {
      this.editando = true;
      const ID = Number(PARAM_ID);
      this.heroiService.getHeroi(ID).subscribe( heroi => {
        this.heroi = heroi;
        this.formHeroi.controls['id'].setValue(heroi.id)
        this.formHeroi.controls['nome'].setValue(heroi.nome)
        this.formHeroi.controls['forcaFisica'].setValue(heroi.forcaFisica)
      });
    }
  }

  voltar(): void {
    this.location.back();
  }

  atualizarHeroi(): void {
    const { valid, value } = this.formHeroi;
    if (valid) {
      const HEROI: Heroi = {
        id: this.heroi.id,
        nome: value.nome,
        forcaFisica: value.forcaFisica
      }
      this.heroiService.atualizarHeroi(HEROI).subscribe(() => this.voltar());
    } else {
      this.exibirError();
    }
  }

  criarHeroi(): void {
    const { valid, value } = this.formHeroi;
    if (valid) {
      const HEROI: Heroi = {
        nome: value.nome,
        forcaFisica: value.forcaFisica
      } as Heroi
      this.heroiService.criarHeroi(HEROI).subscribe((heroi) => this.voltar());
    } else {
      this.exibirError();
    }
  }

  exibirError(): void {
    this.snackBar.open('Por favor verifique os erros no formulário', 'Ok', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }
}
