import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostListenerComponent } from './3/hots-listener.component';
import { NativeElementComponent } from './1/native-element.component';
import { ContentChildComponent } from './2/content-children.component';
import { SelfDestroyWithForComponent } from './4/self-destroy-with-for';
import { ChangeDetectionComponent } from './5/change-detection';
import {
  CanActivateAdminGuard,
  CanActivateAuthGuard, GuardsAdminExampleComponent, GuardsExampleComponent,
  GuardsUserExampleComponent
} from './6/guards-example.component';
import { RunOutsideAngularExample } from './7/run-outside-angular-example';
import { ForkJoinExample } from './8/fork-join-example';

const middleRoutes: Routes = [
  {path: '1', component: NativeElementComponent},
  {path: '2', component: ContentChildComponent},
  {path: '3', component: HostListenerComponent},
  {path: '4', component: SelfDestroyWithForComponent},
  {path: '5', component: ChangeDetectionComponent},
  {path: '6', component: GuardsExampleComponent},
  {path: '6/user', component: GuardsUserExampleComponent, canActivate: [CanActivateAuthGuard]},
  {path: '6/admin', component: GuardsAdminExampleComponent, canActivate: [CanActivateAuthGuard, CanActivateAdminGuard]},
  {path: '7', component: RunOutsideAngularExample},
  {path: '8', component: ForkJoinExample}
];

export const middleRouting: ModuleWithProviders = RouterModule.forChild(middleRoutes);


