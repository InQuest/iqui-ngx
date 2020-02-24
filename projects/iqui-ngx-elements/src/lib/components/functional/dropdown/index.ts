// Dropdown component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, Directive, OnInit, AfterViewInit, OnChanges, OnDestroy,
         Input, ContentChild, ElementRef, ComponentRef, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { BootstrapRelativePositioning, TBootstrapRelativePositioning,
         RelativePositioningPriority, AngularCdkRelativePositioningDefinitions } from '../../../types';

// Define and export types
/*
 * Dropdown preferred positions enum
 */
// tslint:disable-next-line: variable-name
export const DropdownRelativePositioning: Record<string, TDropdownRelativePositioning> = {
  AUTO: 'auto',
  ...BootstrapRelativePositioning
};
/*
 * Dropdown preferred positions type
 */
export type TDropdownRelativePositioning = 'auto' | TBootstrapRelativePositioning;

// Global constants
// How soon after a focus event is a programmatic toggle of drop-down visibility allowed (in [ms])
const PROGRAMMATIC_TOGGLE_AFTER_FOCUS_TIMEOUT = 200;

/**
 * Drop-down header directive, marks content as drop-down header content
 */
@Directive({
  selector: '[iquiDropdownHeader]'
})
export class DropdownHeaderDirective  {
  constructor (public template: TemplateRef<any>) {}
}
/**
 * Drop-down body directive, marks content as drop-down body content
 */
@Directive({
  selector: '[iquiDropdownBody]'
})
export class DropdownBodyDirective  {
  constructor (public template: TemplateRef<any>) {}
}
/**
 * Drop-down footer directive, marks content as drop-down footer content
 */
@Directive({
  selector: '[iquiDropdownFooter]'
})
export class DropdownFooterDirective  {
  constructor (public template: TemplateRef<any>) {}
}

/**
 * Drop-down directive, adds a dropdown to an HTML element or Angular component
 *
 * Usage:
 *
 *  <anything\
 *    [ iquiDropdown ]              = "'Drop-down content'"\
 *    [ iquiDropdownPosition        = "auto|bottom|bottom center|bottom left|bottom right|right|right center|right top|right bottom|
 *                                     left|left center|left top|left bottom|top|top center|top left|top right ]\
 *    [ iquiDropdownShowOnFocus     = "true|false" ]\
 *    [ iquiDropdownShowOnHover     = "true|false" ]\
 *    [ iquiDropdownStayInViewport  = "true|false" ]\
 *    \
 *    <ng-container *iqDropdownHeader>\
 *     Dropdown header\
 *    </ng-container>\
 *    <ng-container *iqDropdownBody>\
 *     Dropdown content\
 *    </ng-container>\
 *    <ng-container *iqDropdownFooter>\
 *     Dropdown footer\
 *    </ng-container>\
 *    \
 *    Host component content\
 *    \
 *  </anything>
 *
 */
