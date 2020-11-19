// Bootstrap modal directive
// ----------------------------------------------------------------------------

// Import dependencies
import { Directive, OnInit, ElementRef } from '@angular/core';
import { ModelEventDispatcher, ModalCloseRequestedReason } from '../';

/**
 * Modal directive
 *
 * Usage:
 *
 *  <iqui-modal>
 *    <div class="modal"> ... </div>
 *  </iqui-modal>
 *
 */
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: `.modal`,
})
export class ModalDirective implements OnInit {
  constructor(private _element: ElementRef, private _dispatcher: ModelEventDispatcher) {}

  public ngOnInit() {
    // Capture overlay "click" event
    this._element.nativeElement.addEventListener('click', e => {
      if (e.target === this._element.nativeElement) {
        this._dispatcher.modalCloseRequested.emit(ModalCloseRequestedReason.OverlayClicked);
      }
    });
  }
}
