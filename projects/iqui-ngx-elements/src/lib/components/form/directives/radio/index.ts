// Form directive
// ----------------------------------------------------------------------------

// Import dependencies
import { Directive } from '@angular/core';
import { FormElement, FormElementDirective } from '../';

/**
 * Radio directive
 *
 * Usage:
 *
 *  TODO: ...
 *  <input iqui type="radio />
 *
 */
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'input[type="radio"]',
  providers: [{ provide: FormElementDirective, useExisting: RadioDirective }]
})
@FormElement({ idAttributeName: 'id', bindDisabled: true, bindValid: true })
export class RadioDirective extends FormElementDirective {}
