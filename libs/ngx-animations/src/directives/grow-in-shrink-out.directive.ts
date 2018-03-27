import { AnimationTriggerMetadata, transition, trigger, useAnimation } from '@angular/animations';
import { Component, Directive, HostBinding, Input } from '@angular/core';
import { useGrowInAnimation, useShrinkOutAnimation } from '../animations';
import { AnimationTrigger } from '../models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[animateGrowInShrinkOut]',
  animations: [
    trigger('growInShrinkOut', [
      transition(':enter',
        useGrowInAnimation('{{duration}}'),
        {params: {duration: '200ms'}},
      ),
      transition(':leave',
        useShrinkOutAnimation('{{duration}}'),
        {params: {duration: '200ms'}},
      ),
    ]),

  ],
  template: `<ng-content></ng-content>`,
})
// tslint:disable-next-line:component-class-suffix
export class GrowInShrinkOutDirective {
  @HostBinding('@growInShrinkOut') trigger: AnimationTrigger = {
    value: '',
    params: {},
  };

  @Input('animationDuration')
  set animationDuration(duration: string | number) {
    this.trigger.params.duration = duration;
  }
  constructor() { }
}
