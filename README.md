# NgAnimationsPackage

## Included Animations
(default params shown in examples)
### Animations with special parameters
| Animation Name |  Parameters | Example |
|----------------|-------------|---------|
|SlideFadeIn     |time, startPos|```useAnimation(slideFadeIn, {params: {time: '200ms', startPos:'100%'}})```|
|SlideFadeOut|time, endPos|```useAnimation(slideFadeOut, {params:{time: '200ms', endPos: '100%'}})```|

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
useAnimation(growIn, {params:{time: '200ms'}})
```

## Using ng-animations-package

### Just give me animations!
For greatest simplicity, import a trigger such as `fadeInAndOutTrigger`. Add it to the component, and add `[@fadeInAndOut]` to a dom element.
```typescript
@Component({
  selector: 'my-component',
  animations: [fadeInAndOut ]
})
```

(and in the template)
```html
<a [@fadeInAndOut]></a>
```
### Give me more control!
for more granular customizability, import slideFadeIn and slideFadeOut animations. These animations can then be added to whatever trigger you choose:
```typescript
@Component({
  selector: 'my-component',
  animations: [   
    trigger('myTriggerName', [
    transition(':enter', useAnimation(slideFadeIn)),
    transition(':leave', useAnimation(slideFadeOut))
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
      transition(':enter', useAnimation(slideFadeIn,  { params: { time: '500ms', startPos: '300px' }})),
      transition(':leave', useAnimation(slideFadeOut, { params: { time: '1000ms', endPost: '-100px' }})),
    ])
  ]
})
```