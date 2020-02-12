// Drop-down Button component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';

// Import module registration service instance
import { register } from '../register';

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
    size:                 ['sm', 'lg', ''],
    theme:                ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link', ''],
    position:             [
                            'auto',
                            'bottom', 'bottom center', 'bottom left', 'bottom right',
                            'right', 'right center', 'right top', 'right bottom',
                            'left', 'left center', 'left top', 'left bottom',
                            'top', 'top center', 'top left', 'top right'
                          ],
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

// Register declarations to module
register.registerDeclarationAndExport(DropdownButtonShowcaseComponent);
