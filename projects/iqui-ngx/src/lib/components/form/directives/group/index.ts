// Form directive
// ----------------------------------------------------------------------------

// Import dependencies
import { Directive } from '@angular/core';
import { FormElement, FormElementDirective } from '../';

/**
 * Form container directive
 *
 * Usage:
 *
 *  TODO: ...
 *  <div iquiFormIsolateId></div>
 *
 */
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[iquiFormGroup], .form-row, .form-group, .form-check, .custom-control',
  providers: [{ provide: FormElementDirective, useExisting: FormGroupDirective }]
})
@FormElement({ isolateId: true })
export class FormGroupDirective extends FormElementDirective {}
