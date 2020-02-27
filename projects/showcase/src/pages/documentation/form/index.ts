// Form Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { FormModule, CodeModule } from '../../../../../iqui-ngx-elements/src';

// Import showcase components
import { FormShowcaseComponent } from './form';

// IQ UI NGX Elements' Basic elements module
@NgModule({
  imports: [
    CommonModule, FormModule, CodeModule
  ],
  declarations: [
    FormShowcaseComponent
  ],
  exports: [
    FormShowcaseComponent
  ]
})
export class FormShowcaseModule { }
