// Bootstrap theme ENUMs and Types
// Enumerates commonly used bootstrap positioning values as types to be used to statically type properties and such.
// ----------------------------------------------------------------------------

// Bootstrap relative positioning
export type RelativePositioning = 'top'     | 'top center'    | 'top left'    | 'top right'
                                | 'right'   | 'right center'  | 'right top'   | 'right bottom'
                                | 'bottom'  | 'bottom center' | 'bottom left' | 'bottom right'
                                | 'left'    | 'left center'   | 'left top'    | 'left bottom';

/*
 * Angular CDK positioning priority
 */
export const RelativePositioningPriority: Array<RelativePositioning> = [
  'bottom', 'bottom center', 'bottom left', 'bottom right',
  'right', 'right center', 'right top', 'right bottom',
  'left', 'left center', 'left top', 'left bottom',
  'top', 'top center', 'top left', 'top right'
];

/*
 * Preferred Angular CDK positions type
 */
export const AngularCdkRelativePositioningDefinitions: Record<RelativePositioning, any> = {
  ['top']: {
    originX : 'center',
    originY : 'top',
    overlayX: 'center',
    overlayY: 'bottom',
  },
  ['top center']: {
    originX : 'center',
    originY : 'top',
    overlayX: 'center',
    overlayY: 'bottom',
  },
  ['top left']: {
    originX : 'start',
    originY : 'top',
    overlayX: 'start',
    overlayY: 'bottom',
  },
  ['top right']: {
    originX : 'end',
    originY : 'top',
    overlayX: 'end',
    overlayY: 'bottom',
  },
  ['right']: {
    originX : 'end',
    originY : 'center',
    overlayX: 'start',
    overlayY: 'center',
  },
  ['right center']: {
    originX : 'end',
    originY : 'center',
    overlayX: 'start',
    overlayY: 'center',
  },
  ['right top']: {
    originX : 'end',
    originY : 'top',
    overlayX: 'start',
    overlayY: 'top',
  },
  ['right bottom']: {
    originX : 'end',
    originY : 'bottom',
    overlayX: 'start',
    overlayY: 'bottom',
  },
  ['bottom']: {
    originX : 'center',
    originY : 'bottom',
    overlayX: 'center',
    overlayY: 'top',
  },
  ['bottom center']: {
    originX : 'center',
    originY : 'bottom',
    overlayX: 'center',
    overlayY: 'top',
  },
  ['bottom left']: {
    originX : 'start',
    originY : 'bottom',
    overlayX: 'start',
    overlayY: 'top',
  },
  ['bottom right']: {
    originX : 'end',
    originY : 'bottom',
    overlayX: 'end',
    overlayY: 'top',
  },
  ['left']: {
    originX : 'start',
    originY : 'center',
    overlayX: 'end',
    overlayY: 'center',
  },
  ['left center']: {
    originX : 'start',
    originY : 'center',
    overlayX: 'end',
    overlayY: 'center',
  },
  ['left top']: {
    originX : 'start',
    originY : 'top',
    overlayX: 'end',
    overlayY: 'top',
  },
  ['left bottom']: {
    originX : 'start',
    originY : 'bottom',
    overlayX: 'end',
    overlayY: 'bottom',
  }
};
