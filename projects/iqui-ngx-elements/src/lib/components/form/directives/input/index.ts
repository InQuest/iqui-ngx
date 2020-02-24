// Form directive
// ----------------------------------------------------------------------------

// Import dependencies
import { Directive } from '@angular/core';
import { FormElement, FormElementDirective } from '../';

/**
 * Input directive
 *
 * Usage:
 *
 *  TODO: ...
 *  <input iqui type="text" />
 *
 */
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: `input:not([type]),
             input[type="text"],
             input[type="number"],
             input[type="search"],
             input[type="url"],
             input[type="email"],
             input[type="tel"],
             input[type="password"],
             input[type="date"],
             input[type="time"],
             input[type="datetime-local"],
             input[type="week"],
             input[type="month"],
             input[type="color"],
             input[type="file"]`,
  providers: [{ provide: FormElementDirective, useExisting: InputDirective }]
})
@FormElement({ className: 'form-control', idAttributeName: 'id', bindDisabled: true, bindSize: true, bindValid: true })
export class InputDirective extends FormElementDirective {}
