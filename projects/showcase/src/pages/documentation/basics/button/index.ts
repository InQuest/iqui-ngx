// Button component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { ButtonComponentTheme, ButtonComponentSize } from '../../../../../../iqui-ngx-elements/src';

// Showcase component
@Component({
  selector:     'iqui-button-showcase',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class ButtonShowcaseComponent {

  // Playground attribute values
  public attributes = {
    disabled: [false, true],
    class:    '',
    ngClass:  {},
    size:     [...Object.values(ButtonComponentSize), ''],
    theme:    [...Object.values(ButtonComponentTheme), ''],
    href:     'https://example.com',
    target:   ['_blank', '_self', '']
  };

  // Playground content
  public content = 'Button content';

}
