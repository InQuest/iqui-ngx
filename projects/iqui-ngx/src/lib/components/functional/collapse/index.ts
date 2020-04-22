// Collapse directive
// ----------------------------------------------------------------------------

// Import dependencies
import { Directive, OnInit, OnChanges, OnDestroy, Input, ElementRef } from '@angular/core';

/**
 * Collapse directive, provides management of collapse/expanded status of the components
 *
 * Usage:
 *
 *  <anything\
 *    [iquiCollapse]\
 *    [toggleTarget] = "[ref] | ref |'.selector'"\
 *    [toggleOnEvent]= "['eventName] | 'eventName'"\
 *    [showTarget]   = "[ref] | ref |'.selector'"\
 *    [showOnEvent]  = "['eventName] | 'eventName'"\
 *    [hideTarget]   = "[ref] | ref |'.selector'"\
 *    [hideOnEvent]  = "['eventName] | 'eventName'">\
 *    Content
 *  </anything>
 *
 */
@Directive({
  selector: '[iquiCollapse]',
})
export class CollapseDirective implements OnInit, OnChanges, OnDestroy {

  /**
   * Array of target elements, a single target element or selector of target element to be managed
   */
  @Input()
  public toggleTarget: (HTMLElement[] | HTMLElement | string);
  /**
   * Array of target elements, a single target element or selector of target element to be managed only on show event
   */
  @Input()
  public showTarget: (HTMLElement[] | HTMLElement | string);
  /**
   * Array of target elements, a single target element or selector of target element to be managed only on hide event
   */
  @Input()
  public hideTarget: (HTMLElement[] | HTMLElement | string);

  /**
   * Names of HTML element events to toggle target on
   */
  @Input()
  public toggleOnEvent: string[] | string;
  /**
   * Names of HTML element events to show target on
   */
  @Input()
  public showOnEvent: string[] | string;
  /**
   * Names of HTML element events to hide target on
   */
  @Input()
  public hideOnEvent: string[] | string;

  /**
   * Holds references to all event handlers currently subscribed to events
   */
  private _subscribedEvents = {};

  /**
   * Holds target element references
   */
  private _toggleTargetElements: HTMLElement[] = [];

  /**
   * Holds target element references for only show event
   */
  private _targetShowElements: HTMLElement[] = [];

  /**
   * Holds target element references for only hide event
   */
  private _targetHideElements: HTMLElement[] = [];

  constructor (private _el: ElementRef) {}

  public ngOnInit () {
    // Initialize events
    this._clearInitializedEvents();
    this._initializeEvents();
    // Initialize targets
    this._clearAllInitializedTargets();
    this._initializeAllTargets();
  }

  public ngOnChanges () {
    // Initialize events
    this._clearInitializedEvents();
    this._initializeEvents();
    // Initialize targets
    this._clearAllInitializedTargets();
    this._initializeAllTargets();
  }

  public ngOnDestroy () {
    // Clear previously subscribed events
    this._clearInitializedEvents();
    // Clear previously initialized target elements
    this._clearAllInitializedTargets();
  }

  /**
   * Initializes lists of monitored events and subscribes to those events
   */
  private _initializeEvents () {

    // Initialize events lists
    if (!this.toggleOnEvent && !this.showOnEvent && !this.hideOnEvent) {
      this.toggleOnEvent = ['click', 'keypress'];
    }

    // Subscribe toggle events
    if (this.toggleOnEvent) {
      for (const eventName of (this.toggleOnEvent instanceof Array ? this.toggleOnEvent : [this.toggleOnEvent])) {
        const eventHandlerFn = () => {
          for (const target of this._toggleTargetElements) {
            target.classList.toggle('show');
          }
        };
        this._subscribedEvents[eventName] = eventHandlerFn;
        this._el.nativeElement.addEventListener(eventName, eventHandlerFn);
      }
    }
    // Subscribe hide events
    if (this.hideOnEvent) {
      for (const eventName of (this.hideOnEvent instanceof Array ? this.hideOnEvent : [this.hideOnEvent])) {
        const eventHandlerFn = () => {
          for (const target of [...this._toggleTargetElements, ...this._targetHideElements]) {
            target.classList.remove('show');
          }
        };
        this._subscribedEvents[eventName] = eventHandlerFn;
        this._el.nativeElement.addEventListener(eventName, eventHandlerFn);
      }
    }
    // Subscribe show events
    if (this.showOnEvent) {
      for (const eventName of (this.showOnEvent instanceof Array ? this.showOnEvent : [this.showOnEvent])) {
        const eventHandlerFn = () => {
          for (const target of [...this._toggleTargetElements, ...this._targetShowElements]) {
            target.classList.add('show');
          }
        };
        this._subscribedEvents[eventName] = eventHandlerFn;
        this._el.nativeElement.addEventListener(eventName, eventHandlerFn);
      }
    }

  }

  /**
   * Clears previously subscribed events
   */
  private _clearInitializedEvents () {
    for (const eventName of Object.keys(this._subscribedEvents)) {
      this._el.nativeElement.removeEventListener(eventName, this._subscribedEvents[eventName]);
    }
  }

  /**
   * De-initializes previously initialized target elements and initializes new ones on all types
   */
  private _initializeAllTargets () {
    // Check if any target specified
    if (!this.toggleTarget && !this.showTarget && !this.hideTarget) {

      // Initialize self as target
      this._initializeTargets(undefined);

    } else {

      // Initialize explicit targets
      if (this.toggleTarget) {
        this._toggleTargetElements = this._initializeTargets(this.toggleTarget);
      }
      if (this.showTarget) {
        this._targetShowElements = this._initializeTargets(this.showTarget);
      }
      if (this.hideTarget) {
        this._targetHideElements = this._initializeTargets(this.hideTarget);
      }

    }
  }
  /**
   * De-initializes previously initialized target elements and initializes new ones of provided type
   * @param targets Targets to initialize
   * @returns Array of initialized target elements
   */
  private _initializeTargets (targets) {

    // Get all target elements
    const targetElements: HTMLElement[] = [];
    if (!targets) {
      // Use self as a target
      targetElements.push(this._el.nativeElement);
    } else if (typeof targets === 'string') {
      // Use as selector
      document.querySelectorAll(targets).forEach((target) => {
        if (target instanceof HTMLElement) {
          targetElements.push(target);
        }
      });
    } else if (targets instanceof HTMLElement) {
      // Use target
      targetElements.push(targets as HTMLElement);
    } else if (targets instanceof Array) {
      // Check and use targets
      for (const target of targets) {
        if (target instanceof HTMLElement) {
          targetElements.push(target);
        }
      }
    }

    // Initialize new targets
    for (const target of targetElements) {
      target.classList.add('collapse');
    }

    // Return new targets
    return targetElements;
  }

  /**
   * Clears previously initialized target elements
   */
  private _clearAllInitializedTargets () {
    this._clearInitializedTargets(this._toggleTargetElements);
    this._clearInitializedTargets(this._targetShowElements);
    this._clearInitializedTargets(this._targetHideElements);
  }
  /**
   * Clears previously initialized target elements
   * @params Targets to clear
   */
  private _clearInitializedTargets (targets) {
    for (const target of targets) {
      target.classList.remove('collapse');
      target.classList.remove('show');
    }
  }

}
