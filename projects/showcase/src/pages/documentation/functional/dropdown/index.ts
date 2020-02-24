// Dropdown component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { DropdownRelativePositioning } from '../../../../../../iqui-ngx-elements/src';

// Showcase component
@Component({
  selector:     'iqui-dropdown-showcase',
  templateUrl:  `./index.html`,
  styleUrls:    [`./style.scss`]
})
export class DropdownShowcaseComponent {

  // Playground attribute values
  public attributes = {
    iquiDropdown:               null,
    iquiDropdownPosition:       Object.values(DropdownRelativePositioning),
    iquiDropdownShowOnFocus:    [true, false],
    iquiDropdownShowOnHover:    [false, true],
    iquiDropdownStayInViewport: [false, true],
  };

  // Playground template values
  public templates = {
    iquiDropdownHeader: 'Dropdown header content',
    iquiDropdownBody:   `Dropdown body content\n${ Array(50).join('...\n') }`,
    iquiDropdownFooter: 'Dropdown footer content'
  };

  // Playground content
  public content = 'Host component content';

}
