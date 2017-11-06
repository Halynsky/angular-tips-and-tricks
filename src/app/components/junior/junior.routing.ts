import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementReferenceComponent } from './2/element-reference.component';
import { TagVsAttributeComponent } from './1/tag-vs-attribute.component';
import { StyleWithUnitComponent } from './4/style-with-unit';
import { ObserversLengthComponent } from './5/observers-length';
import { IteratorsAndCSComponent } from './6/iterators-and-cs';
import { NgForOfComponent } from './6/ng-for-of';
import { NgSwitchComponent } from './6/ng-switch';
import { NgIfElseComponent } from './6/ng-if-else';
import { ProgrammaticPipeComponent } from './7/programmatic-pipe.component';
import { InputChangesComponent } from './8/input-changes.component';

const juniorRoutes: Routes = [
  {path: '1', component: TagVsAttributeComponent},
  {path: '2', component: ElementReferenceComponent},
  {path: '3', component: ElementReferenceComponent},
  {path: '4', component: StyleWithUnitComponent},
  {path: '5', component: ObserversLengthComponent},

  {path: '6', component: IteratorsAndCSComponent},
  {path: '6/ngForOf', component: NgForOfComponent},
  {path: '6/ngSwitch', component: NgSwitchComponent},
  {path: '6/ngIfElse', component: NgIfElseComponent},
  {path: '7', component: ProgrammaticPipeComponent},
  {path: '8', component: InputChangesComponent}

];

export const juniorRouting: ModuleWithProviders = RouterModule.forChild(juniorRoutes);


