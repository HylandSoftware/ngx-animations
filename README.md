# @ngWeb/animations
NgAnimationsPackage is the quickest way to get started with Angular animations - without writing your own animations!

## Using @ngweb/animations

### Just give me animations!
For greatest simplicity, import a trigger such as `fadeInAndOut`. Add it to the component, and add `[@fadeInAndOut]` to the DOM element that you would like to animate.
```typescript
@Component({
  selector: 'my-component',
  animations: [ fadeInAndOut ]
})
```
```html
<a [@fadeInAndOut]></a>
```
### Give me more control!
for more granular customizability, import useSlideFadeIn and useSlideFadeOut animations. These animations can then be added to whatever trigger you choose:
```typescript
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

When importing the animations, you can even add parameters to adjust the duration and other properties of the animation:
```typescript
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

## Included Triggers
All of the following triggers include animations described by the trigger. 
The animations are triggered when the element leaves or exits the DOM.

|  Trigger Name  |
|----------------|
| bounceInAndOut  |
| growInShrinkOut |
| enterAndLeaveFromRight |
| enterAndLeaveFromLeft |
| fadeInAndOut    |
| swingInAndOut   |

### FadeInThenOut trigger
Unlike the other triggers, the fadeInThenOut trigger is triggered by a change in value. The value must be set when the trigger is added to the template:


## Demo App
Follow these instructions to run the demo app.

1. Clone the repository to your local machine
2. From the project folder, run `npm install` to install all required dependencies
3. Run `ng serve` to serve the project from a live-updating server.
4. Go to `localhost:4200` to see the demo site

## Contributing
Contributions are welcome! Continue reading for instructions on how to contribute.

### Branching

All work should be done in a branch (not the master).

Bitbucket web interface (https://bitbucket.hylandqa.net/projects/OB/repos/ngweb-animations/branches):
1. Click on the three dots (to the left of the "filter branches" box) and click "Create branch from here"
2. Fill in the information and click "create branch"
3. If you have not yet done so, clone the project to your local machine
4. In VS Code, make sure you have the project opened. (If you're not using VS Code, you're on your own)
5. Run `git fetch` to make sure you have the latest branches available
6. Click the branch name in the bottom left and select your newly created branch from the list

Once your branch is created, you can make your desired changes to the code.

### Commit Message
When you are happy with the changes you have made, commit the updated code to the repository. Commit messages should follow the [material commit message guidelines](https://bitbucket.hylandqa.net/projects/OB/repos/ngweb-animations/branches). It is recommended that you install the [commitizen](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen) VS Code extension to help. Alternatively, run `npm run commit` to commit from the command line.

### Contribution Ideas
Want to contribute, but not sure where to start? Here are some suggestions
* Take a look at [animations.css]() for inspiration. You can also use the transitions on that site as a starting point for your animations
* Make some emphasis transitions. Currently all animations run when the element is added to a view. There could be plenty of uses for animations that transition from an active to inactive state, or for emphasizing elements.
* Currently, all animations grow and shrink in height, but not in width. See if shrinking width in the current animations works well, or add separate animations that shrink on the X axis.