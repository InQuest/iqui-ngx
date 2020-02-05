// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { PlaygroundModule } from '../../components/playground.module';
import { BasicsModule } from '../../../../iqui-ngx-elements/src/lib/components/basics/iq-ui-ngx-basics.module';

// Import showcase components
import { ButtonShowcaseComponent } from './button';
import { DropdownButtonShowcaseComponent } from './dropdown-button';

// Compose components
const components = [
  ButtonShowcaseComponent,
  DropdownButtonShowcaseComponent
];

// IQ UI NGX Elements' Basic elements module
@NgModule({
  imports:      [ CommonModule, PlaygroundModule, BasicsModule ],
  declarations: [ ...components ],
  exports:      [ ...components ]
})
export class BasicsShowcaseModule { }
