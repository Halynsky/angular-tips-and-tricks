import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, NgZone, OnChanges, OnDestroy, OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'hover-block',
  template: '<div class="block" [style.backgroundColor]="bgColor" #block></div>',
  styles: ['.block{display: block; height: 100px; width: 100px}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HoverBlockComponent implements OnInit, OnDestroy{

  @Input() public bgColor: string = 'red';
  @ViewChild('block') block: ElementRef;

  constructor(private ngZone: NgZone,) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.block.nativeElement.addEventListener('mousemove', this.onMouseMove, false);
    });
  }

  ngOnDestroy() {
    this.block.nativeElement.removeEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove() {
    console.log("Inner onMouseMove")
  }

}

@Component({
  selector: 'run-outside-angular-example',
  template: '<hover-block ></hover-block>',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RunOutsideAngularExample {
}
