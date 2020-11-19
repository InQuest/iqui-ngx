// Tooltip component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { TooltipRelativePositioning } from '../';

// Import modules
import { FunctionalModule } from '../../';
import { BasicsModule } from '../../../basics';
import { CodeModule } from '../../../code';

// Showcase component
@Component({
  templateUrl: `./index.html`,
  styleUrls: [`./style.scss`],
})
export class TooltipShowcaseComponent {
  // Expose modules needed to render syntax
  public modules = [FunctionalModule, BasicsModule, CodeModule];

  // Playground context
  public context = {
    ContentText: 'Tooltip content',
    Position: Object.values(TooltipRelativePositioning),
    ShowOnFocus: [true, false],
    ShowOnHover: [true, false],
    StayInViewport: [true, false],
    CustomClass: 'custom-class',
  };
}
