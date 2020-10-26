// Collapse component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';

// Import modules
import { FunctionalModule } from '../../';
import { BasicsModule } from '../../../basics';
import { CodeModule } from '../../../code';

// Showcase component
@Component({
  templateUrl: `./index.html`,
  styleUrls: [`./style.scss`],
})
export class CollapseShowcaseComponent {
  // Expose modules needed to render syntax
  public modules = [FunctionalModule, BasicsModule, CodeModule];

  // Playground context
  public context = {};
}
