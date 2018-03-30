import { NgModule } from '@angular/core';
import { BoundeInAndOutDirective, FadeInAndOutDirective,
  GrowInShrinkOutDirective, SwingInAndOutDirective } from './directives';

const ALL_DIRECTIVES = [
  FadeInAndOutDirective,
  BoundeInAndOutDirective,
  GrowInShrinkOutDirective,
  SwingInAndOutDirective,
];

@NgModule({
  declarations: ALL_DIRECTIVES,
  exports: ALL_DIRECTIVES,
})
export class NgxAnimationsModule {
}
