import { Component, OnInit } from '@angular/core';
import { LoadingPaginaService } from '../../services/loading-pagina.service';

@Component({
  selector: 'app-loading-pagina',
  templateUrl: './loading-pagina.component.html',
  styleUrls: ['./loading-pagina.component.scss']
})
export class LoadingPaginaComponent {

  constructor(
    public loadingPaginaService: LoadingPaginaService
  ) { }
}
