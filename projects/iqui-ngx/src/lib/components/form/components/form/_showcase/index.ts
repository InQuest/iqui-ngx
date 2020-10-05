// Form component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { BootstrapSize } from '../../../../../types';

// Import modules
import { FormModule } from '../../../';
import { BasicsModule } from '../../../../basics';

// Showcase component
@Component({
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class FormShowcaseComponent {

  // Expose modules needed to render syntax
  public modules = [FormModule, BasicsModule];

  // Playground context
  public context = {

    // If [iquiForm] directive is enabled
    Enabled:        true,

    // Form
    FormDisabled:   [undefined, true, false],
    FormSize:       [undefined, ...Object.values(BootstrapSize)],
    FormValid:      [undefined, true, false],

    // Form Group
    GroupDisabled:  [undefined, true, false],
    GroupSize:      [undefined, ...Object.values(BootstrapSize)],
    GroupValid:     [undefined, true, false]

  };

}
