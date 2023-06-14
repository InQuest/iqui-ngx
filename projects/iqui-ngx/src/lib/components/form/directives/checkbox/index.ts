// Form directive
// ----------------------------------------------------------------------------

// Import dependencies
import { Directive } from '@angular/core';
import { FormElement, FormElementDisablableDirective } from '../';

/**
 * Checkbox directive
 *
 * Usage:
 *
 *  TODO: ...
 *  <input iqui type="checkbox />
 *
 */
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'input[type="checkbox"]',
  providers: [{ provide: FormElementDisablableDirective, useExisting: CheckboxDirective }],
})
@FormElement({ idAttributeName: 'id', bindDisabled: true, bindValid: true })
export class CheckboxDirective extends FormElementDisablableDirective {}
