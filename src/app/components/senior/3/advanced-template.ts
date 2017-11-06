import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'advanced-template-example',
  template: `<ng-template let-hero="hero" #magicRowTemplate>
               <div>I am <strong>{{hero.name}}</strong> | {{hero.type}}</div>
             </ng-template>
             <magic-table [heroes]="heroes" [rowTemplate]="magicRowTemplate"></magic-table>`,
  styles: [``]
})
export class AdvancedTemplateExample {
  heroes = [{id: 0, name: "Hero-0", type: "NEWBIE"}, {id: 1, name: "Hero-1", type: "SUPERHERO"}, {id: 2, name: "Hero-2", type: "SUPERHERO"}];
}

@Component({
  selector: 'magic-table',
  template: `<div class="tittle">Magic Table</div>
              <ng-template ngFor [ngForOf]="heroes" let-hero="" >
                <ng-container *ngTemplateOutlet="rowTemplate; context: {hero: hero}" ></ng-container>
              </ng-template>`
})
export class MagicTable {
  @Input() rowTemplate: any;
  @Input() heroes = [];
}
