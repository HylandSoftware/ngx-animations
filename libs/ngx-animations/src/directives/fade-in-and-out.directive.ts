import { AnimationTriggerMetadata, transition, trigger, useAnimation } from '@angular/animations';
import { Component, Directive, HostBinding, Input, OnInit } from '@angular/core';
import { slideFadeIn, slideFadeOut, useSlideFadeInAnimation, useSlideFadeOutAnimation } from '../animations';
import { AnimationParams, AnimationTrigger } from '../models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[animateFadeInAndOut]',
  animations: [
    trigger('fadeInAndOut', [
      transition(':enter',
        useSlideFadeInAnimation('{{duration}}', '{{enterPosition}}'),
        {params: {duration: '200ms', enterPosition: '0px'}},
      ),
      transition(':leave',
        useSlideFadeOutAnimation('{{duration}}', '{{leavePosition}}'),
        {params: {duration: '200ms', leavePosition: '0px'}},
      ),
    ]),
  ],
  template: `<ng-content></ng-content>`,
})

// tslint:disable-next-line:component-class-suffix
export class FadeInAndOutDirective {
  @HostBinding('@fadeInAndOut') trigger: AnimationTrigger = {
    value: '',
    params: {},
  };

  @Input('animationDuration')
  set animationDuration(duration: string | number) {
    this.trigger.params.duration = duration;
  }

  @Input('animationEnterPosition')
  set animationEnterPosition(enterPosition: string ) {
    this.trigger.params.enterPosition = enterPosition;
  }

  @Input('animationLeavePosition')
  set animationLeavePosition(leavePosition: string ) {
    this.trigger.params.leavePosition = leavePosition;
  }

  constructor() { }
}
