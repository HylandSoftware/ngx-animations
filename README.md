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
|bounceInAndOut  |
|growInShrinkOut |
|enterAndLeaveFromRight|
|enterAndLeaveFromLeft|
|fadeInAndOut    |
|swingInAndOut   |

### FadeInThenOut trigger
Unlike the other triggers, the fadeInThenOut trigger is triggered by a change in value. The value must be set when the trigger is added to the template:
