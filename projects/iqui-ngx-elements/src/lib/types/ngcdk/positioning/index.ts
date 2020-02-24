// Bootstrap theme ENUMs and Types
// Enumerates commonly used bootstrap positioning values as types to be used to statically type properties and such.
// ----------------------------------------------------------------------------

/*
 * Bootstrap relative positioning enum
 */
// tslint:disable-next-line: variable-name
export const BootstrapRelativePositioning: Record<string, TBootstrapRelativePositioning> = {
  TOP:                'top',
  TOP_CENTER:         'top center',
  TOP_LEFT:           'top left',
  TOP_RIGHT:          'top right',
  RIGHT:              'right',
  RIGHT_CENTER:       'right center',
  RIGHT_TOP:          'right top',
  RIGHT_BOTTOM:       'right bottom',
  BOTTOM:             'bottom',
  BOTTOM_CENTER:      'bottom center',
  BOTTOM_LEFT:        'bottom left',
  BOTTOM_RIGHT:       'bottom right',
  LEFT:               'left',
  LEFT_CENTER:        'left center',
  LEFT_TOP:           'left top',
  LEFT_BOTTOM:        'left bottom'
};
/*
 * Bootstrap relative positioning type
 */
export type TBootstrapRelativePositioning = 'top'     | 'top center'    | 'top left'    | 'top right'
                                          | 'right'   | 'right center'  | 'right top'   | 'right bottom'
                                          | 'bottom'  | 'bottom center' | 'bottom left' | 'bottom right'
                                          | 'left'    | 'left center'   | 'left top'    | 'left bottom';

/*
 * Angular CDK positioning priority
 */
// tslint:disable-next-line: variable-name
export const RelativePositioningPriority: Array<TBootstrapRelativePositioning> = [
  BootstrapRelativePositioning.BOTTOM,
  BootstrapRelativePositioning.BOTTOM_CENTER,
  BootstrapRelativePositioning.BOTTOM_LEFT,
  BootstrapRelativePositioning.BOTTOM_RIGHT,
  BootstrapRelativePositioning.RIGHT,
  BootstrapRelativePositioning.RIGHT_CENTER,
  BootstrapRelativePositioning.RIGHT_TOP,
  BootstrapRelativePositioning.RIGHT_BOTTOM,
  BootstrapRelativePositioning.LEFT,
  BootstrapRelativePositioning.LEFT_CENTER,
  BootstrapRelativePositioning.LEFT_TOP,
  BootstrapRelativePositioning.LEFT_BOTTOM,
  BootstrapRelativePositioning.TOP,
  BootstrapRelativePositioning.TOP_CENTER,
  BootstrapRelativePositioning.TOP_LEFT,
  BootstrapRelativePositioning.TOP_RIGHT
];

/*
 * Preferred Angular CDK positions type
 */
// tslint:disable-next-line: variable-name
export const AngularCdkRelativePositioningDefinitions: Record<TBootstrapRelativePositioning, Record<string, string>> = {
  ['top']:            { originX : 'center', originY : 'top',    overlayX: 'center', overlayY: 'bottom'  },
  ['top center']:     { originX : 'center', originY : 'top',    overlayX: 'center', overlayY: 'bottom'  },
  ['top left']:       { originX : 'start',  originY : 'top',    overlayX: 'start',  overlayY: 'bottom'  },
  ['top right']:      { originX : 'end',    originY : 'top',    overlayX: 'end',    overlayY: 'bottom'  },
  ['right']:          { originX : 'end',    originY : 'center', overlayX: 'start',  overlayY: 'center'  },
  ['right center']:   { originX : 'end',    originY : 'center', overlayX: 'start',  overlayY: 'center'  },
  ['right top']:      { originX : 'end',    originY : 'top',    overlayX: 'start',  overlayY: 'top'     },
  ['right bottom']:   { originX : 'end',    originY : 'bottom', overlayX: 'start',  overlayY: 'bottom'  },
  ['bottom']:         { originX : 'center', originY : 'bottom', overlayX: 'center', overlayY: 'top'     },
  ['bottom center']:  { originX : 'center', originY : 'bottom', overlayX: 'center', overlayY: 'top'     },
  ['bottom left']:    { originX : 'start',  originY : 'bottom', overlayX: 'start',  overlayY: 'top'     },
  ['bottom right']:   { originX : 'end',    originY : 'bottom', overlayX: 'end',    overlayY: 'top'     },
  ['left']:           { originX : 'start',  originY : 'center', overlayX: 'end',    overlayY: 'center'  },
  ['left center']:    { originX : 'start',  originY : 'center', overlayX: 'end',    overlayY: 'center'  },
  ['left top']:       { originX : 'start',  originY : 'top',    overlayX: 'end',    overlayY: 'top'     },
  ['left bottom']:    { originX : 'start',  originY : 'bottom', overlayX: 'end',    overlayY: 'bottom'  }
};