@Directive({
  selector: '[iquiDropdown]',
})
export class DropdownDirective implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  /**
   * Drop-down preferred position
   */
  @Input()
  public iquiDropdownPosition: TDropdownRelativePositioning = 'auto';
  /**
   * If drop-down should be displayed when parent control is focused
   */
  @Input()
  public iquiDropdownShowOnFocus = true;
  /**
   * If drop-down should be displayed when parent control is hovered over
   */
  @Input()
  public iquiDropdownShowOnHover = false;
  /**
   * If drop-down should detach from the parent control if necessary and stay inside the viewport
   */
  @Input()
  public iquiDropdownStayInViewport = false;
  /**
   * Content child element implementing a *iquiDropdownHeader directive and containing the drop-down header content
   */
  @ContentChild(DropdownHeaderDirective)
  public header: DropdownHeaderDirective;
  /**
   * Content child element implementing a *iquiDropdownBody directive and containing the drop-down body content
   */
  @ContentChild(DropdownBodyDirective)
  public body: DropdownBodyDirective;
  /**
   * Content child element implementing a *iquiDropdownFooter directive and containing the drop-down footer content
   */
  @ContentChild(DropdownFooterDirective)
  public footer: DropdownFooterDirective;

  // Holds overlay element reference
  private _overlayRef: OverlayRef;
  // Holds component reference
  private _componentRef: ComponentRef<DropdownComponent>;
  // Holds references to registered event's event listeners
  private _eventListeners: Record<string, EventListenerOrEventListenerObject> = {};

  /**
   * Toggles focused drop-down's visibility
   * @param visible (Optional) Explicitly set visibility status
   */
  public toggle: (visible?: boolean) => void;

  constructor (
    private _element: ElementRef,
    private _componentFocusMonitor: FocusMonitor,
    private _dropdownFocusMonitor: FocusMonitor,
    private _overlay: Overlay
  ) { }

  public ngOnInit () {

    // Inject
    this._overlayRef = this._overlay.create();
    this._componentRef = this._overlayRef.attach(new ComponentPortal(DropdownComponent));

    // Prevent from blocking clicks on elements behind it while hidden
    this._overlayRef.overlayElement.style.pointerEvents = 'none';

    // Manage visibility (on focus of parent or drop-down, pr programmatic .toggle() call)
    // tslint:disable-next-line: max-line-length
    // (Updates drop-down visibility after a cancelable setTimeout to allow loss and (re)gain of focus on same tick without closing the drop-down)
    let timeout = null,
        isFocused = false;
    this._componentFocusMonitor.monitor(this._element, true).subscribe((origin) => {
      if (timeout) { clearTimeout(timeout); }
      timeout = setTimeout(() => {
        // Update drop-down focus (visibility)
        this._componentRef.instance.focused = !!origin;
        // Allow toggle on click after a while
        isFocused = false;
        timeout = setTimeout(() => { isFocused = !!origin; }, PROGRAMMATIC_TOGGLE_AFTER_FOCUS_TIMEOUT);
      });
    });
    this._dropdownFocusMonitor.monitor(this._componentRef.instance.element, true).subscribe((origin) => {
      if (timeout) { clearTimeout(timeout); }
      timeout = setTimeout(() => {
        // Update drop-down focus (visibility)
        this._componentRef.instance.focused = !!origin;
      });
    });
    this.toggle = (visible: boolean = null) => {
      if (isFocused) {
        // Toggle drop-down focus (visibility)
        this._componentRef.instance.focused = (visible !== null ? visible : !this._componentRef.instance.focused);
        this._componentRef.instance.updateIfChangesDetected();
      }
    };
    // Manage visibility (on hover)
    this._element.nativeElement.addEventListener('mouseenter', (this._eventListeners.mouseenter = () => {
      this._componentRef.instance.hovered = true;
    }));
    this._element.nativeElement.addEventListener('mouseleave', (this._eventListeners.mouseleave = () => {
      this._componentRef.instance.hovered = false;
    }));
  }

  public ngAfterViewInit () {
    // Set properties
    this.ngOnChanges();
  }

  public ngOnChanges () {

    // Update properties
    if (this._componentRef) {
      this._componentRef.instance.header = this.header;
      this._componentRef.instance.body = this.body;
      this._componentRef.instance.footer = this.footer;
      this._componentRef.instance.position = this.iquiDropdownPosition;
      this._componentRef.instance.showOnFocus = this.iquiDropdownShowOnFocus;
      this._componentRef.instance.showOnHover = this.iquiDropdownShowOnHover;
      this._componentRef.instance.updateIfChangesDetected();
    }

    // Update overlay scroll strategy
    if (this._overlayRef) {
      this._overlayRef.updateScrollStrategy(this._overlay.scrollStrategies.reposition());
    }

    // Update overlay position strategy
    if (this._overlayRef) {

      // Update strategy
      const positionStrategy = this._overlay.position().flexibleConnectedTo(this._element)
        .withPush(this.iquiDropdownStayInViewport)
        .withPositions([
          // Selected, preferred position
          // tslint:disable-next-line: max-line-length
          ...(this.iquiDropdownPosition !== DropdownRelativePositioning.AUTO ? [AngularCdkRelativePositioningDefinitions[this.iquiDropdownPosition]] : []),
          // Remaining positions in preference order
          ...(
            RelativePositioningPriority
              .filter(key => (key !== this.iquiDropdownPosition))
              .map(key => AngularCdkRelativePositioningDefinitions[key])
          )
        ]);
      this._overlayRef.updatePositionStrategy(positionStrategy);

      // Watch for position changes
      positionStrategy.positionChanges.subscribe((positionChange) => {
        // Update position property
        const position = Object.keys(AngularCdkRelativePositioningDefinitions)
          .find(key => (AngularCdkRelativePositioningDefinitions[key] === positionChange.connectionPair));
        this._componentRef.instance.position = (position as TDropdownRelativePositioning);
        this._componentRef.instance.position = (position as TDropdownRelativePositioning);
      });

    }

  }

  public ngOnDestroy () {
    // Stop managing visibility (on focus)
    this._componentFocusMonitor.stopMonitoring(this._element);
    this._dropdownFocusMonitor.stopMonitoring(this._componentRef.instance.element);
    // Stop managing visibility (on hover)
    this._element.nativeElement.removeEventListener('mouseenter', this._eventListeners.mouseenter);
    this._element.nativeElement.removeEventListener('mouseleave', this._eventListeners.mouseleave);
    // Destroy overlay
    this._overlayRef.dispose();
  }

}

