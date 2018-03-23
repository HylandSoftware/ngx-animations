import { Component, Directive, HostBinding } from '@angular/core';
import { growInShrinkOut } from '../triggers';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[animateGrowInShrinkOut]',
  animations: [growInShrinkOut],
  template: `<ng-content></ng-content>`,
})
// tslint:disable-next-line:component-class-suffix
export class GrowInShrinkOutDirective {
  @HostBinding('@growInShrinkOut') trigger = '';
  constructor() { }
}
