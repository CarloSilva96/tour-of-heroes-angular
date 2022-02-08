import { Component, OnInit } from '@angular/core';
import { Heroi } from '../../../core/models/heroi.model';
import { HeroiService } from '../../../core/services/heroi.service';
import {ConfirmarDialog} from "../../../core/models/confirmar-dialog.model";
import {timeout} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ConfimarDialogComponent} from "../../../core/components/confimar-dialog/confimar-dialog.component";

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.scss']
})
export class HeroisComponent implements OnInit {
  herois: Heroi[] = [];
  atributosHerois: string[] = ['id', 'nome', 'excluir'];

  constructor(
    private matDialog: MatDialog, /** adicionando matDialog para usar caixa de dialogo de confirmacao ao exlcuir **/
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
    const DIALOG_DADOS: ConfirmarDialog =  {
      cancelarTexto: "Cancelar",
      confirmarTexto: "Confirmar",
      conteudo: `Deseja realmente excluir o herói ${heroi.nome}?`
    }

    /** CHAMANDO COMPONENT DO DIALOG DE MSG AO EXCLUIR E PASSANDO OS DADOS PARA EXIBIR NO COMPONENT **/
    const DIALOG_REFERENCIA = this.matDialog.open(ConfimarDialogComponent, {
      position: {
        top: '50px'
        /** left, right, bottom **/
      },
      data: DIALOG_DADOS,
      width: '400px'
    });

    /** PEGANDO RETORNO AO CLICAR EM CONFIRMAR(TRUE) OU FECHAR(FALSE) COM ISSO É FEITO EXCLUSÃO OU CANCELA EXCLUSÃO **/
      DIALOG_REFERENCIA.afterClosed().subscribe(resultado => {
        if (resultado) {
          this.heroiService.excluirHeroi(heroi).subscribe(() => {
            /** Atualizando lista usando filter  this.herois = this.herois.filter((h) => h != heroi) **/
            this.setHerois(); /** Atualizando lista usando o setHerois **/
          });
        }
      });
  }


}
