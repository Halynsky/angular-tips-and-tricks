import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { seniorRouting } from './senior.routing';
import { FormsModule } from '@angular/forms';
import { AdvancedDependencyInjection, InnerComponent } from './1/advanced-dependency-injection';
import { TopParentComp, HeroDIComp, HeroesListComp,  } from './1/ui-parent-comp';
import { DynamicComponentTemplate, HeroDynamicComponent, HumanDynamicComponent } from './2/dynamic-component-template';
import { DynamicHero, TopLevelComp } from './2/dynamic-component-dom';
import { DynamicComponentService } from './2/dynamic-component-service';
import { AdvancedTemplateExample, MagicTable } from './3/advanced-template';
import { SingleSlotCard, SingleSlotTransclusion } from './4/single-slot-transclusion';
import { AdvCard, MultiSlotTransclusion } from './4/multi-slot-transclusion';

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
    AdvancedTemplateExample, MagicTable,
    SingleSlotTransclusion, SingleSlotCard,
    MultiSlotTransclusion, AdvCard
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



