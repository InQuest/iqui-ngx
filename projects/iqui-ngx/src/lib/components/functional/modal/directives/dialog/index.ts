// Bootstrap modal dialog directive
// ----------------------------------------------------------------------------

// Import dependencies
import { Directive, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ModelEventDispatcher, ModalCloseRequestedReason } from '../';

/**
 * Modal dialog
 *
 * Usage:
 *
 *  <iqui-modal>
 *    <div class="modal">
 *      <div class="modal-dialog"> ... </div>
 *    </div>
 *  </iqui-modal>
 *
 */
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: `.modal-dialog`,
})
export class ModalDialogDirective implements OnInit, OnDestroy {
  constructor(private _element: ElementRef, private _dispatcher: ModelEventDispatcher) {}

  public ngOnInit() {
    // Capture in-modal "keydown" event
    this._element.nativeElement.addEventListener('keydown', this.handleKeyDown.bind(this));
    // Capture body "keydown" event
    document.body.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  public ngOnDestroy() {
    // Unsubscribe body "keydown" event
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }

  /**
   * Handles "keydown" event
   */
  private handleKeyDown(e) {
    if (e.keyCode === 27) {
      this._dispatcher.modalCloseRequested.emit(ModalCloseRequestedReason.EscapePressed);
    }
  }
}
