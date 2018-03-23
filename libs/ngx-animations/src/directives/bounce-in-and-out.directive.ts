import { Component, Directive, HostBinding } from '@angular/core';
import { bounceInAndOut } from '../triggers';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[animateBounceInAndOut]',
  animations: [bounceInAndOut],
  template: `<ng-content></ng-content>`,
})
// tslint:disable-next-line:component-class-suffix
export class BoundeInAndOutDirective {
  @HostBinding('@bounceInAndOut') trigger = '';
  constructor() { }
}
