// Dropdown component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { FunctionalModule, BasicsModule, CodeModule, DropdownRelativePositioning } from '../../../../../../iqui-ngx-elements/src';

// Showcase component
@Component({
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class DropdownShowcaseComponent {

  // Expose modules needed to render syntax
  public modules = [FunctionalModule, BasicsModule, CodeModule];

  // Playground context
  public context = {
    Position:       Object.values(DropdownRelativePositioning),
    ShowOnFocus:    [true, false],
    ShowOnHover:    [false, true],
    StayInViewport: [false, true],
    OnSelected:     (e) => { console.log(e); }
  };

}
