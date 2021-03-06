import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './hero';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './heros.services';


@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./styles/hero-details.component.css']
})


export class HeroDetailComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  @Input()
  hero: Hero;
}