/**
 * Renders a drop-down (not to be used directly; should be instantiated/managed by the orchestrating [iquiTooltip] directive)
 *
 * Usage:
 *
 *  <iqui-dropdown</iqui-dropdown>
 *
 */
@Component({
  selector: 'iqui-dropdown',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class DropdownComponent {

  /**
   * Drop-down preferred position
   * (to be set/managed by the orchestrating [iquiDropdown] directive)
   */
  public position: TDropdownRelativePositioning = 'auto';
  /**
   * If drop-down should be displayed when parent control is focused
   * (to be set/managed by the orchestrating [iquiDropdown] directive)
   */
  public showOnFocus = true;
  /**
   * If drop-down should be displayed when parent control is hovered over
   * (to be set/managed by the orchestrating [iquiDropdown] directive)
   */
  public showOnHover = true;
  /**
   * Reference to parent element
   * (to be set/managed by the orchestrating [iquiDropdown] directive)
   */
  public parent: ElementRef;
  /**
   * Focused status
   * (to be set/managed by the orchestrating [iquiDropdown] directive)
   */
  public focused = false;
  /**
   * Hovered status
   * (to be set/managed by the orchestrating [iquiDropdown] directive)
   */
  public hovered = false;
  /**
   * Content child element implementing a *iquiDropdownHeader directive and containing the drop-down header content
   * (to be set/managed by the orchestrating [iquiDropdown] directive)
   */
  public header: any;
  /**
   * Content child element implementing a *iquiDropdownBody directive and containing the drop-down body content
   * (to be set/managed by the orchestrating [iquiDropdown] directive)
   */
  public body: any;
  /**
   * Content child element implementing a *iquiDropdownFooter directive and containing the drop-down footer content
   * (to be set/managed by the orchestrating [iquiDropdown] directive)
   */
  public footer: any;

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
      // Mark as dropdown (.dropdown)
      'dropdown',
      // Mark if has header/body/content
      (this.header && this.header.template ? 'dropdown-has-header' : ''),
      (this.body && this.body.template ? 'dropdown-has-body' : ''),
      (this.footer && this.footer.template ? 'dropdown-has-footer' : ''),
      // Mark if visible (.dropdown-visible/.dropdown-hidden)
      ((this.showOnFocus && this.focused) || (this.showOnHover && this.hovered) ? 'dropdown-visible' : 'dropdown-hidden'),
      (this.showOnFocus && this.focused ? 'dropdown-visible-focus' : null),
      (this.showOnHover && this.hovered ? 'dropdown-visible-hover' : null),
      // Choose positioning (.bs-dropdown-[position])
      (this.position !== 'auto' ? `bs-dropdown-${this.position.split(' ')[0]}` : null),
      // Choose precise positioning (.bs-dropdown-[position]-[alignment])
      (this.position !== 'auto' ? `bs-dropdown-${ (position.length === 1 ? `${position[0]}-center` : position.join('-')) }` : null)
    ].join(' ');
  }

  /**
   * Close drop-down function factory
   */
  public _createClose () {
    return () => {
      // Close dropdown
      this.focused = false;
    };
  }

}
