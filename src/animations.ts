import { style, animate, animation, AnimationReferenceMetadata, transition,
  useAnimation, trigger, AnimationTriggerMetadata, keyframes, query, state, group } from '@angular/animations';
/** Many of the following animations were inspired by: (inspired by: https://daneden.github.io/animate.css/) */


/**
 * shrink and grow are used within most enter/leave animations so lists will appropriately slide
 */
const shrink = animation(
  animate('200ms', style({ height: '0px', paddingTop: '0px', paddingBottom: '0px', marginTop: '0px', marginBottom: '0px' }))
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
 * params: duration, startPos
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
 * params: duration, endPos
 */
export const slideFadeOut = animation(
  group([
    useAnimation(shrink),
    animate('{{time}}', style({ opacity: '0', transform: 'translateX({{endPos}})' }))
  ]),
  { params: { time: '200ms', endPos: '100%' } }
);


/**
 * start at 0px height and grow to full height without any opacity changes
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
 * shrink to 0px height without any opacity changes
 */
export const shrinkOut = animation(
  group([
    useAnimation(shrink),
    animate('{{time}}', style({ transform: 'scaleY(0)' }))
  ]),
  { params: { time: '200ms' } }
);

/**
 * rotate element in on the X axis as if it is hanging on a hinge.
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
 * rotate element out on the X axis until it is facing up and invisible to the user
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
