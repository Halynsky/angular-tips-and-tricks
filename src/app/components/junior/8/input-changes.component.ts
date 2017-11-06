import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'hero-input-comp',
  template: '<div class="card-wrapper">' +
              'My name is {{heroName}}' +
              '<button (click)="updateInner()">Update Inner</button>' +
            '</div>',
  styles: ['.card-wrapper { background-color: deepskyblue; padding: 20px; margin-bottom:8px;  border: 1px solid darkgrey; width: 200px}']
})
export class HeroCardComponent implements OnChanges {

  public _heroName = 'Mario';
  @Output() heroNameChange: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  set heroName(value: string) {
    this._heroName = value;
    this.heroNameChange.emit(this._heroName);
  }
  get heroName() {
    return this._heroName;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  updateInner() { this.heroName = 'Superman'; }

}

@Component({
  selector: 'input-changes-comp',
  template: '<hero-input-comp [(heroName)]="name"></hero-input-comp>' +
            '<button (click)="update()">Update Outer</button>' +
            '<p>Outer component heroName: = {{name}}</p>',
  styles: ['']
})
export class InputChangesComponent{

  public name = 'Hulk';

  update() { this.name = 'Batman'; }

}
