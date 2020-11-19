// Modal component
// ----------------------------------------------------------------------------

// Import dependencies
import {
  Component,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ViewContainerRef,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

// Import and (re)export child directives
import { ModelEventDispatcher, ModalCloseRequestedReason } from './directives';
import { ModalDirective } from './directives/modal';
export { ModalDirective };
import { ModalDialogDirective } from './directives/dialog';
export { ModalDialogDirective };

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
  selector: 'iqui-modal',
  templateUrl: 'index.html',
  styleUrls: ['style.scss'],
  providers: [{ provide: ModelEventDispatcher, useValue: new ModelEventDispatcher() }],
})
export class ModalComponent implements AfterViewInit, OnChanges, OnDestroy {
  /**
   * If modal is displayed or not (two-way bound)
   */
  @Input()
  public visible = false;
  @Output()
  public visibleChange = new EventEmitter();

  @Input()
  public closeOnOverlay = true;

  @Input()
  public closeOnEscape = true;

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

  constructor(private _overlay: Overlay, private _viewContainerRef: ViewContainerRef, public _dispatcher: ModelEventDispatcher) {}

  public ngAfterViewInit() {
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
      const positionStrategy = this._overlay.position().global().centerHorizontally().centerVertically();
      this._overlayRef.updatePositionStrategy(positionStrategy);
    }

    // Process queued changes
    for (const changes of this._queuedChanges) {
      this.ngOnChanges(changes);
    }

    // Subscribe to dispatched events
    this._dispatcherSubscriptions.push(
      this._dispatcher.modalCloseRequested.subscribe((reason: ModalCloseRequestedReason) => {
        // Check if closing on overlay click
        if (reason === ModalCloseRequestedReason.OverlayClicked && this.closeOnOverlay) {
          this.hide();
        }
        // Check if closing on escape keypress
        if (reason === ModalCloseRequestedReason.EscapePressed && this.closeOnEscape) {
          this.hide();
        }
      }),
    );
  }

  public ngOnChanges(changes: SimpleChanges) {
    // Check if already initialized
    if (this._overlayRef) {
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

  public ngOnDestroy() {
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
  public show() {
    if (!this._isShown && this._overlayRef) {
      // Set visible
      this._overlayRef.backdropElement.classList.add('modal-visible');
      this._overlayRef.hostElement.classList.add('modal-visible');
      // Trigger change
      this._isShown = true;
      this.visibleChange.emit(true);
    }
  }

  /**
   * Hides modal
   */
  public hide() {
    if (this._isShown && this._overlayRef) {
      // Set not visible
      this._overlayRef.backdropElement.classList.remove('modal-visible');
      this._overlayRef.hostElement.classList.remove('modal-visible');
      // Trigger change
      this._isShown = false;
      this.visibleChange.emit(false);
    }
  }
}
