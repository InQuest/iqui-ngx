// Drop-down Button component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, Input, ContentChild, ViewChild } from '@angular/core';
import { BootstrapButtonThemeColors, BootstrapButtonThemeSizes } from '../button';
import { DropdownRelativePositioning,
         DropdownDirective, DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective } from '../../functional/dropdown';

// Import module registration service instance
import { register } from '../register';

/**
 * Drop-down button, renders a button (or link) control with a drop-down
 *
 * Usage:
 *
 *  <iqui-dropdown-button\
 *    [ disabled            = "true|false" ]\
 *    [ ngClass             = "{...}" ]\
 *    [ class               = "..." ]\
 *    [ size                = "sm|lg" ]\
 *    [ theme               = "primary|secondary|success|warning|danger|info|light|dark|link" ]\
 *    [ position            = "auto|bottom|bottom center|bottom left|bottom right|right|right center|right top|right bottom|
 *                             left|left center|left top|left bottom|top|top center|top left|top right ]\
 *    [ visible             = "true|false" ]\
 *    [ showOnFocus         = "true|false" ]\
 *    [ showOnHover         = "true|false" ]\
 *    [ stayInViewport      = "true|false" ]\
 *    [ toggleOnButtonClick = "true|false" ]\
 *  >\
 *    Button content\
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
 *  </iqui-dropdown-button>
 *
 */
@Component({
  selector:     'iqui-dropdown-button',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class DropdownButtonComponent {

  /**
   * [disabled] binding
   */
  @Input()
  public disabled = false;
  /**
   * [ngClass] binding
   */
  @Input()
  public ngClass: any;
  /**
   * [class] binding
   */
  @Input()
  public class: string = null;
  /**
   * Bootstrap theme color to be used by the component
   */
  @Input()
  public theme: BootstrapButtonThemeColors = 'secondary';
  /**
   * Bootstrap theme size to be used by the component
   */
  @Input()
  public size: BootstrapButtonThemeSizes = null;
  /**
   * Drop-down preferred position
   */
  @Input()
  public position: DropdownRelativePositioning = 'bottom';
  /**
   * If drop-down should be displayed when parent control is focused
   */
  @Input()
  public showOnFocus = true;
  /**
   * If drop-down should be displayed when parent control is hovered over
   */
  @Input()
  public showOnHover = false;
  /**
   * If drop-down should detach from the parent control if necessary and stay inside the viewport
   */
  @Input()
  public stayInViewport = false;
  /**
   * If drop-down should toggle on button click after then button has been focused
   */
  @Input()
  public toggleOnButtonClick = true;
  /**
   * Content child element implementing a *iquiDropdownHeader directive and containing the drop-down header content
   */
  @ContentChild(DropdownHeaderDirective, { static: false })
  public header: DropdownHeaderDirective;
  /**
   * Content child element implementing a *iquiDropdownBody directive and containing the drop-down body content
   */
  @ContentChild(DropdownBodyDirective, { static: false })
  public body: DropdownBodyDirective;
  /**
   * Content child element implementing a *iquiDropdownFooter directive and containing the drop-down footer content
   */
  @ContentChild(DropdownFooterDirective, { static: false })
  public footer: DropdownFooterDirective;

  // Reference to dropdown directive in template
  @ViewChild('dropdown', { read: DropdownDirective, static: true })
  private dropdownRef: DropdownDirective;

  /**
   * Toggle (if required) drop-down on button clicked
   */
  public onButtonClicked () {
    if (this.toggleOnButtonClick) {
      this.dropdownRef.toggle();
    }
  }

}

// Register declarations to module
register.registerDeclarationAndExport(DropdownButtonComponent);
register.registerExport(DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective);
