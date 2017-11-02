import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { juniorRouting } from './junior.routing';
import { MagicTagAttrComp, TagVsAttributeComponent } from './1/tag-vs-attribute.component';
import { ElementReferenceComponent } from './2/element-reference.component';
import { FormsModule } from '@angular/forms';
import { MagicStyleComponent, StyleWithUnitComponent } from './4/style-with-unit';
import { MagicCardComponent, ObserversLengthComponent } from './5/observers-length';
import { IteratorsAndCSComponent } from './6/iterators-and-cs';
import { NgForOfComponent } from './6/ng-for-of';
import { NgSwitchComponent } from './6/ng-switch';
import { NgIfElseComponent } from './6/ng-if-else';

@NgModule({
  imports: [
    juniorRouting,
    CommonModule,
    FormsModule
  ],
  declarations: [
    TagVsAttributeComponent, MagicTagAttrComp,
    ElementReferenceComponent,
    StyleWithUnitComponent, MagicStyleComponent,
    ObserversLengthComponent, MagicCardComponent,
    IteratorsAndCSComponent, NgForOfComponent,
    NgSwitchComponent,
    NgIfElseComponent
    ]
})
export class JuniorModule {
}



