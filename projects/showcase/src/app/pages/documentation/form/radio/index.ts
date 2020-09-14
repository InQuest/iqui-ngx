// Radio component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { BasicsModule, FormModule, CodeModule, BootstrapSize } from '../../../../../../../iqui-ngx/src/public-api';

// Showcase component
@Component({
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class RadioShowcaseComponent {

  // Expose modules needed to render syntax
  public modules = [BasicsModule, FormModule, CodeModule];

  // Playground context
  public context = {
    Value:        'A',
    Label:        'Label text',
    OptionAValue: 'A',
    OptionALabel: 'Option A',
    OptionBValue: 'B',
    OptionBLabel: 'Option B',
    OptionCValue: 'C',
    OptionCLabel: 'Option C',
    Disabled:     [false, true],
    Class:        '',
    NgClass:      {}
  };

  // Playground form context
  public contextForm = {
      FormDisabled:   [undefined, true, false],
      FormSize:       [undefined, ...Object.values(BootstrapSize)],
      FormValid:      [undefined, true, false],
  };

}
