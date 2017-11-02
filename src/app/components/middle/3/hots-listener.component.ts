import { Component, Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'host-listener-comp',
  template: '<div class="wrapper" magic-directive>Hello {{name}}</div>',
  styles: ['.wrapper{padding: 20px; background-color: cornflowerblue; width: 200px} '],
  host: { '(click)': 'onClick($event)' }
})
export class HostListenerComponent {
  @HostBinding('style.color') @Input() color;
  public name: string = "World";

  @HostListener("mouseenter") onMouseEnter() { this.name = "Angular" }
  @HostListener("mouseleave") onMouseLeave() { this.name = "World" }
  onClick(event) { this.color = "firebrick" }

}

@Directive({
  selector: '[magic-directive]'
})
export class MagicDirective{

  @HostBinding('style.backgroundColor') bgColor = "bisque";

  constructor(private element: ElementRef, private renderer: Renderer2){
    this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
  }

  @HostListener("mouseenter") onMouseEnter() { this.bgColor = "coral" }
  @HostListener("mouseleave") onMouseLeave() { this.bgColor = "bisque" }

}


