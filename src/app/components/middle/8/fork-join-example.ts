import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, NgZone, OnChanges, OnDestroy, OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'fork-join-example',
  template: '<div class="heroes-wrapper">' +
              '<ng-template ngFor [ngForOf]="heroes" let-hero="">' +
                '<div class="hero">' +
                  '<span>{{hero.name}}</span>' +
                  '<select [(ngModel)]="hero.type">' +
                    '<ng-template ngFor [ngForOf]="heroTypes" let-heroType="">' +
                      '<option [value]="heroType">{{heroType}}</option>' +
                    '</ng-template>' +
                  '</select>' +
                '</div>' +
              '</ng-template>' +
            '</div>',
  styles: ['.heroes-wrapper {display: block; margin-top: 16px; width: 200px;} ' +
           '.hero{background-color:deepskyblue; padding: 20px; border-bottom: 2px solid darkgrey}' +
           'span {margin-right: 16px}']
})
export class ForkJoinExample {

  // Simulation of XHR
  heroesResponse = [{id: 0, name: "Hero-0", type: "NEWBIE"}, {id: 1, name: "Hero-1", type: "SUPERHERO"}, {id: 2, name: "Hero-2", type: "SUPERHERO"}];
  heroTypesResponse  = ['NEWBIE', 'SUPERHERO', 'LEGENDARY'];

  heroes = [];
  heroTypes = [];

  getHeroTypes: Observable<any> = Observable.of(this.heroTypesResponse).delay(2000);
  getHeroes: Observable<any> = Observable.of(this.heroesResponse).delay(1000);

  constructor() {
    Observable.forkJoin([this.getHeroTypes, this.getHeroes])
      .subscribe(data => {
        this.heroTypes = data[0];
        this.heroes = data[1];
      });
  }

}
