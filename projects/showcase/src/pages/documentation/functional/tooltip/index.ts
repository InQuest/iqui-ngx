// Tooltip component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { TooltipRelativePositioning } from '../../../../../../iqui-ngx-elements/src';

// Showcase component
@Component({
  selector:     'iqui-tooltip-showcase',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class TooltipShowcaseComponent {

  // Playground attribute values
  public attributes = {
    iquiTooltip:                'Tooltip content',
    iquiTooltipPosition:        Object.values(TooltipRelativePositioning),
    iquiTooltipShowOnFocus:     [true, false],
    iquiTooltipShowOnHover:     [true, false],
    iquiTooltipStayInViewport:  [true, false]
  };

  // Playground content
  public content = 'Host component content';

}
