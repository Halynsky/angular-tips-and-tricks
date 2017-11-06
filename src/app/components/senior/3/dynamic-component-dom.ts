import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef, Input, Component, OnInit, Host
} from '@angular/core';
import { DynamicComponentService } from './dynamic-component-service';



@Component({
  selector: 'top-level-comp',
  template: `<div class="hero">Top Level Component</div>`
})
export class TopLevelComp {
  constructor(dynamicComponentService: DynamicComponentService) {
    setTimeout(() => {
      dynamicComponentService.appendComponentToBody(DynamicHero);
    }, 2000);
  }

}

@Component({
  selector: 'dynamic-hero',
  template: `<div class="hero">I AM HERO!</div>`,
  styles: [`.hero{background-color:deepskyblue; padding: 20px; width: 200px}`]
})
export class DynamicHero{}
