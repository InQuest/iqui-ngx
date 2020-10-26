// Form directive
// ----------------------------------------------------------------------------

// Import dependencies
import { Directive } from '@angular/core';
import { FormElement, FormElementDirective } from '../';

/**
 * Select directive
 *
 * Usage:
 *
 *  TODO: ...
 *  <select><option /></select>
 *
 */
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: `select`,
  providers: [{ provide: FormElementDirective, useExisting: SelectDirective }],
})
@FormElement({ className: 'custom-select', idAttributeName: 'id', bindDisabled: true, bindSize: true, bindValid: true })
export class SelectDirective extends FormElementDirective {}
