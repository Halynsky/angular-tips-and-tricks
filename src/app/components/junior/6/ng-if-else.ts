import { Component } from '@angular/core';

@Component({
  selector: 'ng-if-else',
  template: '<div *ngIf="hero.active || hero.online || hero.enabled; else else_content">' +
              'If content here ...' +
            '</div>' +
            '<ng-template #else_content>Else content here...</ng-template>',
  styles: ['']
})
export class NgIfElseComponent {

  hero = {id: 0, name: "Hero-0", active:true, online:true, enabled:true};

}
