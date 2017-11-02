import { Component } from '@angular/core';

@Component({
  selector: 'ng-for-of-comp',
  template: '<button (click)="getHeroes()">Reload data</button>' +
            '<div class="heroes_wrapper">' +
              '<ng-template ngFor [ngForOf]="heroes" let-hero="$implicit" let-i="index" let-even="even" let-last="last" [ngForTrackBy]="trackByFn">' +
                '<div [ngClass]="{\'last\': last, \'even\': even}" class="hero">{{hero.name}}</div>' +
              '</ng-template>' +
            '</div>',
  styles: ['.heroes_wrapper {display: flex; margin-top: 16px} .hero{background-color:deepskyblue; padding: 20px; border-right: 5px solid darkgrey} .last{border-right: none} .even{background-color:cornflowerblue; }']
})
export class NgForOfComponent {
  heroes = [{id: 0, name: "Hero-0"}, {id: 1, name: "Hero-1"}, {id: 2, name: "Hero-2"}];

  getHeroes() {
    let data = [];
    for (let i = 0; i < this.heroes.length + 1; i++) {
      data.push({id: i, name: "Hero-" + i})
    }
    this.heroes = data;
  }

  trackByFn(index, item) {
    return item.id;
  }

}
