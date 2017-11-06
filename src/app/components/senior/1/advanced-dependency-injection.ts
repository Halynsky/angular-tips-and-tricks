import { Component, Host, Input, Self, SkipSelf } from '@angular/core';

export class Hero {
  public name: string;
  public type: string;
  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }
}

@Component({
  selector: 'advanced-di',
  template: `<inner-di></inner-di>`,
  providers: [{provide: Hero, useValue: new Hero('Parent Hero', 'LEGENDARY')}]
})
export class AdvancedDependencyInjection {}

@Component({
  selector: 'inner-di',
  template: `<div class="hero"><span>{{hero.name}} | {{hero.type}}</span></div>`,
  styles: [`.hero{background-color:deepskyblue; width: 200px;
            padding: 20px; border-bottom: 2px solid darkgrey}
            span {margin-right: 16px}`],
  providers: [{provide: Hero, useValue: new Hero('Child Hero', 'NEWBIE')}]
})
export class InnerComponent {

  constructor(
    public hero: Hero,
    @Host() public hero1: Hero,
    @Self() public hero2: Hero,
    @SkipSelf() public hero3: Hero,
  ) {
    console.log(hero);
    console.log(hero1);
    console.log(hero2);
    console.log(hero3);
  }

}
