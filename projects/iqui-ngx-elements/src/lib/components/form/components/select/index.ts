// Select component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { OptionDirective } from '../option';
import { UsesFormElementDirectives } from '../../directives';

/**
 * Select, renders a select control
 *
 * Usage:
 *
 *  <iqui-select\
 *    [(value)]   = "value"\
 *    [ disabled  = "true|false" ]\
 *    [ class     = "..." ]\
 *    [ ngClass   = "{...}" ]\
 *  >
 *    Label
 *    <iqui-option [value]="'A'" [label]="'Option A'"></iqui-option>
 *    <iqui-option [value]="'B'" [label]="'Option B'"></iqui-option>
 *    <iqui-option [value]="'C'" [label]="'Option C'"></iqui-option>
 *  </iqui-radselectio>
 *
 */
@Component({
  selector:     'iqui-select',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class SelectComponent extends UsesFormElementDirectives {

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
   * Child <iqui-select-option /> directive references
   */
  @ContentChildren(OptionDirective, { read: OptionDirective })
  public _optionEls: QueryList<OptionDirective>;

  /**
   * Finds index of option containing a given value
   * @param value Value to search for
   * @returns Index of option of same value
   */
  public _findValue (value) {
    return [...this._optionEls].findIndex(option => (option.value === value));
  }

  /**
   * Updates value when change detected
   * @param e Event descriptor
   */
  public _updateValue (e) {
    this.valueChange.emit(this.value = [...this._optionEls][e.target.value].value);
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
