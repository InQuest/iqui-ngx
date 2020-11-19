// Form directive
// ----------------------------------------------------------------------------

// Import dependencies
import { Directive, OnInit } from '@angular/core';
import { FormElement, FormElementDirective } from '../';

/**
 * Form directive
 *
 * Usage:
 *
 *  TODO: ...
 *  <form iqui></form>
 *
 */
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'form[iquiForm]',
  providers: [{ provide: FormElementDirective, useExisting: FormDirective }],
})
@FormElement({ isolateId: true })
export class FormDirective extends FormElementDirective implements OnInit {
  public ngOnInit() {
    super.ngOnInit();

    // Intercept and block submission
    this._el.nativeElement.addEventListener('submit', this.onSubmit);
  }

  /**
   * Form submit event handler
   * @param e Event description
   */
  private onSubmit(e) {
    e.preventDefault = true;
    return (e.returnValue = false);
  }
}
