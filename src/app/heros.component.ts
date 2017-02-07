import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './heros.services';
import { Router } from '@angular/router';

@Component({
  selector: 'my-hero',
  template: `
  <h1>{{title}}</h1>
  <div *ngIf="selectedHero">
    <h2>
      {{selectedHero.name | uppercase}} is my hero
    </h2>
    <button (click)="gotoDetail()">View Details</button>
  </div>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes" 
      [class.selected]="hero === selectedHero"
      (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  `,
  styleUrls: ['./app/styles/heroes.component.css'],
})

export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];
  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .then(res => {
        this.heroes = res;
      });
  }

  gotoDetails(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}