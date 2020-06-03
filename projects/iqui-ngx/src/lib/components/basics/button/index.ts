// Button component
// ----------------------------------------------------------------------------

// Import dependencies
import { HostBinding, Component, Input } from '@angular/core';
import { UsesFormElementDirectives } from '../../form';
import { BootstrapTheme, TBootstrapTheme, BootstrapSize, TBootstrapSize } from '../../../types';

// Define and export enums and types
/*
 * Button's bootstrap theme colors type
 */
// tslint:disable-next-line: variable-name
export const ButtonComponentTheme: Record<string, TButtonComponentTheme> = {
  ...BootstrapTheme,
  LINK: 'link'
};
/*
 * Button's bootstrap theme colors type
 */
export type TButtonComponentTheme = TBootstrapTheme | 'link';
/*
 * Button's bootstrap theme colors type
 */
// tslint:disable-next-line: variable-name
export const ButtonComponentSize: Record<string, TButtonComponentSize> = {
  ...BootstrapSize
};
/*
 * Button's bootstrap theme size type
 */
export type TButtonComponentSize = TBootstrapSize;

/**
 * Button, renders a button (or link) control
 *
 * Usage:
 *
 *  <iqui-button\
 *    [ disabled  = "true|false" ]\
 *    [ class     = "..." ]\
 *    [ ngClass   = "{...}" ]\
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
export class ButtonComponent extends UsesFormElementDirectives {

  /**
   * [disabled] binding
   */
  @Input()
  public disabled = false;
  /**
   * [ngClass] binding
   */
  private _ngClass: string;
  @HostBinding('attr.ngClass')
  public _attrNgClass: any;
  @Input()
  public get ngClass () { return this._ngClass; }
  public set ngClass (value: string) { this._ngClass = value; this._attrNgClass = null; }
  /**
   * [class] binding
   */
  private _class: string;
  @HostBinding('attr.class')
  public _attrClass: any;
  @Input()
  public get class () { return this._class; }
  public set class (value: string) { this._class = value; this._attrClass = null; }
  /**
   * Bootstrap theme color to be used by the component
   */
  @Input()
  public theme: TButtonComponentTheme = 'secondary';
  /**
   * Bootstrap theme size to be used by the component
   */
  @Input()
  public size: TButtonComponentSize = null;
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
  public get _composedClassValue () {
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
