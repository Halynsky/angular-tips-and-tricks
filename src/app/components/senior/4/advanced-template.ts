import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'advanced-template-example',
  template: `<ng-template let-name="name" let-type="type" #magicRowTemplate>
              I am {{name}} | {{type}}
             </ng-template>
             <magic-table [name]="'Superman'" [type]="'NEWBIE'" [rowTemplate]="magicRowTemplate"></magic-table>`,
  styles: [``]
})
export class AdvancedTemplateExample {
  heroes = [{id: 0, name: "Hero-0", type: "NEWBIE"}, {id: 1, name: "Hero-1", type: "SUPERHERO"}, {id: 2, name: "Hero-2", type: "SUPERHERO"}];
}

@Component({
  selector: 'magic-table',
  template: `<div class="tittle">Magic Table</div>
             <ng-container *ngTemplateOutlet="rowTemplate; context: ctx" ></ng-container>`,
  styles: [`.hero{background-color:deepskyblue; padding: 20px; width: 200px}`]
})
export class MagicTable {
  @Input() name: string ='test';
  @Input() type: string ='test';
  @Input() rowTemplate: any;
  ctx = {name: this.name, type: this.type};
}
