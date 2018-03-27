import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { slideFadeIn, slideFadeOut, useSlideFadeInAnimation, useSlideFadeOutAnimation } from 'ngx-animations';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [

    // The following is a custom trigger using animations from the package.
    // Use this approach if you need to customize the animation or use your own states.
    // Note that this trigger is not used in the demo site.
    trigger('enterFromLeftLeaveToRight', [
      // this transition uses a function that returns an animation with custom parameters.
      transition(':enter', useSlideFadeInAnimation('300ms', '20px')),
      // This transition uses useAnimation and passes the parameters directly - accomplishing the same thing as the above function.
      transition(':leave', useAnimation(slideFadeOut, {params: {time: '2000ms', endPos: '100px'}})),
    ]),
  ],
})
export class AppComponent {
  selectedAnimation = 'fade';
  listItems: Array<{id: number; title: string}> = [
    {id: 1, title: 'first item'},
    {id: 2, title: 'second Item'},
    {id: 3, title: 'third item'},
  ];
  count = 0;
  nextId = 4;

  constructor() {}

  replaceItem(itemName: string) {
    this.listItems = [{id: this.nextId++, title: itemName}, ...this.listItems.splice(1, this.listItems.length)];
  }

  removeItem(itemName: number) {
    this.listItems = this.listItems.filter(item => item.id !== itemName);
  }

  changeAnimation(newAnimation: string) {
    this.selectedAnimation = newAnimation;
  }

  addItem(itemName: string) {
    this.listItems = [{id: this.nextId++, title: itemName}, ...this.listItems];
  }
}
