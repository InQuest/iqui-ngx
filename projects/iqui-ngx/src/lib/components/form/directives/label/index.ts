// Form directive
// ----------------------------------------------------------------------------

// Import dependencies
import { Directive } from '@angular/core';
import { FormElement, FormElementDirective } from '../';

/**
 * Label directive
 *
 * Usage:
 *
 *  TODO: ...
 *  <label iqui>...</label>
 *
 */
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'label',
  providers: [{ provide: FormElementDirective, useExisting: LabelDirective }],
})
@FormElement({ idAttributeName: 'for' })
export class LabelDirective extends FormElementDirective {}
