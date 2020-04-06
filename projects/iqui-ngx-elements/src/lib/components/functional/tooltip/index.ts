// Tooltip component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, Directive, OnInit, OnChanges, OnDestroy, Input, ElementRef, ComponentRef, ChangeDetectorRef } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { BootstrapRelativePositioning, TBootstrapRelativePositioning,
         RelativePositioningPriority, AngularCdkRelativePositioningDefinitions } from '../../../types';

// Define and export types
/*
 * Tooltip preferred positions enum
 */
// tslint:disable-next-line: variable-name
export const TooltipRelativePositioning: Record<string, TTooltipRelativePositioning> = {
  AUTO: 'auto',
  ...BootstrapRelativePositioning
};
/*
 * Tooltip preferred positions type
 */
export type TTooltipRelativePositioning = 'auto' | TBootstrapRelativePositioning;

/**
 * Tooltip directive, adds a tooltip to an HTML element or Angular component
 *
 * Usage:
 *
 *  <anything \
 *    [ iquiTooltip ]             = "'Tooltip content'"\
 *    [ iquiTooltipPosition       = "auto|bottom|bottom center|bottom left|bottom right|right|right center|right top|right bottom|
 *                                   left|left center|left top|left bottom|top|top center|top left|top right ]\
 *    [ iquiTooltipShowOnFocus    = "true|false" ]\
 *    [ iquiTooltipShowOnHover    = "true|false" ]\
 *    [ iquiTooltipStayInViewport = "true|false" ]>\
 *    Host component content\
 *  </anything>
 *
 */
@Directive({
  selector: '[iquiTooltip]',
})
export class TooltipDirective implements OnInit, OnChanges, OnDestroy {

  /**
   * Tooltip text content
   */
  @Input()
  public iquiTooltip: string;
  /**
   * Tooltip preferred position
   */
  @Input()
  public iquiTooltipPosition: TTooltipRelativePositioning = 'auto';
  /**
   * If tooltip should be displayed when parent control is focused
   */
  @Input()
  public iquiTooltipShowOnFocus = true;
  /**
   * If tooltip should be displayed when parent control is hovered over
   */
  @Input()
  public iquiTooltipShowOnHover = true;
  /**
   * If tooltip should detach from the parent control if necessary and stay inside the viewport
   */
  @Input()
  public iquiTooltipStayInViewport = true;
  /**
   * Custom class to be set for the tooltip element
   */
  @Input()
  public iquiTooltipClass: string = null;

  // Holds overlay element reference
  private _overlayRef: OverlayRef;
  // Holds component reference
  private _componentRef: ComponentRef<TooltipComponent>;
  // Holds references to registered event's event listeners
  private _eventListeners: Record<string, EventListenerOrEventListenerObject> = {};

  constructor (
    private _element: ElementRef,
    private _componentFocusMonitor: FocusMonitor,
    private _tooltipFocusMonitor: FocusMonitor,
    private _overlay: Overlay
  ) { }

  public ngOnInit () {

    // Inject
    this._overlayRef = this._overlay.create();
    this._componentRef = this._overlayRef.attach(new ComponentPortal(TooltipComponent));

    // Prevent from blocking clicks on elements behind it while hidden
    this._overlayRef.overlayElement.style.pointerEvents = 'none';

    // Set properties
    this.ngOnChanges();

    // Manage visibility (on focus of parent or tooltip)
    // tslint:disable-next-line: max-line-length
    // (Updates tooltip visibility after a cancelable setTimeout to allow loss and (re)gain of focus on same tick without closing the tooltip)
    let timeout = null;
    this._componentFocusMonitor.monitor(this._element, true).subscribe((origin) => {
      if (timeout) { clearTimeout(timeout); }
      timeout = setTimeout(() => {
        this._overlayRef.updatePosition();
        this._componentRef.instance.focused = !!origin;
      });
    });
    this._tooltipFocusMonitor.monitor(this._componentRef.instance.element, true).subscribe((origin) => {
      if (timeout) { clearTimeout(timeout); }
      timeout = setTimeout(() => {
        this._overlayRef.updatePosition();
        this._componentRef.instance.focused = !!origin;
      });
    });
    // Manage visibility (on hover)
    this._element.nativeElement.addEventListener('mouseenter', (this._eventListeners.mouseenter = () => {
      this._overlayRef.updatePosition();
      this._componentRef.instance.hovered = true;
    }));
    this._element.nativeElement.addEventListener('mouseleave', (this._eventListeners.mouseleave = () => {
      this._overlayRef.updatePosition();
      this._componentRef.instance.hovered = false;
    }));
  }

