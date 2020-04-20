// Basics Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { BasicsModule, CodeModule, ShowcasingModule } from '../../../../../../iqui-ngx/src';

// Import showcase components
import { ButtonShowcaseComponent } from './button';
import { DropdownButtonShowcaseComponent } from './dropdown-button';

// IQ UI NGX Elements' Basic elements module
@NgModule({
  imports: [
    CommonModule, BasicsModule, CodeModule, ShowcasingModule
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
