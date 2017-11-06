import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { seniorRouting } from './senior.routing';
import { FormsModule } from '@angular/forms';
import { AdvancedDependencyInjection, InnerComponent } from './1/advanced-dependency-injection';
import { HeroDIComp, UiParentComp } from './1/ui-parent-comp';


@NgModule({
  imports: [
    seniorRouting,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    AdvancedDependencyInjection, InnerComponent,
    UiParentComp, HeroDIComp
  ],
  providers: [

  ],
  exports: [

  ]
})
export class SeniorModule {
}



