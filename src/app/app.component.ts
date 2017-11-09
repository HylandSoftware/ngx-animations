import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { swingInAndOut, fadeInThenOut } from '../animations';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  animations: [ swingInAndOut, fadeInThenOut ] ,
})
export class AppComponent {
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
    this.numbers = [500 + this.count, ...this.numbers.splice(1, this.numbers.length)]
  }
}
