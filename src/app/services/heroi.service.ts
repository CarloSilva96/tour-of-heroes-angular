import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HEROIS } from '../mocks/mock-herois'
import { Heroi } from '../models/heroi.model';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {

  herois = HEROIS;

  constructor() { }

  getHerois(): Observable<Heroi[]> {
    const herois = of(HEROIS)
    return herois;
  }
}
