// Drop-down Button component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { BasicsModule, FormModule, CodeModule,
         DropdownButtonComponentTheme, BootstrapSize, DropdownButtonComponentSize,
         DropdownButtonComponentRelativePositioning } from '../../../../../../../ngx-iqui/src';


// Showcase component
@Component({
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class DropdownButtonShowcaseComponent {

  // Expose modules needed to render syntax
  public modules = [BasicsModule, FormModule, CodeModule];

  // Playground context
  public context = {
    ContentHtml:          '<i>Button content</i>',
    Disabled:             [false, true],
    Class:                '',
    NgClass:              {},
    Size:                 [undefined, ...Object.values(DropdownButtonComponentSize)],
    Theme:                [undefined, ...Object.values(DropdownButtonComponentTheme)],
    Position:             Object.values(DropdownButtonComponentRelativePositioning),
    ShowOnFocus:          [true, false],
    ShowOnHover:          [false, true],
    StayInViewport:       [false, true],
    ToggleOnButtonClick:  [true, false],
    OnSelected:           (e) => { console.log(e); }
  };

  // Playground form context
  public contextForm = {
      FormDisabled:   [undefined, true, false],
      FormSize:       [undefined, ...Object.values(BootstrapSize)],
      FormValid:      [undefined, true, false],
  };

}
