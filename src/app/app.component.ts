import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { growInShrinkOut, fadeInThenOut, swingInAndOut, fadeInAndOut,
  enterAndLeaveFromLeft, enterAndLeaveFromRight, bounceInAndOut } from '../triggers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [ growInShrinkOut, fadeInThenOut, swingInAndOut,
    fadeInAndOut, enterAndLeaveFromLeft, enterAndLeaveFromRight, bounceInAndOut ] ,
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
