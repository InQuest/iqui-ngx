// Button component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { BasicsModule, CodeModule, ButtonComponentTheme, ButtonComponentSize } from '../../../../../../iqui-ngx-elements/src';

// Showcase component
@Component({
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class ButtonShowcaseComponent {

  // Expose modules needed to render syntax
  public modules = [BasicsModule, CodeModule];

  // Playground context
  public context = {
    Content:  'Button content',
    Disabled: [false, true],
    Class:    undefined,
    NgClass:  {},
    Size:     [undefined, ...Object.values(ButtonComponentSize)],
    Theme:    [undefined, ...Object.values(ButtonComponentTheme)],
    Href:     'https://example.com',
    Target:   ['_blank', '_self', '']
  };

}
