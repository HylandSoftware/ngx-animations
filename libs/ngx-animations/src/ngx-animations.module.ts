import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoundeInAndOutDirective, DirectionInAndOutDirective, FadeInAndOutDirective,
  GrowInShrinkOutDirective, SwingInAndOutDirective } from './directives';

const ALL_DIRECTIVES = [
  FadeInAndOutDirective,
  BoundeInAndOutDirective,
  DirectionInAndOutDirective,
  GrowInShrinkOutDirective,
  SwingInAndOutDirective,
];

@NgModule({
  imports: [CommonModule],
  declarations: [...ALL_DIRECTIVES],
  exports: [...ALL_DIRECTIVES],
})
export class NgxAnimationsModule {
}
