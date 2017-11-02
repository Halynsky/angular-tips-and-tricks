import { Component } from '@angular/core';

@Component({
  selector: 'element-reference',
  template:   '<input type="email" name="email" [(ngModel)]="model.email" required #magicInput="ngModel">' +
              '<div class="error" *ngIf="magicInput.errors?.required">Please enter valid email</div>',
  styles: ['.error{color: red}']
})
export class ElementReferenceComponent {
  model = {
    email: ''
  };
}
