import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedDependencyInjection } from './1/advanced-dependency-injection';
import { TopParentComp } from './1/ui-parent-comp';
import { DynamicComponentTemplate } from './2/dynamic-component-template';
import { TopLevelComp } from './2/dynamic-component-dom';
import { AdvancedTemplateExample } from './3/advanced-template';
import { SingleSlotTransclusion } from './4/single-slot-transclusion';
import { MultiSlotTransclusion } from './4/multi-slot-transclusion';
// import { AlexComponent} from './1/ui-parent-comp';


const seniorRoutes: Routes = [
  {path: '1_1', component: AdvancedDependencyInjection},
  {path: '1_2', component: TopParentComp},
  {path: '2_1', component: DynamicComponentTemplate},
  {path: '2_2', component: TopLevelComp},
  {path: '3_1', component: AdvancedTemplateExample},

  {path: '4_1', component: SingleSlotTransclusion},
  {path: '4_2', component: MultiSlotTransclusion},

];

export const seniorRouting: ModuleWithProviders = RouterModule.forChild(seniorRoutes);


