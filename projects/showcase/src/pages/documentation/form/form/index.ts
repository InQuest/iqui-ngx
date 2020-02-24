// Form component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { TBootstrapSize, BootstrapSize } from '../../../../../../iqui-ngx-elements/src';

// Showcase component
@Component({
  selector:     'iqui-form-group-showcase',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class FormShowcaseComponent {

  public globalIsDisabled = false;
  public globalSize = BootstrapSize.SMALL;
  public globalIsValid: boolean = null;

  public isDisabled: boolean = undefined;
  public size: TBootstrapSize = undefined;
  public isValid: boolean = undefined;

  // Playground attribute values
  public attributes = {
    disabled: [false, true],
    class:    '',
    ngClass:  {},
    size:     BootstrapSize
  };

}
