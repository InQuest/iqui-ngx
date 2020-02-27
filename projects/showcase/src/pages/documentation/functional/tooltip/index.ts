// Tooltip component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { FunctionalModule, BasicsModule, CodeModule, TooltipRelativePositioning } from '../../../../../../iqui-ngx-elements/src';

// Showcase component
@Component({
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class TooltipShowcaseComponent {

  // Expose modules needed to render syntax
  public modules = [FunctionalModule, BasicsModule, CodeModule];

  // Playground context
  public context = {
    ContentText:    'Tooltip content',
    Position:       Object.values(TooltipRelativePositioning),
    ShowOnFocus:    [true, false],
    ShowOnHover:    [true, false],
    StayInViewport: [true, false]
  };

}
