import { Component, Directive, HostBinding } from '@angular/core';
import { enterAndLeaveFromRight } from '../triggers';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[animateDirectionInAndOut]',
  animations: [enterAndLeaveFromRight],
  template: `<ng-content></ng-content>`,
})
// tslint:disable-next-line:component-class-suffix
export class DirectionInAndOutDirective {
  @HostBinding('@enterAndLeaveFromRight') trigger = '';
  constructor() { }
}
