import { Component, Host, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'hero-di',
  template:
  '<div class="hero">' +
    '<span>{{hero.name}}</span>' +
    '<button>Add copy</button>' +
  '</div>',
  styles: ['.hero{background-color:deepskyblue; padding: 20px; ' +
           'border-bottom: 2px solid darkgrey; width: 200px;}' +
           'span {margin-right: 16px}']
})
export class HeroDIComp {
  @Input() public hero;

  constructor(@Host() private uiParentComp: UiParentComp){

  }

  addCopy(){
    this.uiParentComp.addHero('hi');
  }

}

@Component({
  selector: 'advanced-di',
  template: '<ng-template ngFor [ngForOf]="heroes" let-hero="">' +
              '<hero-di [hero]="hero"></hero-di>' +
            '</ng-template>',
  styles: ['']
})
export class UiParentComp {
  heroes = [{id: 0, name: "Hero-0"}, {id: 1, name: "Hero-1"}, {id: 2, name: "Hero-2"}];
  addHero(hero) {
    console.log('ADD HERO')
    // this.heroes.push(hero)
  }

}

@Component({
  selector: 'other-comp',
})
export class OtherParentComp {}

