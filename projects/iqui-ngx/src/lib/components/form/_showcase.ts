// Form Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { FormModule } from '../form';
import { CodeModule } from '../code';
import { ShowcasingModule } from '../showcasing';

// Import showcase components
import { FormShowcaseComponent } from './components/form/_showcase';
export { FormShowcaseComponent } from './components/form/_showcase';
import { InputShowcaseComponent } from './components/input/_showcase';
export { InputShowcaseComponent } from './components/input/_showcase';
import { CheckboxShowcaseComponent } from './components/checkbox/_showcase';
export { CheckboxShowcaseComponent } from './components/checkbox/_showcase';
import { RadioShowcaseComponent } from './components/radio/_showcase';
export { RadioShowcaseComponent } from './components/radio/_showcase';
import { SelectShowcaseComponent } from './components/select/_showcase';
export { SelectShowcaseComponent } from './components/select/_showcase';

// IQ UI NGX Elements' Basic elements module
@NgModule({
  imports: [
    CommonModule, FormModule, CodeModule, ShowcasingModule
  ],
  declarations: [
    FormShowcaseComponent, InputShowcaseComponent, CheckboxShowcaseComponent, RadioShowcaseComponent, SelectShowcaseComponent
  ],
  exports: [
    // Export dependency modules
    FormModule, CodeModule, ShowcasingModule,
    // Export child components
    FormShowcaseComponent
  ]
})
export class FormShowcaseModule { }
