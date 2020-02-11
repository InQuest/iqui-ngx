// Tooltip component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, Directive, OnInit, OnChanges, OnDestroy, Input, ElementRef, ComponentRef, ChangeDetectorRef } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { RelativePositioning, RelativePositioningPriority, AngularCdkRelativePositioningDefinitions } from '../../../types';

// Import module registration service instance
import { register } from '../register';

// Define and export types
export type TooltipRelativePositioning = 'auto' | RelativePositioning;

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
  public iquiTooltipPosition: TooltipRelativePositioning = 'auto';
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

  // Holds overlay element reference
  private overlayRef: OverlayRef;
  // Holds component reference
  private componentRef: ComponentRef<TooltipComponent>;
  // Holds references to registered event's event listeners
  private eventListeners: Record<string, EventListenerOrEventListenerObject> = {};

  constructor (
    private element: ElementRef,
    private componentFocusMonitor: FocusMonitor,
    private tooltipFocusMonitor: FocusMonitor,
    private overlay: Overlay
  ) { }

  public ngOnInit () {

    // Inject
    this.overlayRef = this.overlay.create();
    this.componentRef = this.overlayRef.attach(new ComponentPortal(TooltipComponent));

    // Prevent from blocking clicks on elements behind it while hidden
    this.overlayRef.overlayElement.style.pointerEvents = 'none';

    // Set properties
    this.ngOnChanges();

    // Manage visibility (on focus of parent or tooltip)
    // tslint:disable-next-line: max-line-length
    // (Updates tooltip visibility after a cancelable setTimeout to allow loss and (re)gain of focus on same tick without closing the tooltip)
    let timeout = null;
    this.componentFocusMonitor.monitor(this.element, true).subscribe((origin) => {
      if (timeout) { clearTimeout(timeout); }
      timeout = setTimeout(() => {
        this.componentRef.instance.focused = !!origin;
      });
    });
    this.tooltipFocusMonitor.monitor(this.componentRef.instance.element, true).subscribe((origin) => {
      if (timeout) { clearTimeout(timeout); }
      timeout = setTimeout(() => {
        this.componentRef.instance.focused = !!origin;
      });
    });
    // Manage visibility (on hover)
    this.element.nativeElement.addEventListener('mouseenter', (this.eventListeners.mouseenter = () => {
      this.componentRef.instance.hovered = true;
    }));
    this.element.nativeElement.addEventListener('mouseleave', (this.eventListeners.mouseleave = () => {
      this.componentRef.instance.hovered = false;
    }));
  }

  public ngOnChanges () {

    // Update properties
    if (this.componentRef) {
      this.componentRef.instance.content = this.iquiTooltip;
      this.componentRef.instance.position = this.iquiTooltipPosition;
      this.componentRef.instance.showOnFocus = this.iquiTooltipShowOnFocus;
      this.componentRef.instance.showOnHover = this.iquiTooltipShowOnHover;
      this.componentRef.instance.updateIfChangesDetected();
    }

    // Update overlay scroll strategy
    if (this.overlayRef) {
      this.overlayRef.updateScrollStrategy(this.overlay.scrollStrategies.reposition());
    }

    // Update overlay position strategy
    if (this.overlayRef) {

      // Update strategy
      const positionStrategy = this.overlay.position().flexibleConnectedTo(this.element)
        .withPush(this.iquiTooltipStayInViewport)
        .withPositions([
          // Selected, preferred position
          // tslint:disable-next-line: max-line-length
          ...(this.iquiTooltipPosition !== 'auto' ? [AngularCdkRelativePositioningDefinitions[this.iquiTooltipPosition]] : []),
          // Remaining positions in preference order
          ...(
            RelativePositioningPriority
              .filter(key => (key !== this.iquiTooltipPosition))
              .map(key => AngularCdkRelativePositioningDefinitions[key])
          )
        ]);
      this.overlayRef.updatePositionStrategy(positionStrategy);

      // Watch for position changes
      positionStrategy.positionChanges.subscribe((positionChange) => {
        // Update position property
        const position = Object.keys(AngularCdkRelativePositioningDefinitions)
          .find(key => (AngularCdkRelativePositioningDefinitions[key] === positionChange.connectionPair));
        this.componentRef.instance.position = (position as RelativePositioning);
        this.componentRef.instance.position = (position as RelativePositioning);
      });

    }

  }

  public ngOnDestroy () {
    // Stop managing visibility (on focus)
    this.componentFocusMonitor.stopMonitoring(this.element);
    this.tooltipFocusMonitor.stopMonitoring(this.componentRef.instance.element);
    // Stop managing visibility (on hover)
    this.element.nativeElement.removeEventListener('mouseenter', this.eventListeners.mouseenter);
    this.element.nativeElement.removeEventListener('mouseleave', this.eventListeners.mouseleave);
    // Destroy overlay
    this.overlayRef.dispose();
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
  public position: TooltipRelativePositioning = 'auto';
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

  constructor (public element: ElementRef, private changeDetector: ChangeDetectorRef) {}

  /**
   * Forces a component to (re)render if any of it's properties have changed
   */
  public updateIfChangesDetected () {
    this.changeDetector.detectChanges();
  }

  /**
   * Composes class value based on property values
   */
  protected get composedClassValue () {
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
      (this.position !== 'auto' ? `bs-tooltip-${ (position.length === 1 ? `${position[0]}-center` : position.join('-')) }` : null)
    ].join(' ');
  }

}

// Register declarations to module
register.registerDeclarationAndExport(TooltipDirective);
register.registerDeclaration(TooltipComponent);
