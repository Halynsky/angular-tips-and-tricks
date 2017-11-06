import { DynamicComponentService } from '../2/dynamic-component-service';
import { Component } from '@angular/core';

@Component({
  selector: 'single-slot-transclusion',
  template: `<simple-card>Card content</simple-card>`
})
export class SingleSlotTransclusion {}

@Component({
  selector: 'simple-card',
  template: `<div class="card">
              <div class="card-header">
                  This is header
              </div>
              <!-- single slot transclusion here -->
              <ng-content></ng-content>
              <div class="card-footer">
                  This is footer
              </div>
            </div>`,
  styles: [`.card{width:200px} 
            .card-header {background-color:antiquewhite} 
            .card-footer {background-color:cadetblue}`]
})
export class SingleSlotCard {}
