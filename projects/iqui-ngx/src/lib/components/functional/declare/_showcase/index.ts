// Declare directive showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';

// Import modules
import { FunctionalModule } from '../../';

// Showcase component
@Component({
  selector: 'iqui-showcase-declare-component',
  templateUrl: `./index.html`,
  styleUrls: [`./style.scss`],
})
export class DeclareShowcaseComponent {
  // Expose modules needed to render syntax
  public modules = [FunctionalModule];

  // Playground context
  public context = {
    Arg1: [1, 2, 3, 4],
    Arg2: [1, 2, 3, 4],
  };
}
