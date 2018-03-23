import { Component, Directive, HostBinding } from '@angular/core';
import { fadeInAndOut } from '../triggers';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[animateFadeInAndOut]',
  animations: [fadeInAndOut],
  template: `<ng-content></ng-content>`,
})
// tslint:disable-next-line:component-class-suffix
export class FadeInAndOutDirective {
  @HostBinding('@fadeInAndOut') trigger = '';
  constructor() { }
}
