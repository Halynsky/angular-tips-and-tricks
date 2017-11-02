import { Component, Input } from '@angular/core';

@Component({
  selector: 'magic-style-comp',
  template: '<div [style.font-size.px]="fontSize">{{text}}</div>',
  styles: ['div { background-color: deepskyblue; padding: 20px; margin-bottom:8px;  border: 1px solid darkgrey}']
})
export class MagicStyleComponent {
  @Input()
  public text: string;
  @Input()
  public fontSize: number;
}

@Component({
  selector: 'style-with-unit-component',
  template: '<magic-style-comp [text]="\'First component\'" [fontSize]="12"></magic-style-comp>' +
            '<magic-style-comp [text]="\'Second component\'" [fontSize]="18"></magic-style-comp>',
  styles: ['']
})
export class StyleWithUnitComponent {
}
