import {
  Component, ContentChild, Directive, ElementRef, HostListener, Input, QueryList, Renderer2, ViewChild,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'hello-card-comp',
  template: '<button (click)="change()">Change</button>' +
            '<ng-content></ng-content>',
  styles: ['button {display: block}']
})
export class HelloCardComponent {
  @ContentChild("greetingsContent") greetings: ElementRef;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  change() {
    this.greetings.nativeElement.textContent = "Hello ANGULAR!";
  }

}

@Component({
  selector: 'content-child-comp',
  template: '<hello-card-comp>' +
              '<h3>This is greetings Card</h3>' +
              '<h3 #greetingsContent>Hello World!</h3>' +
            '</hello-card-comp>',
  styles: [':host{display: inline-block; padding: 10px; width: 220px; background-color: cornflowerblue}']
})
export class ContentChildComponent {
}

