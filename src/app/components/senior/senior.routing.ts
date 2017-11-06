import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedDependencyInjection } from './1/advanced-dependency-injection';
import { UiParentComp } from './1/ui-parent-comp';


const seniorRoutes: Routes = [
  {path: '1_1', component: AdvancedDependencyInjection},
  {path: '1_2', component: UiParentComp},

];

export const seniorRouting: ModuleWithProviders = RouterModule.forChild(seniorRoutes);


