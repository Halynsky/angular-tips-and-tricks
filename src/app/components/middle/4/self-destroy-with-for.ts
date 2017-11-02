import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ng-for-of-comp',
  template: '<div class="heroes-wrapper">' +
              '<ng-template ngFor [ngForOf]="heroes" let-hero="" let-i="index" [ngForTrackBy]="trackByFn">' +
                '<div class="hero">' +
                  '{{hero.name}}' +
                  '<button (click)="destroy(hero.id)">Destroy</button>' +
                '</div>' +
              '</ng-template>' +
            '</div>',
  styles: ['.heroes-wrapper {display: block; margin-top: 16px; width: 160px;} button {margin-left: 8px}' +
  '.hero{display: block; background-color:deepskyblue; padding: 20px; border-bottom: 2px solid grey} '],
})
export class SelfDestroyWithForComponent {
  heroes = [{id: 0, name: "Hero-0"}, {id: 1, name: "Hero-1"}, {id: 2, name: "Hero-2"}];

  trackByFn(index, item) {
    return item.id;
  }

  destroy(id) {
    this.heroes = this.heroes.filter(item => item.id != id);
  }

}
