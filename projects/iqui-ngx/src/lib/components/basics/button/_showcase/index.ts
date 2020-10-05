// Button component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { ButtonComponentTheme, ButtonComponentSize } from '../';
import { BootstrapSize } from '../../../../types';

// Import modules
import { BasicsModule } from '../../';
import { FormModule } from '../../../form';
import { CodeModule } from '../../../code';

// Showcase component
@Component({
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class ButtonShowcaseComponent {

  // Expose modules needed to render syntax
  public modules = [BasicsModule, FormModule, CodeModule];

  // Playground context
  public context = class {
  // tslint:disable: variable-name
    public static ContentHtml = '<i>Button content</i>';
    public static Disabled =    [false, true];
    public static Class =       '';
    public static NgClass =     {};
    public static Size =        [undefined, ...Object.values(ButtonComponentSize)];
    public static Theme =       [undefined, ...Object.values(ButtonComponentTheme)];
    public static Href =        '';
    public static Target =      ['_blank', '_self', ''];
  // tslint:enable: variable-name
  };

  // Playground form context
  public contextForm = class {
  // tslint:disable: variable-name
    public static FormDisabled = [undefined, true, false];
    public static FormSize =     [undefined, ...Object.values(BootstrapSize)];
    public static FormValid =    [undefined, true, false];
  // tslint:enable: variable-name
  };

}
