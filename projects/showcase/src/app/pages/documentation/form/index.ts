// Form Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { FormModule, CodeModule, ShowcasingModule } from '../../../../../../ngx-iqui/src';

// Import showcase components
import { FormShowcaseComponent } from './form';
import { InputShowcaseComponent } from './input';
import { CheckboxShowcaseComponent } from './checkbox';
import { RadioShowcaseComponent } from './radio';
import { SelectShowcaseComponent } from './select';

// IQ UI NGX Elements' Basic elements module
@NgModule({
  imports: [
    CommonModule, FormModule, CodeModule, ShowcasingModule
  ],
  declarations: [
    FormShowcaseComponent, InputShowcaseComponent, CheckboxShowcaseComponent, RadioShowcaseComponent, SelectShowcaseComponent
  ],
  exports: [
    FormShowcaseComponent
  ]
})
export class FormShowcaseModule { }
