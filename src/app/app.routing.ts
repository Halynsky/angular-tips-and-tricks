import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ElementReferenceComponent } from './components/junior/2/element-reference.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'junior', loadChildren: './components/junior/junior.module#JuniorModule'},
  { path: 'middle', loadChildren: './components/middle/middle.module#MiddleModule'},
  { path: 'senior', loadChildren: './components/senior/senior.module#SeniorModule'},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);


