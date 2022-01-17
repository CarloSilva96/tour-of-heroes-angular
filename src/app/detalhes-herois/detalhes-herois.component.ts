import { Component, Input } from "@angular/core";
import { Heroi } from "../models/heroi.model";

@Component({
  selector: 'app-detalhes-herois',
  templateUrl: './detalhes-herois.component.html',
  styleUrls: ['./detalhes-herois.component.scss']
})

export class DetalhesHeroisComponent {
  /** Input permite variavel receber dados de outros componentes **/
  @Input() heroi?: Heroi
}
