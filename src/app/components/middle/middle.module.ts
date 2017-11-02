import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { middleRouting } from './middle.routing';
import { FormsModule } from '@angular/forms';
import { MagicDirective, HostListenerComponent } from './3/hots-listener.component';
import { NativeElementComponent, RobotCardComponent } from './1/native-element.component';
import { ContentChildComponent, HelloCardComponent } from './2/content-children.component';
import { SelfDestroyWithForComponent } from './4/self-destroy-with-for';
import { ChangeDetectionComponent, XHeroCardComponent } from './5/change-detection';

@NgModule({
  imports: [
    middleRouting,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    NativeElementComponent, RobotCardComponent,
    ContentChildComponent, HelloCardComponent,
    HostListenerComponent, MagicDirective,
    SelfDestroyWithForComponent,
    ChangeDetectionComponent, XHeroCardComponent
    ],
  exports: [
    MagicDirective
  ]
})
export class MiddleModule {
}



