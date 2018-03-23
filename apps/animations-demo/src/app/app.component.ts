import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { bounceInAndOut, enterAndLeaveFromLeft, enterAndLeaveFromRight, fadeInAndOut,
  fadeInThenOut, growInShrinkOut, slideFadeIn, slideFadeOut,
  swingInAndOut, useSlideFadeInAnimation, useSlideFadeOutAnimation } from 'ngx-animations';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    // The following are pre-built triggers - Use these to add animations with the least work
    growInShrinkOut, fadeInThenOut, swingInAndOut, fadeInAndOut,
    enterAndLeaveFromLeft, enterAndLeaveFromRight, bounceInAndOut,

    // The following is a custom trigger using animations from the package
    // Use this approach if you need to customize the animation or use your own states
    trigger('enterFromLeftLeaveToRight', [
      // this transition uses a function that returns an animation with custom parameters
      transition(':enter', useSlideFadeInAnimation('300ms', '20px')),
      // This transition uses useAnimation and passes the parameters directly - accomplishing the same thing as the above function
      transition(':leave', useAnimation(slideFadeOut, {params: {time: '2000ms', endPos: '100px'}})),
    ]),
  ],
})
export class AppComponent {
  selectedAnimation = 'fade';
  numbers: number[] = [];
  count = 0;
  constructor() {}
  add() {
    this.numbers = [ this.numbers.length, ...this.numbers];
    this.count = this.numbers.length;
  }
  remove() {
    this.numbers = this.numbers.splice(1, this.numbers.length);
    this.count = this.numbers.length;
  }
  replace() {
    this.numbers = [499 + this.count, ...this.numbers.splice(1, this.numbers.length)];
  }
  changeAnimation(newAnimation: string) {
    this.selectedAnimation = newAnimation;
  }
}
