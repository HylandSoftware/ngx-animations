# ngx-animations
ngx-animations is the quickest way to get started with Angular animations - without writing your own animations!

Specifically, this package specializes in animations that can be used when adding or removing items from a list.

You can view a demo of the site [here](https://ngx-animations-demo.firebaseapp.com/).

## Using ngx-animations

### Just give me animations!
First, import the animations into the appropriate module.
```typescript
import { NgxAnimationsModule } from 'ngx-animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [ 
    BrowserAnimationsModule, // This module is required for all Angular animations.
    NgxAnimationsModule, // This module is only needed when using the animation directives.
  ],
})
export class AppModule { }
```
Then just add the appropriate animation directive to the element you wish to animate.
```html
<a animateFadeInAndOut>Something I want to animate</a>
```
The element will now animate when it is added or removed from the DOM.

You can also change some of the animation's options
```html
<a animateFadeInAndOut [animationEnterPosition]="-50px" [animationLeavePosition]="100%" [animationDuration]="500ms">
  Something I want to animate
</a>
```
The `fadeInAndOut` animation has the options shown above. All other animations only include the `animationDuration` option.

### Give me more control!
For more granular customizability, import useSlideFadeIn and useSlideFadeOut animations. These animations can then be added to whatever trigger you choose:
```typescript
import { useSlideFadeInAnimation, useSlideFadeOutAnimation } from 'ngx-animations';
@Component({
  selector: 'my-component',
  animations: [   
    trigger('myTriggerName', [
    transition(':enter', useSlideFadeInAnimation()),
    transition(':leave', useSlideFadeOutAnimation())
  ])
})
```
and in the template:
```html
<a [@myTriggerName]></a>
```

When importing the animations, you can add parameters to adjust the duration and other properties of the animation:
```typescript
import { useSlideFadeInAnimation, useSlideFadeOutAnimation } from 'ngx-animations';

@Component({
  selector: 'my-component',
  animations: [
    trigger('myTriggerName', [
      transition(':enter', useSlideFadeInAnimation('500ms', '300px') ),
      transition(':leave', useSlideFadeOutAnimation('1000ms', '-100px')),
    ])
  ]
})
```

rather than using the `useAnimationNameAnimation` functions included in this package, you could instead use Angular's `useAnimation` function, passing the appropriate parameters like so:

```typescript
import { slideFadeIn, slideFadeOut } from 'ngx-animations';

@Component({
  selector: 'my-component',
  animations: [
    trigger('myTriggerName', [
      transition(':enter', useAnimation(slideFadeIn, { params: { time: '500ms', startPos: '300px' }})),
      transition(':leave', useAnimation(slideFadeOut)),
    ])
  ]
})
```

The result will be the same whether you use `useAnimation` or `useAnimationNameAnimation`. 

## Included Animations
(default parameters shown in examples)
### Animations with special parameters
| Animation Name |  Parameters | Example |
|----------------|-------------|---------|
|SlideFadeIn     |time, startPos|```useSlideFadeInAnimation('200ms','100%')```|
|SlideFadeOut|time, endPos|```useSlideFadeOutAnimation('200ms','100%')```|
all parameters are optional.

### Animations with no extra parameters
The following animations only have a time parameter

| Animation Name |
|----------------|
|     growIn     |
|    shrinkOut   |
|     swingIn    |
|    swingOut    |
|   bounceInUp   |
|  bounceOutDown |

#### Example
```typescript
useGrowInAnimation('200ms')
```
or
```typescript
useAnimation(growIn, {params:{time: '200ms'}})
```

## Demo App
Follow these instructions to run the demo app.

1. Clone the repository to your local machine
2. From the project folder, run `npm install` to install all required dependencies
3. Run `ng serve` to serve the project from a live-updating server.
4. Go to `localhost:4200` to see the demo site

## Contributing
Contributions are welcome! Continue reading for instructions on how to contribute.

### Commit Message
When you are happy with the changes you have made, commit the updated code to the repository. Commit messages should follow the [material commit message guidelines](https://github.com/angular/material2/blob/master/CONTRIBUTING.md#-commit-message-guidelines). It is recommended that you install the [commitizen](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen) VS Code extension to help. Alternatively, run `npm run commit` to commit from the command line.

### Contribution Ideas
Want to contribute, but not sure where to start? Here are some suggestions
* Take a look at [animate.css](https://github.com/daneden/animate.css) for inspiration. You can also use the transitions on that site as a starting point for your animations
* Make some emphasis transitions. Currently all animations run when the element is added to a view. There could be plenty of uses for animations that transition from an active to inactive state, or for emphasizing elements.
* Currently, all animations grow and shrink in height, but not in width. See if shrinking width in the current animations works well, or add separate animations that shrink on the X axis.

### Deploying
The deploy script will not work for anyone who is not signed in to my firebase account. If there is a change to the demo app, tag me (Benjamin Kindle) in an issue.

## Tips
* If you want to fade between two elements without shrinking and growing, 
add `position:absolute` and `max-height: [some-height]px` to the proper elements. 
See the cat picture in the demo site for an example.
