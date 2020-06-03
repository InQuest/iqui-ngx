// Radio component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, HostBinding, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { OptionDirective } from '../option'
import { UsesFormElementDirectives } from '../../directives';

/**
 * Radio, renders a radio control
 *
 * Usage:
 *
 *  <iqui-radio\
 *    [(value)]   = "value"\
 *    [ disabled  = "true|false" ]\
 *    [ class     = "..." ]\
 *    [ ngClass   = "{...}" ]\
 *  >
 *    Label
 *    <iqui-option [value]="'A'" [label]="'Option A'"></iqui-option>
 *    <iqui-option [value]="'B'" [label]="'Option B'"></iqui-option>
 *    <iqui-option [value]="'C'" [label]="'Option C'"></iqui-option>
 *  </iqui-radio>
 *
 */
@Component({
  selector:     'iqui-radio',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class RadioComponent extends UsesFormElementDirectives {

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
   * [(value)] two-way binding
   */
  @Input()
  public value = null;
  @Output()
  public valueChange = new EventEmitter();

  /**
   * Child <iqui-radio-option /> directive references
   */
  @ContentChildren(OptionDirective, { read: OptionDirective })
  public _optionEls: QueryList<OptionDirective>;

  /**
   * Updates value when change detected
   * @param value Updated value
   */
  public _updateValue (value) {
    this.valueChange.emit(this.value = value);
  }

  /**
   * Composes class value based on property values
   */
  public get _composedClassValue () {
    return [
      // Mark as radio container (.form-group)
      'form-group',
      // Mark as disabled, if disabled (.disabled)
      (this.disabled ? 'disabled' : null),
      // Pass-through host class
      (this.class || null)
    ].join(' ');
  }

}
