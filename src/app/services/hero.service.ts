import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../in-memory-data.service';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MassangerService} from './massanger.service';

@Injectable()
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.massanger.setMessage('Heroes list have been fetched.');
    return  of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(hero => hero.id === id));
  }

  constructor(private massanger: MassangerService) { }

}
