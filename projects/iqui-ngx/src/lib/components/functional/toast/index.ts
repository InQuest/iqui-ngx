// Toast component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, AfterViewInit, OnChanges, SimpleChanges, OnDestroy,
         Input, Output, EventEmitter, ViewContainerRef, ViewChild, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { BootstrapRelativePositioning, TBootstrapRelativePositioning } from '../../../types';

// Define and export types
/*
 * Tooltip preferred positions enum
 */
// tslint:disable-next-line: variable-name
export const ToastRelativePositioning: Record<string, TToastRelativePositioning> = {
  AUTO: 'auto',
  ...BootstrapRelativePositioning
};
/*
 * Tooltip preferred positions type
 */
export type TToastRelativePositioning = 'auto' | TBootstrapRelativePositioning;

/**
 * Toast component, capable of managing display of contents in a toast\
 * Supports:\
 * - TODO: ...
 *
 * Usage:\
 * <iqui-toast>\
 *  TODO: Add a full usage syntax example\
 * </iqui-toast>
 */
@Component({
  selector:    'iqui-toast',
  templateUrl: 'index.html',
  styleUrls:   ['style.scss']
})
export class ToastComponent implements AfterViewInit, OnChanges, OnDestroy {

  /**
   * If modal is displayed or not (two-way bound)
   */
  @Input()
  public visible = false;
  @Output()
  public visibleChange = new EventEmitter();

  /**
   * Toast preferred position
   */
  @Input()
  public position: TToastRelativePositioning = 'auto';

  /**
   * Content to be displayed inside the modal
   */
  @ViewChild('content', { read: TemplateRef })
  public content: TemplateRef<any> = null;

  /**
   * Holds modal's currently displayed status
   */
  private _isShown = false;

  /**
   * Holds changes queued for processing before modal was initialized
   */
  private _queuedChanges = [];

  /**
   * Holds overlay element reference
   */
  private _overlayRef: OverlayRef;

  /**
   * Holds dispatched event subscriptions
   */
  private _dispatcherSubscriptions = [];

  constructor (
    private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef
  ) {}

  public ngAfterViewInit () {
    // Configure
    const overlayConfig = new OverlayConfig();
    overlayConfig.hasBackdrop = false;
    overlayConfig.panelClass = ['iqui-toast-container'];

    // Inject
    this._overlayRef = this._overlay.create(overlayConfig);
    this._overlayRef.attach(new TemplatePortal(this.content, this._viewContainerRef));

    // Process queued changes
    for (const changes of this._queuedChanges) {
      this.ngOnChanges(changes);
    }

  }

  public ngOnChanges (changes: SimpleChanges) {
    // Check if already initialized
    if (this._overlayRef) {

      // Update overlay position strategy
      if (this._overlayRef) {
        const positionStrategy = this._overlay
          .position()
          .global();
        if (this.position === ToastRelativePositioning.AUTO) {
          positionStrategy.centerHorizontally();
          positionStrategy.centerVertically();
        } else {
          if (this.position.indexOf('left') !== -1) {
            positionStrategy.left();
          } else if (this.position.indexOf('right') !== -1) {
            positionStrategy.right();
          } else {
            positionStrategy.centerHorizontally();
          }
          if (this.position.indexOf('top') !== -1) {
            positionStrategy.top();
          } else if (this.position.indexOf('bottom') !== -1) {
            positionStrategy.bottom();
          } else {
            positionStrategy.centerVertically();
          }
        }
        this._overlayRef.updatePositionStrategy(positionStrategy);
      }

      // Process changes to modal shown
      if (changes.visible) {
        if (changes.visible.currentValue) {
          // Open modal
          this.show();
        } else {
          // Close modal
          this.hide();
        }
      }

    } else {

      // Queue changes for later processing
      this._queuedChanges.push(changes);

    }
  }

  public ngOnDestroy () {
    // Close previous dialog, if shown
    this.hide();
    // Destroy overlay
    this._overlayRef.dispose();
    // Destroy dispatched subscriptions
    for (const subscription of this._dispatcherSubscriptions) {
      subscription.unsubscribe();
    }
  }

  /**
   * Shows modal
   */
  public show () {
    if (!this._isShown && this._overlayRef) {
      // Set visible
      this._overlayRef.overlayElement.classList.add('toast-visible');
      // Trigger change
      this._isShown = true;
      this.visibleChange.emit(true);
    }
  }

  /**
   * Hides modal
   */
  public hide () {
    if (this._isShown && this._overlayRef) {
      // Set not visible
      this._overlayRef.overlayElement.classList.remove('toast-visible');
      // Trigger change
      this._isShown = false;
      this.visibleChange.emit(false);
    }
  }

}
