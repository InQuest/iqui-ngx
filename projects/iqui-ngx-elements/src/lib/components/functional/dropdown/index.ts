// Dropdown component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, Directive, OnInit, AfterViewInit, OnChanges, OnDestroy, Input, ElementRef, ComponentRef, TemplateRef, ChangeDetectorRef, ContentChild } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { RelativePositioning, RelativePositioningPriority, AngularCdkRelativePositioningDefinitions } from '../../../types';
import { Direct } from 'protractor/built/driverProviders';

// Define and export types
export type DropdownRelativePositioning = 'auto' | RelativePositioning;

// Export directive:
// Adds a dropdown to a HTML element or Angular component
//
// Usage:
//
//  <anything
//      iquiDropdown            = "Dropdown content"
//    [ iquiDropdownPosition    = "auto|bottom|bottom center|bottom left|bottom right|right|right center|right top|right bottom|left|left center|left top|left bottom|top|top center|top left|top right ]
//    [ iquiDropdownShowOnFocus = "true|false" ]
//    [ iquiDropdownShowOnHover = "true|false" ]
//
//    <ng-container *iqDropdownHeader>
//     Dropdown header
//    </ng-container>
//    <ng-container *iqDropdownBody>
//     Dropdown content
//    </ng-container>
//    <ng-container *iqDropdownFooter>
//     Dropdown footer
//    </ng-container>
//
//    Host component content
//
//  </anything>
//
@Directive({
  selector: '[iquiDropdownHeader]'
})
export class DropdownHeaderDirective  {
  constructor (public template: TemplateRef<any>) {}
}
@Directive({
  selector: '[iquiDropdownBody]'
})
export class DropdownBodyDirective  {
  constructor (public template: TemplateRef<any>) {}
}
@Directive({
  selector: '[iquiDropdownFooter]'
})
export class DropdownFooterDirective  {
  constructor (public template: TemplateRef<any>) {}
}
@Directive({
  selector: '[iquiDropdown]',
})
export class DropdownDirective implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  // Positioning
  @Input()
  public iquiDropdownPosition: DropdownRelativePositioning = 'auto';

  // Show on focus
  @Input()
  public iquiDropdownShowOnFocus = true;

  // Show on hover
  @Input()
  public iquiDropdownShowOnHover = false;

  // Content header
  @ContentChild(DropdownHeaderDirective, { static: false })
  public header: DropdownHeaderDirective;

  // Content body
  @ContentChild(DropdownBodyDirective, { static: false })
  public body: DropdownBodyDirective;

  // Content footer
  @ContentChild(DropdownFooterDirective, { static: false })
  public footer: DropdownFooterDirective;

  // Holds overlay element reference
  private overlayRef: OverlayRef;
  // Holds component reference
  private componentRef: ComponentRef<DropdownComponent>;
  // Holds references to registered event's event listeners
  private eventListeners: Record<string, EventListenerOrEventListenerObject> = {};

  constructor (
    private element: ElementRef,
    private focusMonitor: FocusMonitor,
    private overlay: Overlay
  ) { }

  public ngOnInit () {

    // Inject
    this.overlayRef = this.overlay.create();
    this.componentRef = this.overlayRef.attach(new ComponentPortal(DropdownComponent));

    // Prevent from blocking clicks on elements behind it while hidden
    this.overlayRef.overlayElement.style.pointerEvents = 'none';

    // Manage visibility (on focus)
    this.focusMonitor.monitor(this.element, true).subscribe((origin) => {
      this.componentRef.instance.focused = !!origin;
    });
    // Manage visibility (on hover)
    this.element.nativeElement.addEventListener('mouseenter', (this.eventListeners.mouseenter = () => {
      this.componentRef.instance.hovered = true;
    }));
    this.element.nativeElement.addEventListener('mouseleave', (this.eventListeners.mouseleave = () => {
      this.componentRef.instance.hovered = false;
    }));
  }

  public ngAfterViewInit () {
    // Set properties
    this.ngOnChanges();
  }

  public ngOnChanges () {

    // Update properties
    if (this.componentRef) {
      this.componentRef.instance.header = this.header;
      this.componentRef.instance.body = this.body;
      this.componentRef.instance.footer = this.footer;
      this.componentRef.instance.position = this.iquiDropdownPosition;
      this.componentRef.instance.showOnFocus = this.iquiDropdownShowOnFocus;
      this.componentRef.instance.showOnHover = this.iquiDropdownShowOnHover;
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
        .withPush(true)
        .withPositions([
          // Selected, preferred position
          // tslint:disable-next-line: max-line-length
          ...(this.iquiDropdownPosition !== 'auto' ? [AngularCdkRelativePositioningDefinitions[this.iquiDropdownPosition]] : []),
          // Remaining positions in preference order
          ...(
            RelativePositioningPriority
              .filter(key => (key !== this.iquiDropdownPosition))
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
    this.focusMonitor.stopMonitoring(this.element);
    // Stop managing visibility (on hover)
    this.element.nativeElement.removeEventListener('mouseenter', this.eventListeners.mouseenter);
    this.element.nativeElement.removeEventListener('mouseleave', this.eventListeners.mouseleave);
    // Destroy overlay
    this.overlayRef.dispose();
  }

}

// Export component:
// Renders a dropdown
//
// Usage:
//
//  <iqui-dropdown
//    [ header      = "..." ]
//    [ content     = "..." ]
//    [ footer      = "..." ]
//    [ position    = "auto|bottom|bottom center|bottom left|bottom right|right|right center|right top|right bottom|left|left center|left top|left bottom|top|top center|top left|top right ]
//    [ visible     = "true|false" ]
//    [ showOnFocus = "true|false" ]
//    [ showOnHover = "true|false" ]
//  >
//
//    <iq-dropdown-header>
//      Header content
//    </iq-dropdown-header>
//    <iq-dropdown-body>
//      Body content
//    </iq-dropdown-body>
//    <iq-dropdown-footer>
//      Footer content
//    </iq-dropdown-footer>
//
//    Dropdown content
//  </iqui-dropdown>
//
@Component({
  selector: 'iqui-dropdown',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
class DropdownComponent {

  // Positioning
  @Input()
  public position: DropdownRelativePositioning = 'auto';

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

  // Header content, set by parent component
  public header: any;
  // Body content, set by parent component
  public body: any;
  // Footer content, set by parent component
  public footer: any;

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
      // Mark as dropdown (.dropdown)
      'dropdown',
      // Mark if visible (.dropdown-visible/.dropdown-hidden)
      (this.visible || (this.showOnFocus && this.focused) || (this.showOnHover && this.hovered) ? 'dropdown-visible' : 'dropdown-hidden'),
      (this.showOnFocus && this.focused ? 'dropdown-visible-focus' : null),
      (this.showOnHover && this.hovered ? 'dropdown-visible-hover' : null),
      // Choose positioning (.bs-dropdown-[position])
      (this.position !== 'auto' ? `bs-dropdown-${this.position.split(' ')[0]}` : null),
      // Choose precise positioning (.bs-dropdown-[position]-[alignment])
      (this.position !== 'auto' ? `bs-dropdown-${ (position.length === 1 ? `${position[0]}-center` : position.join('-')) }` : null)
    ].join(' ');
  }

}
// Export entry components
export const DropdownDirectiveEntryComponents = [
  DropdownComponent
];
