import { style, animate, animation, AnimationReferenceMetadata, transition,
  useAnimation, trigger, AnimationTriggerMetadata, keyframes, query, state, group } from '@angular/animations';
/** Many of the following animations were inspired by: (inspired by: https://daneden.github.io/animate.css/) */


/**
 * shrink and grow are used within most enter/leave animations so lists will appropriately slide
 */
const shrink = animation(
  [
    animate('200ms', style({ height: '0px', paddingTop: '0px', paddingBottom: '0px', marginTop: '0px', marginBottom: '0px' }))
  ]
);
const grow = animation(
  [
    style({height: '0px', paddingTop: '0px', paddingBottom: '0px', marginTop: '0px', marginBottom: '0px'}),
    animate('200ms', style({ height: '*', paddingTop: '*', paddingBottom: '*', marginTop: '*', marginBottom: '*' }))
  ]
);

/**
 * fade in while sliding horizontally.
 *
 * params: duration (string), startPos(string 'Xpx')
 */
export const slideFadeIn = animation(
  [
    style({ opacity: '0', transform: 'translateX({{startPos}})' }),
    group([
      useAnimation(grow),
      animate('{{time}}', style({ opacity: '1', transform: '*' }))
    ])
  ],
  { params: { time: '200ms', startPos: '100%' } }
);

/**
 * fade out while sliding horizontally.
 *
 * params: duration (string), endPos(string 'Xpx')
 */
export const slideFadeOut = animation(
  group([
    useAnimation(shrink),
    animate('{{time}}', style({ opacity: '0', transform: 'translateX({{endPos}})' }))
  ]),
  { params: { time: '200ms', endPos: '100%' } }
);

/**
 * add this trigger to an element to add a simple fade animation when entering or leaving the dom
 */
export const fadeInAndOut = trigger('fadeInAndOut', [
  transition(':enter', useAnimation(slideFadeIn, {params: {startPos: '0px'}})),
  transition(':leave', useAnimation(slideFadeOut, {params: {endPos: '0px'}}))
]);

/**
 * add this trigger to an element to add a simple fade animation, sliding to and from the right when entering or leaving the dom
 */
export const enterAndLeaveFromRight = trigger('enterAndLeaveFromRight', [
  transition(':enter', useAnimation(slideFadeIn)),
  transition(':leave', useAnimation(slideFadeOut))
]);

/**
 * add this trigger to an element to add a simple fade animation, sliding to and from the left when entering or leaving the dom
 */
export const enterAndLeaveFromLeft = trigger('enterAndLeaveFromLeft', [
  transition(':enter', useAnimation(slideFadeIn, {params: {startPos: '-100%'}})),
  transition(':leave', useAnimation(slideFadeOut, {params: {endPos: '-100%'}}))
]);

/**
 * growIn
 * simply start at 0px height and grow without any opacity changes
 *
 */
export const growIn = animation(
  [
    style({ height: '0px', transform: 'scaleY(0)' }),
    group([
      useAnimation(grow),
      animate('{{time}}', style({ transform: '*' }))
    ])
  ],
  { params: { time: '200ms' } }
);

/**
 * shrinkOut
 * simply shrink to 0px height without any opacity changes
 *
 */
export const shrinkOut = animation(
  group([
    useAnimation(shrink),
    animate('{{time}}', style({ transform: 'scaleY(0)' }))
  ]),
  { params: { time: '200ms' } }
);

export const growInShrinkOut = trigger('growInShrinkOut', [
  transition(':enter', useAnimation(growIn)),
  transition(':leave', useAnimation(shrinkOut))
]);

/**
 * rotate element in on the X axis as if it is handing on a hinge.
 */
export const swingIn = animation(
  [
    style({transformOrigin: '50% 0px', transform: 'perspective(500px) rotate3d(1, 0, 0, 90deg)' }),
    group([
      useAnimation(grow),
      animate('{{time}}',
        keyframes([
          style({transform: 'perspective(500px) rotate3d(1, 0, 0, -70deg)' }),
          style({transform: 'perspective(500px) rotate3d(1, 0, 0, 40deg)' }),
          style({transform: 'perspective(500px) rotate3d(1, 0, 0, -15deg)' }),
          style({transform: 'perspective(500px) rotate3d(1, 0, 0, 0deg)' }),
        ])
      )
    ])
  ],
  {params: {time: '600ms'}}
);

/**
 * rotate element out on the X axis
 */
export const swingOut = animation(
[
  animate( '{{time}}',
    keyframes([
      style({transformOrigin: '50% 0px', transform: 'perspective(500px) rotate3d(1, 0, 0, 0deg)', offset: 0}),
      style({transform: 'perspective(500px) rotate3d(1, 0, 0, -30deg)', offset: 0.3}),
      style({transform: 'perspective(500px) rotate3d(1, 0, 0, 90deg)', offset: 1}),
    ])
  ),
  useAnimation(shrink),
],
{params: {time: '300ms'}}
);

/**
 * swing the element when it first enters or leaves the DOM
 *
 */
export const swingInAndOut = trigger('swingInAndOut', [
  transition(':enter', useAnimation(swingIn)),
  transition(':leave', useAnimation(swingOut)),
]);

/**
 * bounce from below
 */
export const bounceInUp = animation(
  animate('{{time}} cubic-bezier(0.215, 0.610, 0.355, 1.000)',
  keyframes([
    style({ opacity: 0, height: '0px',  transform: 'translate3d(0, 20px, 0)', offset: 0 }),
    style({ opacity: 1, height: '*',  transform: 'translate3d(0, -20px, 0)', offset: 0.5 }),
    style({ transform: 'translate3d(0, 10px, 0)', offset: 0.75 }),
    style({ transform: 'translate3d(0, -5px, 0)', offset: 0.95 }),
    style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
  ])),
  {params: {time: '300ms'}}
);
/**
 * bounce to below
 */
export const bounceOutDown = animation(
  animate('{{time}}',
  keyframes([
    style({ transform: 'translate3d(0, -5px, 0)', offset: 0.05 }),
    style({ height: '0px', overflow: 'visible', transform: 'translate3d(0, 10px, 0)', offset: 0.25 }),
    style({ opacity: 1,  transform: 'translate3d(0, -20px, 0)', offset: .5 }),
    style({ opacity: 0,  transform: 'translate3d(0, 20px, 0)', offset: 1 }),
  ])),
  {params: {time: '300ms'}}
);

/**
 * BounceInUp and BounceOutDown: (inspired by: https://daneden.github.io/animate.css/)
 */
export const bounceInAndOut = trigger('bounceInAndOut', [
  transition(':enter', useAnimation(bounceInUp)),
  transition(':leave', useAnimation(bounceOutDown))
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
