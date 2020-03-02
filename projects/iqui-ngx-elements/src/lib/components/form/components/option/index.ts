// Radio / Select option directive
// ----------------------------------------------------------------------------

// Import dependencies
import { Directive, Input } from '@angular/core';

/**
 * Option, configures an option
 */
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'iqui-option'
})
export class OptionDirective {

  /**
   * Option value
   */
  @Input()
  public value: any;

  /**
   * Option label
   */
  @Input()
  public label: string;

}
