## Directives Workaround Notice

The directives in this folder use a workaround which is required until [this issue](https://github.com/angular/angular/issues/9947) is completed

### The Issue
You cannot add animations to a directive's decorator.

### The Workaround
Make a faux-directive by creating a component that only has an attribute selector (eg. `[myDirective]`) and that has a template of `<ng-content></ng-content>`