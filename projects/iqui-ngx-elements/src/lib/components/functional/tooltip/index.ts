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
// Usage:
//
//  <div
//    [iquiTooltip]="'Tooltip anyone?!'"
//    iquiTooltipPosition="auto"
//    iquiTooltipShowOnFocus="true"
//    iquiTooltipShowOnHover="true">
//    Some DIV content
//  </div>
//
@Directive({
  selector: '[iquiTooltip]',
})
export class TooltipDirective implements OnInit, OnChanges, OnDestroy {

  // Tooltip content
  @Input()
  public iquiTooltip: string;

  // Tooltip positioning
  @Input()
  public iquiTooltipPosition: TooltipRelativePositioning = 'auto';

  // Tooltip show on focus
  @Input()
  public iquiTooltipShowOnFocus = true;

  // Tooltip show on hover
  @Input()
  public iquiTooltipShowOnHover = true;

  // Holds overlay element reference
  private overlayRef: OverlayRef;
  // Holds tooltip component reference
  private tooltipRef: ComponentRef<TooltipComponent>;
  // Holds references to registered event's event listeners
  private eventListeners: Record<string, EventListenerOrEventListenerObject> = {};

  constructor (
    private element: ElementRef,
    private focusMonitor: FocusMonitor,
    private overlay: Overlay
  ) { }

  public ngOnInit () {

    // Inject tooltip
    this.overlayRef = this.overlay.create();
    this.tooltipRef = this.overlayRef.attach(new ComponentPortal(TooltipComponent));

    // Prevent tooltip from blocking clicks on elements behind it while hidden
    this.overlayRef.overlayElement.style.pointerEvents = 'none';

    // Set tooltip properties
    this.ngOnChanges();

    // Manage tooltip visibility (on focus)
    this.focusMonitor.monitor(this.element, true).subscribe((origin) => {
      this.tooltipRef.instance.focused = !!origin;
    });
    // Manage tooltip visibility (on hover)
    this.element.nativeElement.addEventListener('mouseenter', (this.eventListeners.mouseenter = () => {
      this.tooltipRef.instance.hovered = true;
    }));
    this.element.nativeElement.addEventListener('mouseleave', (this.eventListeners.mouseleave = () => {
      this.tooltipRef.instance.hovered = false;
    }));
  }

  public ngOnChanges () {

    // Update tooltip properties
    if (this.tooltipRef) {
      this.tooltipRef.instance.content = this.iquiTooltip;
      this.tooltipRef.instance.position = this.iquiTooltipPosition;
      this.tooltipRef.instance.showOnFocus = this.iquiTooltipShowOnFocus;
      this.tooltipRef.instance.showOnHover = this.iquiTooltipShowOnHover;
      this.tooltipRef.instance.rerenderComponent();
    }

    // Update overlay scroll strategy
    if (this.overlayRef) {
      this.overlayRef.updateScrollStrategy(this.overlay.scrollStrategies.reposition());
    }

    // Update overlay position strategy
    if (this.overlayRef) {

      // Update strategy
      const positionStrategy = this.overlay.position().flexibleConnectedTo(this.element)
        .withPush(true)
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
        // Update tooltip position property
        const position = Object.keys(AngularCdkRelativePositioningDefinitions)
          .find(key => (AngularCdkRelativePositioningDefinitions[key] === positionChange.connectionPair));
        this.tooltipRef.instance.position = (position as RelativePositioning);
        this.tooltipRef.instance.position = (position as RelativePositioning);
      });

    }

  }

  public ngOnDestroy () {
    // Stop managing tooltip visibility (on focus)
    this.focusMonitor.stopMonitoring(this.element);
    // Stop managing tooltip visibility (on hover)
    this.element.nativeElement.removeEventListener('mouseenter', this.eventListeners.mouseenter);
    this.element.nativeElement.removeEventListener('mouseleave', this.eventListeners.mouseleave);
    // Destroy overlay
    this.overlayRef.dispose();
  }

}

// Export component:
// Renders a tooltip
// Usage:
//
//  <iqui-tooltip
//    iquiTooltipPosition="auto"
//    iquiTooltipShowOnFocus="true"
//    iquiTooltipShowOnHover="true">
//    Tooltip anyone?!
//  </iqui-tooltip>
//
@Component({
  selector: 'iqui-tooltip',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
class TooltipComponent {

  // Tooltip content
  @Input()
  public content: string;

  // Tooltip positioning
  @Input()
  public position: TooltipRelativePositioning = 'auto';

  // Tooltip visibility
  @Input()
  public visible = false;

  // Tooltip show on focus
  @Input()
  public showOnFocus = true;

  // Tooltip show on hover
  @Input()
  public showOnHover = true;

  // Reference to parent component creating/owning the tooltip
  public parent: ElementRef;
  // Holds focus status, set by parent component
  public focused = false;
  // Holds hover status, set by parent component
  public hovered = false;

  constructor (private changeDetector: ChangeDetectorRef) {}


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
