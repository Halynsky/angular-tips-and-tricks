import { Component } from '@angular/core';

@Component({
  selector: 'magic-tag-attr-comp, [magic-tag-attr-comp]',
  template: '<div>I am MagicTagAttrComp</div>',
  styles: ['div { background-color: deepskyblue; padding: 20px; margin-bottom:8px;  border: 1px solid darkgrey}']
})
export class MagicTagAttrComp {
}

@Component({
  selector: 'app-tag-vs-attribute',
  template:
    '<magic-tag-attr-comp></magic-tag-attr-comp>' +
    '<div magic-tag-attr-comp></div>',
  styles: ['']
})
export class TagVsAttributeComponent {
}


