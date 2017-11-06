import { Component, Host, Input, OnInit, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'top-parent-comp',
  template: `<heroes-list>
               <hero-item [heroName]="'Superman'"></hero-item>
               <hero-item [heroName]="'Batman'"></hero-item>
             </heroes-list>`,
})
export class TopParentComp {}

@Component({
  selector: 'heroes-list',
  template: `<div>Heroes<div>
             <ng-content></ng-content>`,
})
export class HeroesListComp {
  id = 0;
  heroes = [];
  addHero(heroName) {
    console.log('Registering new hero => ' + heroName);
    this.heroes.push({id: this.id++, name: heroName});
    console.log('heroes =>' + JSON.stringify(this.heroes))
  }

}

@Component({
  selector: 'hero-item',
  template: `<div class="hero">
              <span>{{heroName}}</span>
            </div>`,
  styles: ['.hero{background-color:deepskyblue; padding: 20px; ' +
           'border-bottom: 2px solid darkgrey; width: 200px;}' +
           'span {margin-right: 16px}']
})
export class HeroDIComp implements OnInit{
  @Input() public heroName;

  constructor(@Host() public heroesListComp: HeroesListComp){}

  ngOnInit(): void {
    this.heroesListComp.addHero(this.heroName);
  }

}