  public ngOnChanges () {

    // Update properties
    if (this._componentRef) {
      this._componentRef.instance.content     = this.iquiTooltip;
      this._componentRef.instance.position    = this.iquiTooltipPosition;
      this._componentRef.instance.showOnFocus = this.iquiTooltipShowOnFocus;
      this._componentRef.instance.showOnHover = this.iquiTooltipShowOnHover;
      this._componentRef.instance.class       = this.iquiTooltipClass;
      this._componentRef.instance.updateIfChangesDetected();
    }

    // Update overlay scroll strategy
    if (this._overlayRef) {
      this._overlayRef.updateScrollStrategy(this._overlay.scrollStrategies.reposition());
    }

    // Update overlay position strategy
    if (this._overlayRef) {

      // Update strategy
      const positionStrategy = this._overlay
        .position()
        .flexibleConnectedTo(this._element)
        .withPush(this.iquiTooltipStayInViewport)
        .withPositions([
          // Selected, preferred position
          // tslint:disable-next-line: max-line-length
          ...(this.iquiTooltipPosition !== TooltipRelativePositioning.AUTO ? [AngularCdkRelativePositioningDefinitions[this.iquiTooltipPosition]] : []),
          // Remaining positions in preference order
          ...(
            RelativePositioningPriority
              .filter(key => (key !== this.iquiTooltipPosition))
              .map(key => AngularCdkRelativePositioningDefinitions[key])
          )
        ]);
      this._overlayRef.updatePositionStrategy(positionStrategy);

      // Watch for position changes
      positionStrategy.positionChanges.subscribe((positionChange) => {
        // Update position property
        const position = Object.keys(AngularCdkRelativePositioningDefinitions)
          .find(key => (AngularCdkRelativePositioningDefinitions[key] === positionChange.connectionPair));
        this._componentRef.instance.position = (position as TTooltipRelativePositioning);
        this._componentRef.instance.position = (position as TTooltipRelativePositioning);
      });

    }

  }

  public ngOnDestroy () {
    // Stop managing visibility (on focus)
    this._componentFocusMonitor.stopMonitoring(this._element);
    this._tooltipFocusMonitor.stopMonitoring(this._componentRef.instance.element);
    // Stop managing visibility (on hover)
    this._element.nativeElement.removeEventListener('mouseenter', this._eventListeners.mouseenter);
    this._element.nativeElement.removeEventListener('mouseleave', this._eventListeners.mouseleave);
    // Destroy overlay
    this._overlayRef.dispose();
  }

}

/**
 * Renders a tooltip (not to be used directly; should be instantiated/managed by the orchestrating [iquiTooltip] directive)
 *
 * Usage:
 *
 *  <iqui-tooltip></iqui-tooltip>
 *
 */
@Component({
  selector: 'iqui-tooltip',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class TooltipComponent {

  /**
   * Tooltip text content
   * (to be set/managed by the orchestrating [iquiTooltip] directive)
   */
  public content: string;
  /**
   * Tooltip preferred position
   * (to be set/managed by the orchestrating [iquiTooltip] directive)
   */
  public position: TTooltipRelativePositioning = 'auto';
  /**
   * If tooltip should be displayed when parent control is focused
   * (to be set/managed by the orchestrating [iquiTooltip] directive)
   */
  public showOnFocus = true;
  /**
   * If tooltip should be displayed when parent control is hovered over
   * (to be set/managed by the orchestrating [iquiTooltip] directive)
   */
  public showOnHover = true;
  /**
   * Reference to parent element
   * (to be set/managed by the orchestrating [iquiTooltip] directive)
   */
  public parent: ElementRef;
  /**
   * Focused status
   * (to be set/managed by the orchestrating [iquiTooltip] directive)
   */
  public focused = false;
  /**
   * Hovered status
   * (to be set/managed by the orchestrating [iquiTooltip] directive)
   */
  public hovered = false;
  /**
   * Custom class
   * (to be set/managed by the orchestrating [iquiTooltip] directive)
   */
  public class: string = null;

  constructor (public element: ElementRef, private _changeDetector: ChangeDetectorRef) {}

  /**
   * Forces a component to (re)render if any of it's properties have changed
   */
  public updateIfChangesDetected () {
    this._changeDetector.detectChanges();
  }

  /**
   * Composes class value based on property values
   */
  public get _composedClassValue () {
    // Ready values
    const position = this.position.split(' ');
    // Compose classes
    return [
      // Mark as tooltip (.tooltip)
      'tooltip',
      // Mark if visible (.tooltip-visible/.tooltip-hidden)
      ( (this.showOnFocus && this.focused) || (this.showOnHover && this.hovered) ? 'tooltip-visible' : 'tooltip-hidden'),
      (this.showOnFocus && this.focused ? 'tooltip-visible-focus' : null),
      (this.showOnHover && this.hovered ? 'tooltip-visible-hover' : null),
      // Choose positioning (.bs-tooltip-[position])
      (this.position !== 'auto' ? `bs-tooltip-${this.position.split(' ')[0]}` : null),
      // Choose precise positioning (.bs-tooltip-[position]-[alignment])
      (this.position !== 'auto' ? `bs-tooltip-${ (position.length === 1 ? `${position[0]}-center` : position.join('-')) }` : null),
      // Inject custom class
      this.class
    ].join(' ');
  }

}
