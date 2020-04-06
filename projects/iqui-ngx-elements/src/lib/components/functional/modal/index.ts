// Modal component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, AfterViewInit, OnChanges, SimpleChanges, OnDestroy,
         Input, Output, EventEmitter, ViewContainerRef, ViewChild, TemplateRef, EmbeddedViewRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

/**
 * Modal component, capable of managing display of contents in a modal\
 * Supports:\
 * - TODO: ...
 *
 * Usage:\
 * <iqui-modal>\
 *  TODO: Add a full usage syntax example\
 * </iqui-modal>
 */
@Component({
  selector:    'iqui-modal',
  templateUrl: 'index.html',
  styleUrls:   ['style.scss']
})
export class ModalComponent implements AfterViewInit, OnChanges, OnDestroy {

  /**
   * If modal is displayed or not (two-way bound)
   */
  @Input()
  public visible = false;
  @Output()
  public visibleChange = new EventEmitter();

  /**
   * Content to be displayed inside the modal
   */
  @ViewChild('content', { read: TemplateRef })
  public content: TemplateRef<any> = null;

  /**
   * Holds overlay element reference
   */
  private _overlayRef: OverlayRef;

  constructor (private _viewContainerRef: ViewContainerRef, private _overlay: Overlay) {}

  public ngAfterViewInit () {
    // Configure
    const overlayConfig = new OverlayConfig();
    overlayConfig.hasBackdrop = true;
    overlayConfig.panelClass = ['iqui-modal-container'];
    overlayConfig.backdropClass = ['modal-backdrop', 'fade', 'show'];

    // Inject
    this._overlayRef = this._overlay.create(overlayConfig);
    this._overlayRef.attach(new TemplatePortal(this.content, this._viewContainerRef));

    // Update overlay position strategy
    if (this._overlayRef) {
      const positionStrategy = this._overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically();
      this._overlayRef.updatePositionStrategy(positionStrategy);
    }
  }

  public ngOnChanges (changes: SimpleChanges) {
    if (changes.visible) {
      // Close previous dialog, if shown
      this._closePreviousModalDialog();
      // Open in new dialog
      this._openModalDialog();
    }
  }

  public ngOnDestroy () {
    // Close previous dialog, if shown
    this._closePreviousModalDialog();
    // Destroy overlay
    this._overlayRef.dispose();
  }

  /**
   * Shows modal
   */
  public show () {
    this.visible = true;
    this._openModalDialog();
  }

  /**
   * Hides modal
   */
  public hide () {
    this.visible = false;
    this._closePreviousModalDialog();
  }

  /**
   * Closes previously opened modal dialog (if found)
   */
  private _closePreviousModalDialog () {
    if (this._overlayRef) {
      // Set not visible
      this._overlayRef.backdropElement.classList.remove('modal-visible');
      this._overlayRef.hostElement.classList.remove('modal-visible');
      // Trigger change
      this.visibleChange.emit(false);
    }
  }

  /**
   * Opens modal using MatDialog service
   */
  private _openModalDialog () {
    this._closePreviousModalDialog();
    if (this._overlayRef && this.visible) {
      // Set visible
      this._overlayRef.backdropElement.classList.add('modal-visible');
      this._overlayRef.hostElement.classList.add('modal-visible');
      // Trigger change
      this.visibleChange.emit(true);
    }
  }

}
