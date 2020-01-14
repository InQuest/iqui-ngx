// Button component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, Input } from '@angular/core';
import { BootstrapThemeColors, BootstrapThemeSizes } from '../../../types';

// Define and export types
export type BootstrapButtonThemeColors = BootstrapThemeColors | 'link';
export type BootstrapButtonThemeSizes = BootstrapThemeSizes;

// Export component:
// Renders a button
//
// Usage:
//
//  <iqui-button
//    [ disabled  = "true|false" ]
//    [ ngClass   = "{...}" ]
//    [ class     = "..." ]
//    [ size      = "sm|lg" ]
//    [ theme     = "primary|secondary|success|warning|danger|info|light|dark|link" ]
//    [ href      = "https://example.com" ]
//    [ target    = "_blank|_self" ]
//  >
//    Button content
//  </iqui-button>
//
@Component({
  selector:     'iqui-button',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class ButtonComponent {

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
   * Anchor Hyperlink URL
   */
  @Input()
  public href: string = null;
  /**
   * Anchor Hyperlink URL target
   */
  @Input()
  public target: '_self' | '_blank' = '_self';

  /**
   * Disabled state
   */
  @Input()
  public disabled = false;

  /**
   * Composes class value based on property values
   */
  private get composedClassValue () {
    return [
      // Mark as button (.btn)
      'btn',
      // Mark size (.btn-sm)
      (this.size ? 'btn-' + this.size : null),
      // Mark theme color (.btn-primary, .btn-link, etc ...)
      ('btn-' + (this.theme || (!this.href ? 'secondary' : 'link'))),
      // Mark as disabled, if disabled (.disabled)
      (this.disabled ? 'disabled' : null),
      // Pass-through host class
      (this.class || null)
    ].join(' ');
  }

}
