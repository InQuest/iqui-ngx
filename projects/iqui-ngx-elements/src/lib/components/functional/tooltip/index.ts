// Tooltip component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, Directive, OnInit, OnChanges, OnDestroy, Input, ElementRef, ComponentRef, ChangeDetectorRef } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { RelativePositioning, RelativePositioningPriority, AngularCdkRelativePositioningDefinitions } from '../../../types';

// Define and export types
export type TooltipRelativePositioning = 'auto' | RelativePositioning;

// Export directive:
// Adds a tooltip to a HTML element or Angular component
//
// Usage:
//
//  <anything
//      iquiTooltip             = "Tooltip content"
//    [ iquiTooltipPosition     = "auto|bottom|bottom center|bottom left|bottom right|right|right center|right top|right bottom|left|left center|left top|left bottom|top|top center|top left|top right ]
//    [ iquiTooltipShowOnFocus  = "true|false" ]
//    [ iquiTooltipShowOnHover  = "true|false" ]
//    Host component content
//  </anything>
//
@Directive({
  selector: '[iquiTooltip]',
})
export class TooltipDirective implements OnInit, OnChanges, OnDestroy {

  // Content
  @Input()
  public iquiTooltip: string;

  // Positioning
  @Input()
  public iquiTooltipPosition: TooltipRelativePositioning = 'auto';

  // Show on focus
  @Input()
  public iquiTooltipShowOnFocus = true;

  // Show on hover
  @Input()
  public iquiTooltipShowOnHover = true;

  // Stays in viewport
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
    private dropdownFocusMonitor: FocusMonitor,
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

    // Manage visibility (on focus)
    let timeout = null;
    this.componentFocusMonitor.monitor(this.element, true).subscribe((origin) => {
      if (timeout) { clearTimeout(timeout); }
      timeout = setTimeout(() => {
        this.componentRef.instance.focused = !!origin;
      });
    });
    this.dropdownFocusMonitor.monitor(this.componentRef.instance.element, true).subscribe((origin) => {
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
      this.componentRef.instance.rerenderComponent();
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
    this.dropdownFocusMonitor.stopMonitoring(this.componentRef.instance.element);
    // Stop managing visibility (on hover)
    this.element.nativeElement.removeEventListener('mouseenter', this.eventListeners.mouseenter);
    this.element.nativeElement.removeEventListener('mouseleave', this.eventListeners.mouseleave);
    // Destroy overlay
    this.overlayRef.dispose();
  }

}

// Export component:
// Renders a tooltip
//
// Usage:
//
//  <iqui-tooltip
//    [ content     = "..." ]
//    [ position    = "auto|bottom|bottom center|bottom left|bottom right|right|right center|right top|right bottom|left|left center|left top|left bottom|top|top center|top left|top right ]
//    [ visible     = "true|false" ]
//    [ showOnFocus = "true|false" ]
//    [ showOnHover = "true|false" ]
//  >
//    Tooltip content
//  </iqui-tooltip>
//
@Component({
  selector: 'iqui-tooltip',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
class TooltipComponent {

  // Content
  @Input()
  public content: string;

  // Positioning
  @Input()
  public position: TooltipRelativePositioning = 'auto';

  // Visibility
  @Input()
  public visible = false;

  // Show on focus
  @Input()
  public showOnFocus = true;

  // Show on hover
  @Input()
  public showOnHover = true;

  // Reference to parent component
  public parent: ElementRef;
  // Holds focus status, set by parent component
  public focused = false;
  // Holds hover status, set by parent component
  public hovered = false;

  constructor (public element: ElementRef, private changeDetector: ChangeDetectorRef) {}


  /**
   * Forces a component to rerender, after a property has updated
   */
  public rerenderComponent () {
    this.changeDetector.detectChanges();
  }

  /**
   * Composes class value based on property values
   */
  public get composedClassValue () {
    // Ready values
    const position = this.position.split(' ');
    // Compose classes
    return [
      // Mark as tooltip (.tooltip)
      'tooltip',
      // Mark if visible (.tooltip-visible/.tooltip-hidden)
      (this.visible || (this.showOnFocus && this.focused) || (this.showOnHover && this.hovered) ? 'tooltip-visible' : 'tooltip-hidden'),
      (this.showOnFocus && this.focused ? 'tooltip-visible-focus' : null),
      (this.showOnHover && this.hovered ? 'tooltip-visible-hover' : null),
      // Choose positioning (.bs-tooltip-[position])
      (this.position !== 'auto' ? `bs-tooltip-${this.position.split(' ')[0]}` : null),
      // Choose precise positioning (.bs-tooltip-[position]-[alignment])
      (this.position !== 'auto' ? `bs-tooltip-${ (position.length === 1 ? `${position[0]}-center` : position.join('-')) }` : null)
    ].join(' ');
  }

}
// Export entry components
export const TooltipDirectiveEntryComponents = [
  TooltipComponent
];
