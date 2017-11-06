import { DynamicComponentService } from '../2/dynamic-component-service';
import { Component } from '@angular/core';

@Component({
  selector: 'multi-slot-transclusion',
  template: `<adv-card>
               <div card-header>Magic Header</div>
               <div card-body>Magic Content</div>
               <div card-footer>Magic Footer</div>
             </adv-card>`
})
export class MultiSlotTransclusion {}

@Component({
  selector: 'adv-card',
  template: `<div class="card">
               <!-- add the select attribute to ng-content -->
               <div class="card-header" >
                 <ng-content select="[card-header]" ></ng-content>
               </div>
               <ng-content select="[card-body]"></ng-content>
               <div class="card-footer" >
                 <ng-content select="[card-footer]"></ng-content>
               </div>
            </div>`,
  styles: [`.card{width:200px} 
            .card-header {background-color:antiquewhite} 
            .card-footer {background-color:cadetblue}`]
})
export class AdvCard {}
