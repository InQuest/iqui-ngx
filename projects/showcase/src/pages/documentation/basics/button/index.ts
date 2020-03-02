// Button component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { BasicsModule, FormModule, CodeModule,
         ButtonComponentTheme, BootstrapSize, ButtonComponentSize } from '../../../../../../iqui-ngx-elements/src';

// Showcase component
@Component({
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class ButtonShowcaseComponent {

  // Expose modules needed to render syntax
  public modules = [BasicsModule, FormModule, CodeModule];

  // Playground context
  public context = {
    Content:  'Button content',
    Disabled: [false, true],
    Class:    '',
    NgClass:  {},
    Size:     [undefined, ...Object.values(ButtonComponentSize)],
    Theme:    [undefined, ...Object.values(ButtonComponentTheme)],
    Href:     '',
    Target:   ['_blank', '_self', '']
  };

  // Playground form context
  public contextForm = {
      FormDisabled:   [undefined, true, false],
      FormSize:       [undefined, ...Object.values(BootstrapSize)],
      FormValid:      [undefined, true, false],
  };

}
