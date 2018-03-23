import { Component, Directive, HostBinding } from '@angular/core';
import { swingInAndOut } from '../triggers';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[animateSwingInAndOut]',
  animations: [swingInAndOut],
  template: `<ng-content></ng-content>`,
})
// tslint:disable-next-line:component-class-suffix
export class SwingInAndOutDirective {
  @HostBinding('@swingInAndOut') trigger = '';
  constructor() { }
}
