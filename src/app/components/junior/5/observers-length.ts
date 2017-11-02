import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'magic-card-comp',
  template: '<div class="card-wrapper">' +
              '<div>Hello I am magic card with OK button</div>' +
              '<button *ngIf="okClick.observers.length" (click)="onClick()">OK</button>' +
            '</div>',
  styles: ['.card-wrapper { background-color: deepskyblue; padding: 20px; margin-bottom:8px;  border: 1px solid darkgrey}']
})
export class MagicCardComponent {
  @Output() okClick = new EventEmitter();
  onClick() {
    this.okClick.emit();
  }
}

@Component({
  selector: 'observers-length',
  template: '<magic-card-comp (okClick)="onOkClick()"></magic-card-comp>' +
            '<magic-card-comp></magic-card-comp>',
  styles: ['']
})
export class ObserversLengthComponent {
  onOkClick() {
    alert('Clicked!');
  }
}
