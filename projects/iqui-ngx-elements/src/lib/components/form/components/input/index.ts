// Input component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { THtmlInputType, HtmlInputType } from '../../../../types';
import { UsesFormElementDirectives } from '../../directives';

// Define and export enums and types
/*
 * Button's bootstrap theme colors type
 */
// tslint:disable-next-line: variable-name
export const InputType: Record<string, TInputType> = {
  ...HtmlInputType,
  TEXTAREA: 'textarea'
};
/*
 * Button's bootstrap theme colors type
 */
export type TInputType = THtmlInputType | 'textarea';

/**
 * Input, renders an input control
 *
 * Usage:
 *
 *  <iqui-input\
 *    [type       = "text|number|search|url|email|tel|password|date|time|datetime-local|week|month|color|file|textarea'"]\
 *    [(value     = "value")]\
 *    [ disabled  = "true|false" ]\
 *    [ class     = "..." ]\
 *    [ ngClass   = "{...}" ]\
 *    [ textarea  = "true|false" ]\
 *    [ resize    = "true|false" ]\
 *    [ resizeMin = "true|false" ]\
 *    [ resizeMax = "true|false" ]\
 *  >
 *    Label
 *  </iqui-input>
 *
 */
@Component({
  selector:     'iqui-input',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class InputComponent extends UsesFormElementDirectives implements OnInit, OnChanges {

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
   * input[type] value
   */
  @Input()
  public type: TInputType;

  /**
   * [(value)] two-way binding
   */
  @Input()
  public value = null;
  @Output()
  public valueChange = new EventEmitter();

  /**
   * If input should resize as rows are added
   */
  @Input()
  public resize = false;
  /**
   * Minimum number of lines to resize to
   */
  @Input()
  public resizeMin = 1;
  /**
   * Maximum number of lines to resize to
   */
  @Input()
  public resizeMax = 5;

  /**
   * Reference to child <input /> element
   */
  @ViewChild('input')
  private _input: ElementRef;

  public ngOnInit () {
    this._updateType();
  }
  public ngOnChanges (changes: SimpleChanges) {
    if (changes.type) {
      this._updateType();
    }
  }

  /**
   * Updates input type
   */
  private _updateType () {
    if (this._input) {
      this._input.nativeElement.setAttribute('type', this.type);
    }
  }

  /**
   * Updates value when change detected
   * @param e Event descriptor
   */
  public _updateValue (e) {
    this.valueChange.emit(this.value = e.target.value);
  }

  /**
   * Composes class value based on property values
   */
  public get _composedClassValue () {
    return [
      // Mark as input container (.form-group)
      'form-group',
      // Mark as disabled, if disabled (.disabled)
      (this.disabled ? 'disabled' : null),
      // Pass-through host class
      (this.class || null)
    ].join(' ');
  }

}
