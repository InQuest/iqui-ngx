// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { PlaygroundModule } from '../../components/playground.module';
import { ThirdPartyModule } from '../../../../iqui-ngx-elements/src/lib/components/3rdparty/iqui-ngx-3rdparty.module';
import { BasicsModule } from '../../../../iqui-ngx-elements/src/lib/components/basics/iqui-ngx-basics.module';

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
  imports:      [ CommonModule, PlaygroundModule, ThirdPartyModule, BasicsModule ],
  declarations: [ ...components ],
  exports:      [ ...components ]
})
export class BasicsShowcaseModule { }
