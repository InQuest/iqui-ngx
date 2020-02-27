// Basics Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { BasicsModule, CodeModule } from '../../../../../iqui-ngx-elements/src';

// Import showcase components
import { ButtonShowcaseComponent } from './button';
import { DropdownButtonShowcaseComponent } from './dropdown-button';

// IQ UI NGX Elements' Basic elements module
@NgModule({
  imports: [
    CommonModule, BasicsModule, CodeModule
  ],
  declarations: [
    ButtonShowcaseComponent,
    DropdownButtonShowcaseComponent
  ],
  exports: [
    ButtonShowcaseComponent,
    DropdownButtonShowcaseComponent
  ]
})
export class BasicsShowcaseModule { }
