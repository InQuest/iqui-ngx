// Form directive
// ----------------------------------------------------------------------------

// Import dependencies
import { Directive } from '@angular/core';
import { FormElement, FormElementDirective } from '../';

/**
 * Button directive
 *
 * Usage:
 *
 *  TODO: ...
 *  <button iqui />
 *
 */
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: `button,
             input[type="button"],
             input[type="submit"],
             input[type="reset"]`,
  providers: [{ provide: FormElementDirective, useExisting: ButtonDirective }]
})
@FormElement({ className: 'btn', bindDisabled: true, bindSize: true })
export class ButtonDirective extends FormElementDirective {}
