import { Component, OnInit} from '@angular/core';
import {Hero} from '../../hero';
import {HeroService} from '../../services/hero.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero;
  constructor(private heroService: HeroService, private route: ActivatedRoute) {
    heroService.getHero(+this.route.snapshot.paramMap.get('id')).subscribe(hero => this.hero = hero);
  }

  ngOnInit() {
  }

}
