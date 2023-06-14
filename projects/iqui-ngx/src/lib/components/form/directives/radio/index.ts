// Form directive
// ----------------------------------------------------------------------------

// Import dependencies
import { Directive } from '@angular/core';
import { FormElement, FormElementDisablableDirective } from '../';

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
  providers: [{ provide: FormElementDisablableDirective, useExisting: RadioDirective }],
})
@FormElement({ idAttributeName: 'id', bindDisabled: true, bindValid: true })
export class RadioDirective extends FormElementDisablableDirective {
  /**
   * Applies bindings and styling to element
   */
  protected apply() {
    // Execute inherited functionality
    super.apply();

    // Apply common name based on grand-parent instead of parent
    const parentIds = this._parentIds;
    if (parentIds.length) {
      this._el.nativeElement.setAttribute('name', `unique-name-${parentIds.length > 1 ? parentIds[1] : parentIds[0]}`);
    }
  }
}
