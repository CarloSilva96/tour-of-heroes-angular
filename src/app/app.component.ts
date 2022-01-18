import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
  menuItens: MenuItem[] = [
    {
      icone: 'dashboard',
      routerLink: '/dashboard',
      toolTipText: 'Dashboard'
    },
    {
      icone: 'sports_martial_arts',
      routerLink: '/herois',
      toolTipText: 'Herois'
    }
  ]
}
