// Drop-down Button component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { DropdownButtonComponentTheme, DropdownButtonComponentSize,
         DropdownButtonComponentRelativePositioning } from '../../../../../../iqui-ngx-elements/src';


// Showcase component
@Component({
  selector:     'iqui-dropdown-button-showcase',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class DropdownButtonShowcaseComponent {

  // Playground attribute values
  public attributes = {
    disabled: [false, true],
    class:                '',
    ngClass:              {},
    size:                 [...Object.values(DropdownButtonComponentSize), ''],
    theme:                [...Object.values(DropdownButtonComponentTheme), ''],
    position:             Object.values(DropdownButtonComponentRelativePositioning),
    showOnFocus:          [true, false],
    showOnHover:          [false, true],
    stayInViewport:       [false, true],
    toggleOnButtonClick:  [true, false],
  };

  // Playground template values
  public templates = {
    iquiDropdownHeader: 'Dropdown button header content',
    iquiDropdownBody:   `Dropdown button body content\n${ Array(50).join('...\n') }`,
    iquiDropdownFooter: 'Dropdown button footer content'
  };

  // Playground content
  public content = 'Host component content';

}
