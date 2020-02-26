// Drop-down Button component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { BasicsModule, ThirdPartyModule,
         DropdownButtonComponentTheme, DropdownButtonComponentSize,
         DropdownButtonComponentRelativePositioning } from '../../../../../../iqui-ngx-elements/src';


// Showcase component
@Component({
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class DropdownButtonShowcaseComponent {

  // Expose modules needed to render syntax
  public modules = [BasicsModule, ThirdPartyModule];

  // Playground context
  public context = {
    Content:              'Button content',
    Disabled:             [false, true],
    Class:                undefined,
    NgClass:              {},
    Size:                 [undefined, ...Object.values(DropdownButtonComponentSize)],
    Theme:                [undefined, ...Object.values(DropdownButtonComponentTheme)],
    Position:             Object.values(DropdownButtonComponentRelativePositioning),
    ShowOnFocus:          [true, false],
    ShowOnHover:          [false, true],
    StayInViewport:       [false, true],
    ToggleOnButtonClick:  [true, false],
  };

}
