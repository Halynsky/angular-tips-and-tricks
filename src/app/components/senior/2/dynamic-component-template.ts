import {
  Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Host, Input, OnInit, Optional, ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'dynamic-component-template',
  template: `<button (click)="createHeroComponent()">Create Hero</button>
             <button (click)="createHumanComponent()">Create Human</button>
             <ng-template #container></ng-template>`,
})
export class DynamicComponentTemplate {
  @ViewChild("container", { read: ViewContainerRef }) container;
  constructor(private resolver: ComponentFactoryResolver){

  }

  createHeroComponent(){
    this.createDynamucComponent(HeroDynamicComponent)
  }

  createHumanComponent() {
    this.createDynamucComponent(HumanDynamicComponent)
  }

  createDynamucComponent(component: any) {
    this.container.clear();
    let factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(component);
    let componentRef: ComponentRef<any> = this.container.createComponent(factory);
  }
}

@Component({
  selector: 'hero-dynamic-comp',
  template: `<div>I Am Hero => {{name}}</div>`,
})
export class HeroDynamicComponent {
  public name: string = 'Superman'
}

@Component({
  selector: 'human-dynamic-comp',
  template: `<div>I Am Human => {{name}}</div>`,
})
export class HumanDynamicComponent {
  public name: string = 'Taras'
}

