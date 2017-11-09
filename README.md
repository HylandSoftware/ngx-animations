# NgAnimationsPackage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Using ng-animations-package

### Just give me animations!
For greatest simplicity, import 'fadeInAndOutTrigger'. Ad it to the component, and add the 'fadeInAndOut' virtual directive to a dom element.
```typescript
@Component({
  selector: 'my-component',
  animations: [fadeInAndOutTrigger ]
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
      transition(':enter', useAnimation(slideFadeIn,  { params: { time: '500ms', slide: '30px' }})),
      transition(':leave', useAnimation(slideFadeOut, { params: { time: '1000ms', slide: '-10px' }})),
    ])
  ]
})
```