import { style, animate, animation, AnimationReferenceMetadata, transition,
  useAnimation, trigger, AnimationTriggerMetadata, keyframes, query, state, group } from '@angular/animations';
import * as animations from './animations';

/**
 * BounceInUp and BounceOutDown: (inspired by: https://daneden.github.io/animate.css/)
 */
export const bounceInAndOut = trigger('bounceInAndOut', [
  transition(':enter', useAnimation(animations.bounceInUp)),
  transition(':leave', useAnimation(animations.bounceOutDown))
]);

/**
 * grow or shrink when the element enters or leaves.
 */
export const growInShrinkOut = trigger('growInShrinkOut', [
  transition(':enter', useAnimation(animations.growIn)),
  transition(':leave', useAnimation(animations.shrinkOut))
]);

/**
 * add this trigger to an element to add a simple fade animation, sliding to and from the right when entering or leaving
 */
export const enterAndLeaveFromRight = trigger('enterAndLeaveFromRight', [
  transition(':enter', useAnimation(animations.slideFadeIn)),
  transition(':leave', useAnimation(animations.slideFadeOut))
]);

/**
 * add this trigger to an element to add a simple fade animation, sliding to and from the left when entering or leaving
 */
export const enterAndLeaveFromLeft = trigger('enterAndLeaveFromLeft', [
  transition(':enter', useAnimation(animations.slideFadeIn, {params: {startPos: '-100%'}})),
  transition(':leave', useAnimation(animations.slideFadeOut, {params: {endPos: '-100%'}}))
]);

/**
 * add this trigger to an element to add a simple fade animation when entering or leaving the dom
 */
export const fadeInAndOut = trigger('fadeInAndOut', [
  transition(':enter', useAnimation(animations.slideFadeIn, {params: {startPos: '0px'}})),
  transition(':leave', useAnimation(animations.slideFadeOut, {params: {endPos: '0px'}}))
]);

/**
 * swing the element when it first enters or leaves the DOM
 */
export const swingInAndOut = trigger('swingInAndOut', [
  transition(':enter', useAnimation(animations.swingIn)),
  transition(':leave', useAnimation(animations.swingOut)),
]);

/**
 * Fade in, pause, then fade out
 * like a page indicator when scrolling in most PDF viewers (including ngWebViewer).
 *
 * To use, set trigger equal to a value. Whenever that value changes, the animation will run.
 */
export const fadeInThenOut = trigger('fadeInThenOut', [
  state('*', style({ opacity: 0 })),
  transition('* => *', [
    animate('200ms', style({ opacity: 1 })),
    animate('500ms 1s ease-out', style({ opacity: 0 })),
  ]),
]);
