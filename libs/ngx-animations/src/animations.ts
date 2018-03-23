import { animate, animation, AnimationAnimateRefMetadata, AnimationReferenceMetadata, AnimationTriggerMetadata,
  group, keyframes, query, state, style, transition, trigger, useAnimation } from '@angular/animations';
/** Many of the following animations were inspired by: (inspired by: https://daneden.github.io/animate.css/) */

/**
 * shrink and grow are used within most enter/leave animations so surrounding elements will appropriately slide
 */
const shrink = animation(
  animate('{{time}}', style({ height: '0px', paddingTop: '0px', paddingBottom: '0px', marginTop: '0px', marginBottom: '0px' })),
  {params: {time: '200ms'}},
);
const grow = animation(
  [
    style({height: '0px', paddingTop: '0px', paddingBottom: '0px', marginTop: '0px', marginBottom: '0px'}),
    animate('{{time}}', style({ height: '*', paddingTop: '*', paddingBottom: '*', marginTop: '*', marginBottom: '*' })),
  ],
  {params: {time: '200ms'}},
);

export const slideFadeIn = animation(
  [
    style({ opacity: '0', transform: 'translateX({{startPos}})' }),
    group([
      useAnimation(grow),
      animate('{{time}}', style({ opacity: '1', transform: '*' })),
    ]),
  ],
  { params: { time: '200ms', startPos: '100%' } },
);

/**
 * fade in while sliding horizontally.
 *
 * @param time the duration of the animation
 * @param startPos the location that the element should start from before moving to its final position.
 * use a negative value to start to the left
 */
export function useSlideFadeInAnimation(time: string = '200ms', startPos: string = '100%'): AnimationReferenceMetadata {
  return useAnimation(slideFadeIn, {params: {time, startPos}});
}

export const slideFadeOut = animation([
  group([
    useAnimation(shrink, {params: {time: '{{time}}'}}),
    animate('{{time}}', style({ opacity: '0', transform: 'translateX({{endPos}})' })),
  ]),
],
{ params: { time: '200ms', endPos: '100%' } },
);

/**
 * fade out while sliding horizontally.
 *
 * @param time the duration of the animation
 * @param endPos the amount that the element should move (horizontally) by the end of the animation.
 * Use a negative value to move left
 */
export function useSlideFadeOutAnimation(time: string = '200ms', endPos: string = '100%'): AnimationReferenceMetadata {
  return useAnimation(slideFadeOut, {params: {time, endPos}});
}

export const growIn = animation(
  [
    style({ height: '0px', transform: 'scaleY(0)' }),
    group([
      useAnimation(grow, {params: {time: '{{time}}'}}),
      animate('{{time}}', style({ transform: '*' })),
    ]),
  ],
  { params: { time: '200ms' } },
);

/**
 * start at 0px height and grow to full height without any opacity changes
 * @param time the duration of the animation
 */
export function useGrowInAnimation(time: string = '200ms'): AnimationReferenceMetadata {
  return useAnimation(growIn, {params: {time}});
}
export const shrinkOut = animation(
  group([
    useAnimation(shrink, {params: {time: '{{time}}'}}),
    animate('{{time}}', style({ transform: 'scaleY(0)' })),
  ]),
  { params: { time: '200ms' } },
);
/**
 * shrink to 0px height without any opacity changes
 * @param time the duration of the animation
 */
export function useShrinkOutAnimation(time: string = '200ms'): AnimationReferenceMetadata {
  return useAnimation(shrinkOut, {params: {time}});
}

export const swingIn = animation(
  [
    style({transformOrigin: '50% 0px', transform: 'perspective(500px) rotate3d(1, 0, 0, 90deg)' }),
    group([
      useAnimation(grow, {params: {time: '200ms'}}),
      animate('{{time}}',
      keyframes([
        style({transform: 'perspective(500px) rotate3d(1, 0, 0, -70deg)' }),
        style({transform: 'perspective(500px) rotate3d(1, 0, 0, 40deg)' }),
        style({transform: 'perspective(500px) rotate3d(1, 0, 0, -15deg)' }),
        style({transform: 'perspective(500px) rotate3d(1, 0, 0, 0deg)' }),
      ]),
    ),
  ]),
],
{params: {time: '600ms'}},
);
/**
 * rotate element in on the X axis as if it is hanging on a hinge.
 * @param time the duration of the animation
 */
export function useSwingInAnimation(time: string = '600ms'): AnimationReferenceMetadata {
  return useAnimation(swingIn, {params: {time}});
}

export const swingOut = animation(
  [
    animate( '{{time}}',
    keyframes([
      style([{transformOrigin: '50% 0px', transform: 'perspective(500px) rotate3d(1, 0, 0, 0deg)' }, {offset: 0}]),
      style([{transform: 'perspective(500px) rotate3d(1, 0, 0, -30deg)'}, {offset: 0.3}]),
      style([{transform: 'perspective(500px) rotate3d(1, 0, 0, 90deg)'}, {offset: 1}]),
    ]),
  ),
  useAnimation(shrink, {params: {time: '200ms'}}),
],
{params: {time: '300ms'}},
);
/**
 * rotate element out on the X axis until it is facing up and invisible to the user
 * @param time the duration of the animation
 */
export function useSwingOutAnimation(time: string = '300ms'): AnimationReferenceMetadata {
  return useAnimation(swingOut, {params: {time}});
}

export const bounceInUp = animation(
  [
    style([{ opacity: 0}]),
    useAnimation(grow, {params: {time: '200ms'}}),
    animate('{{time}} cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    keyframes([
      style([{ opacity: 0, transform: 'translate3d(0, 20px, 0)', offset: 0 }]),
      style([{ opacity: 1, transform: 'translate3d(0, -20px, 0)'}, {offset: 0.5 }]),
      style([{ transform: 'translate3d(0, 10px, 0)'}, {offset: 0.75 }]),
      style([{ transform: 'translate3d(0, -5px, 0)'}, {offset: 0.95 }]),
      style([{ transform: 'translate3d(0, 0, 0)'}, {offset: 1 }]),
    ]),
  ),
],
{params: {time: '400ms'}},
);
/**
 * bounce from below
 * @param time the duration of the animation
 */
export function useBounceInUpAnimation(time: string = '200ms'): AnimationReferenceMetadata {
  return useAnimation(bounceInUp, {params: {time}});
}

export const bounceOutDown = animation(
  [
    animate('{{time}}', keyframes([
      style([{ transform: 'translate3d(0, -5px, 0)'}, {offset: 0.05 }]),
      style([{ transform: 'translate3d(0, 10px, 0)'}, {offset: 0.25 }]),
      style([{ opacity: 1,  transform: 'translate3d(0, -20px, 0)'}, {offset: .5 }]),
      style([{ opacity: 0,  transform: 'translate3d(0, 20px, 0)'}, {offset: 1 }]),
    ])),
    useAnimation(shrink),
  ],
  {params: {time: '300ms'}},
);

/**
 * bounce down to the area below
 * @param time The duration of the animation
 */
export function useBounceOutDownAnimation(time: string = '200ms'): AnimationReferenceMetadata {
  return useAnimation(bounceOutDown, {params: {time}});
}
