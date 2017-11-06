import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { middleRouting } from './middle.routing';
import { FormsModule } from '@angular/forms';
import { MagicDirective, HostListenerComponent } from './3/hots-listener.component';
import { NativeElementComponent, RobotCardComponent } from './1/native-element.component';
import { ContentChildComponent, HelloCardComponent } from './2/content-children.component';
import { SelfDestroyWithForComponent } from './4/self-destroy-with-for';
import { ChangeDetectionComponent, XHeroCardComponent } from './5/change-detection';
import { AuthService } from './auth.service';
import {
  CanActivateAdminGuard,
  CanActivateAuthGuard, GuardsAdminExampleComponent, GuardsExampleComponent,
  GuardsUserExampleComponent
} from './6/guards-example.component';
import { HoverBlockComponent, RunOutsideAngularExample } from './7/run-outside-angular-example';
import { ForkJoinExample } from './8/fork-join-example';

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
    ChangeDetectionComponent, XHeroCardComponent,
    GuardsExampleComponent, GuardsUserExampleComponent, GuardsAdminExampleComponent,
    RunOutsideAngularExample, HoverBlockComponent,
    ForkJoinExample
    ],
  providers: [
    AuthService,
    CanActivateAuthGuard,
    CanActivateAdminGuard
  ],
  exports: [
    MagicDirective
  ]
})
export class MiddleModule {
}



