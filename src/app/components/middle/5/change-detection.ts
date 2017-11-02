import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'x-hero-card',
  template: '<div class="hero">' +
               '{{heroName}}' +
             '</div>',
  styles: ['.hero{display: block; background-color:deepskyblue; padding: 20px; border-bottom: 2px solid grey} '],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XHeroCardComponent {
  @Input() heroName;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

}

@Component({
  selector: 'change-detection-comp',
  template: '<div class="heroes-wrapper">' +
              '<button (click)="update()">Update</button>' +
              '<ng-template ngFor [ngForOf]="heroes" let-hero="" let-i="index" >' +
                '<x-hero-card [heroName]="hero.name">' +
                '</x-hero-card>' +
              '</ng-template>' +
            '</div>',
  styles: ['.heroes-wrapper {display: block; margin-top: 16px; width: 250px;} button {margin: 8px}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent {
  heroes = [{id: 0, name: "Hero-0"}, {id: 1, name: "Hero-1"}, {id: 2, name: "Hero-2"}];

  update() {
    this.heroes[0].name = "Hero-Y" ;
    this.heroes.push({id: 3, name: "Hero-3"});
    // this.heroes.slice(0);
  }

}
