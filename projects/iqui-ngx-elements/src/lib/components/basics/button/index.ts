// Button component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, Input } from '@angular/core';
import { BootstrapThemeColors, BootstrapThemeSizes } from '../../../types';

// Define and export types
/*
 * Button's bootstrap theme colors
 */
export type BootstrapButtonThemeColors = BootstrapThemeColors | 'link';
/*
 * Button's bootstrap theme size
 */
export type BootstrapButtonThemeSizes = BootstrapThemeSizes;

/**
 * Button, renders a button (or link) control
 *
 * Usage:
 *
 *  <iqui-button\
 *    [ disabled  = "true|false" ]\
 *    [ ngClass   = "{...}" ]\
 *    [ class     = "..." ]\
 *    [ size      = "sm|lg" ]\
 *    [ theme     = "primary|secondary|success|warning|danger|info|light|dark|link" ]\
 *    [ href      = "https://example.com" ]\
 *    [ target    = "_blank|_self" ]\
 *  >\
 *    Button content\
 *  </iqui-button>
 *
 */
@Component({
  selector:     'iqui-button',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class ButtonComponent {

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
   * Anchor Hyperlink URL (if set, will style as a link by default)
   */
  @Input()
  public href: string = null;
  /**
   * Anchor Hyperlink URL target (only makes sense to use along side [href])
   */
  @Input()
  public target: '_self' | '_blank' = '_self';

  /**
   * Composes class value based on property values
   */
  protected get composedClassValue () {
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
