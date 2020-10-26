// Checkbox component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { BootstrapSize } from '../../../../../types';

// Import modules
import { FormModule } from '../../../';
import { BasicsModule } from '../../../../basics';
import { CodeModule } from '../../../../code';

// Showcase component
@Component({
  templateUrl: `./index.html`,
  styleUrls: [`./style.scss`],
})
export class CheckboxShowcaseComponent {
  // Expose modules needed to render syntax
  public modules = [BasicsModule, FormModule, CodeModule];

  // Playground context
  public context = {
    Value: false,
    Label: 'Label text',
    Disabled: [false, true],
    Class: '',
    NgClass: {},
  };

  // Playground form context
  public contextForm = {
    FormDisabled: [undefined, true, false],
    FormSize: [undefined, ...Object.values(BootstrapSize)],
    FormValid: [undefined, true, false],
  };
}
