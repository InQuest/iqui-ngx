// Input component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { InputType } from '../';
import { BootstrapSize } from '../../../../../types';

// Import modules
import { FormModule } from '../../../';
import { BasicsModule } from '../../../../basics';
import { CodeModule } from '../../../../code';


// Showcase component
@Component({
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class InputShowcaseComponent {

  // Expose modules needed to render syntax
  public modules = [BasicsModule, FormModule, CodeModule];

  // Playground context
  public context = {
    Value:      '',
    Label:      'Label text',
    Disabled:   [false, true],
    Class:      '',
    NgClass:    {},
    Type:       [undefined, ...Object.values(InputType)],
    Resize:     true,
    ResizeMin:  0,
    ResizeMax:  5
  };

  // Playground form context
  public contextForm = {
      FormDisabled:   [undefined, true, false],
      FormSize:       [undefined, ...Object.values(BootstrapSize)],
      FormValid:      [undefined, true, false],
  };

}
