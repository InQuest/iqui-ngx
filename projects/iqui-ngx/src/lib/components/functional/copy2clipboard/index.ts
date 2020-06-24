// Copy-2-clipboard directive
// ----------------------------------------------------------------------------

// Import dependencies
import { Directive, Input, ElementRef } from '@angular/core';
import { ClipboardService } from '../../../services';

/**
 * Copy2Clipboard directive, makes any HTML element's content copy-able to clipboard when clicked
 *
 * Usage:
 *
 *  <anything \
 *    [ iquiCopy2Clipboard ]
 *  </anything>
 *
 */
@Directive({
  selector: '[iquiCopy2Clipboard]',
})
export class Copy2ClipboardDirective {

  /**
   * Holds (optional) explicitly set value to copy
   */
  @Input('iquiCopy2Clipboard')
  public value = undefined as string;

  constructor (
    private _el: ElementRef,
    private _clipboard: ClipboardService
  ) {

    // Set element class
    this._el.nativeElement.classList.add('iqui-copy-2-clipboard');

    // Monitor element for click events
    this._el.nativeElement.addEventListener('click', (e) => {
      // Check if has explicitly set value
      if (this.value) {
        // Copy explicitly set value
        this._clipboard.copy2Clipboard(this.value as string);
      } else {
        // Copy text from host element
        this._clipboard.copy2Clipboard(this._el.nativeElement as HTMLElement);
      }
      // Find (and clear) any previously copied elements
      const els = document.getElementsByClassName('iqui-copy-2-clipboard-copied');
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < els.length; i++) {
        els[i].classList.remove('iqui-copy-2-clipboard-copied');
      }
      // Mark element as copied
      this._el.nativeElement.classList.add('iqui-copy-2-clipboard-copied');
    });

    // Monitor element for click events
    this._el.nativeElement.addEventListener('mouseout', (e) => {
      // Un-mark element as copied
      this._el.nativeElement.classList.remove('iqui-copy-2-clipboard-copied');
    });

  }

}
