import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-buscar-heroi',
  templateUrl: './buscar-heroi.component.html',
  styleUrls: ['./buscar-heroi.component.scss']
})
export class BuscarHeroiComponent implements OnInit {
  @Input() label = '';
  constructor() { }

  ngOnInit(): void {
  }

}
