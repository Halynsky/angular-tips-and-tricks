import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostListenerComponent } from './3/hots-listener.component';
import { NativeElementComponent } from './1/native-element.component';
import { ContentChildComponent } from './2/content-children.component';
import { SelfDestroyWithForComponent } from './4/self-destroy-with-for';
import { ChangeDetectionComponent } from './5/change-detection';

const middleRoutes: Routes = [
  {path: '1', component: NativeElementComponent},
  {path: '2', component: ContentChildComponent},
  {path: '3', component: HostListenerComponent},
  {path: '4', component: SelfDestroyWithForComponent},
  {path: '5', component: ChangeDetectionComponent}
];

export const middleRouting: ModuleWithProviders = RouterModule.forChild(middleRoutes);


