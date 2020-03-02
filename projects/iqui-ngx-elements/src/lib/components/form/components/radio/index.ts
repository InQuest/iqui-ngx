// Radio component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, Directive, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
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
   * [class] binding
   */
  @Input()
  public class: string = null;
  /**
   * [ngClass] binding
   */
  @Input()
  public ngClass: any;

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
