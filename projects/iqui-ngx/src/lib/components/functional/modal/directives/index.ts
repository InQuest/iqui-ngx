// Modal event dispatcher
// ----------------------------------------------------------------------------

// Import dependencies
import { Injectable, EventEmitter } from '@angular/core';

/**
 * Enumerated reasons for dispatching a "modalCloseRequested" event
 */
export enum ModalCloseRequestedReason {
  OverlayClicked,
  EscapePressed
}

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
@Injectable()
export class ModelEventDispatcher {

  /**
   * Modal close requested event
   */
  public modalCloseRequested = new EventEmitter();

}
