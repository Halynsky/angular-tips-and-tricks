import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'x-hero-card',
  template: '<div class="hero">' +
               '{{hero.name}}' +
             '</div>',
  styles: ['.hero{display: block; background-color:deepskyblue; padding: 20px; border-bottom: 2px solid grey} '],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XHeroCardComponent implements OnInit {
  @Input() public hero$: Observable<any>;
  public hero;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.hero$.subscribe((value) => {
      this.hero = value;
      this.changeDetectorRef.markForCheck();
    });
  }

}

@Component({
  selector: 'change-detection-comp',
  template: '<div class="heroes-wrapper">' +
              '<button (click)="update()">Update</button>' +
                '<x-hero-card [hero$]="hero$">' +
                '</x-hero-card>' +
            '</div>',
  styles: ['.heroes-wrapper {display: block; margin-top: 16px; width: 250px;} button {margin: 8px}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent {
  hero$ = new BehaviorSubject({id: 0, name: "Hero-0"});

  update() {
    this.hero$.value.name = "Hero-Y";
    this.hero$.next(this.hero$.getValue())

  }

}
