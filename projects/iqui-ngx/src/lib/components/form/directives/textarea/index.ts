// Form directive
// ----------------------------------------------------------------------------

// Import dependencies
import { Directive } from '@angular/core';
import { FormElement, FormElementDirective } from '../';

/**
 * Textarea directive
 *
 * Usage:
 *
 *  TODO: ...
 *  <textarea></textarea>
 *
 */
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: `textarea`,
  providers: [{ provide: FormElementDirective, useExisting: TextareaDirective }]
})
@FormElement({ className: 'form-control', idAttributeName: 'id', bindDisabled: true, bindSize: true, bindValid: true })
export class TextareaDirective extends FormElementDirective {}
