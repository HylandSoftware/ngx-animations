import { transition, trigger } from '@angular/animations';
import { Component, Directive, HostBinding, Input } from '@angular/core';
import { useBounceInUpAnimation, useBounceOutDownAnimation } from '../animations';
import { AnimationTrigger } from '../models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[animateBounceInAndOut]',
  animations: [
    trigger('bounceInAndOut', [
      transition(':enter',
        useBounceInUpAnimation('{{duration}}'),
        {params: {duration: '200ms'}},
      ),
      transition(':leave',
        useBounceOutDownAnimation('{{duration}}'),
        {params: {duration: '200ms'}},
      ),
    ]),
  ],
  template: `<ng-content></ng-content>`,
})
// tslint:disable-next-line:component-class-suffix
export class BoundeInAndOutDirective {
  @HostBinding('@bounceInAndOut') trigger: AnimationTrigger = {
    value: '',
    params: {},
  };

  @Input('animationDuration')
  set animationDuration(duration: string | number) {
    this.trigger.params.duration = duration;
  }
  constructor() { }
}
