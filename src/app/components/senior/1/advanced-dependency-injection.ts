import { Component, Input } from '@angular/core';

@Component({
  selector: 'inner-di',
  template:
  '<div class="hero">' +
    '<span>{{hero.name}}</span>' +
    '<button>Add copy</button>' +
  '</div>',
  styles: ['.hero{background-color:deepskyblue; padding: 20px; border-bottom: 2px solid darkgrey}' +
            'span {margin-right: 16px}']
})
export class InnerComponent {
  @Input() public hero;

}


@Component({
  selector: 'advanced-di',
  template: '<ng-template ngFor [ngForOf]="heroes" let-hero="">' +
              '<inner-di [hero]="hero"></inner-di>' +
            '</ng-template>',
  styles: ['.heroes-wrapper {display: block; margin-top: 16px; width: 200px;} ']
})
export class AdvancedDependencyInjection {
  heroes = [{id: 0, name: "Hero-0"}, {id: 1, name: "Hero-1"}, {id: 2, name: "Hero-2"}];
}
