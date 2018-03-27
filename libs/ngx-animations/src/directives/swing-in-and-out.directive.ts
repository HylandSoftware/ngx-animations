import { transition, trigger } from '@angular/animations';
import { Component, Directive, HostBinding, Input } from '@angular/core';
import { useSwingInAnimation, useSwingOutAnimation } from '../animations';
import { AnimationTrigger } from '../models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[animateSwingInAndOut]',
  animations: [
    trigger('swingInAndOut', [
      transition(':enter', useSwingInAnimation('{{duration}}'), {params: {duration: '200ms'}}),
      transition(':leave', useSwingOutAnimation('{{duration}}'), {params: {duration: '200ms'}}),
    ]),
  ],
  template: `<ng-content></ng-content>`,
})
// tslint:disable-next-line:component-class-suffix
export class SwingInAndOutDirective {
  @HostBinding('@swingInAndOut')  trigger: AnimationTrigger = {
    value: '',
    params: {},
  };

  @Input('animationDuration')
  set animationDuration(duration: string | number) {
    this.trigger.params.duration = duration;
  }
  constructor() { }
}
