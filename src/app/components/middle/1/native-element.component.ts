import { Component, Directive, ElementRef, HostListener, Input, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'robot-card-comp',
  template: '<div>{{name}}</div>',
  styles: ['div{padding: 8px; background-color: cornflowerblue; border: 1px solid grey;}']
})
export class RobotCardComponent {
  @Input() public name: string;
}

@Component({
  selector: 'native-element-comp',
  template: '<button (click)="changeWrapper()">Change Wrapper</button>' +
            '<button (click)="changeRobots()">Change Robots</button>' +
            '<button (click)="changeHost()">Change Host</button>' +
            '<div class="wrapper" #wrapper>Wrapper</div>' +
            '<robot-card-comp [name]="\'R2D2\'"></robot-card-comp>' +
            '<robot-card-comp [name]="\'C3P0\'"></robot-card-comp>',
  styles: [':host{display: inline-block; width: 220px;} ' +
           '.wrapper{padding: 8px; background-color: cornflowerblue}' +
           'button {display:block}']
})
export class NativeElementComponent {

  @ViewChild('wrapper') wrapper: any;
  @ViewChildren(RobotCardComponent) robots: QueryList<RobotCardComponent>;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  changeHost() { this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold') }
  changeWrapper() {  this.renderer.setStyle(this.wrapper.nativeElement, 'font-weight', 'bold') }
  changeRobots() { this.robots.forEach(robot => { robot.name = 'INVADER' }) }

}

