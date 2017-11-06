import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { seniorRouting } from './senior.routing';
import { FormsModule } from '@angular/forms';
import { AdvancedDependencyInjection, InnerComponent } from './1/advanced-dependency-injection';
import { TopParentComp, HeroDIComp, HeroesListComp,  } from './1/ui-parent-comp';
import { DynamicComponentTemplate, HeroDynamicComponent, HumanDynamicComponent } from './2/dynamic-component-template';
import { DynamicHero, TopLevelComp } from './3/dynamic-component-dom';
import { DynamicComponentService } from './3/dynamic-component-service';
import { AdvancedTemplateExample, MagicTable } from './4/advanced-template';

// import { AlexComponent, CathyComponent } from './1/ui-parent-comp';


@NgModule({
  imports: [
    seniorRouting,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    AdvancedDependencyInjection, InnerComponent,
    TopParentComp, HeroesListComp, HeroDIComp,
    DynamicComponentTemplate, HeroDynamicComponent, HumanDynamicComponent,
    TopLevelComp, DynamicHero,
    AdvancedTemplateExample, MagicTable
  ],
  providers: [
    DynamicComponentService
  ],
  exports: [

  ],
  entryComponents: [ HeroDynamicComponent , HumanDynamicComponent, DynamicHero ],
})
export class SeniorModule {
}



