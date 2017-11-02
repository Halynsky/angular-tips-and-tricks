import { Component } from '@angular/core';

enum HeroType {NEWBIE = "NEWBIE", SUPERHERO  = "SUPERHERO", LEGENDARY = "LEGENDARY"}

@Component({
  selector: 'ng-switch',
  template: '<ng-template ngFor [ngForOf]="heroes" let-hero [ngForTrackBy]="trackByFn">' +
                '<div class="hero-card-wrapper" [ngSwitch]="hero.type">' +
                  '<div class="hero-card" *ngSwitchCase="HeroType.NEWBIE">' +
                    '{{hero.name}}' +
                  '</div>' +
                  '<div class="hero-card" *ngSwitchCase="HeroType.SUPERHERO">' +
                    '{{hero.name}}, {{hero.type}}' +
                  '</div>' +
                  '<div class="hero-card" *ngSwitchCase="HeroType.LEGENDARY">' +
                    '{{hero.name}}, {{hero.type}}, &#9733;' +
                  '</div>' +
                '</div>' +
            '</ng-template>',
  styles: ['.hero-card-wrapper{display: inline-block} .hero-card {background-color:deepskyblue; padding: 20px; border: 2px solid darkgrey; line-height: 100%;}']
})
export class NgSwitchComponent {
  HeroType = HeroType;
  heroes = [{id: 0, name: "Hero-0", type:HeroType.NEWBIE}, {id: 1, name: "Hero-1", type:HeroType.SUPERHERO}, {id: 2, name: "Hero-2", type:HeroType.LEGENDARY}];

  trackByFn(index, item) {
    return item.id;
  }

}
