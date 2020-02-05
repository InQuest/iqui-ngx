// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

// Import dependency modules
import { FunctionalModule } from '../functional/iq-ui-ngx-functional.module';

// Import components
import { ButtonComponent } from './button';
import { DropdownButtonComponent, additionalExportingComponents as DropdownButtonAdditionalExportingComponents } from './dropdown-button';

// Compose components
const components = [
  ButtonComponent,
  DropdownButtonComponent
];

// Compose dynamic components
const entryComponents = [];

const additionalExportingComponents = [
  ...DropdownButtonAdditionalExportingComponents
];

/**
 * IQ UI NGX Elements' Basic elements module
 * Implements components that are basic building blocks of any application or more-complex component
 */
@NgModule({
  imports:          [ CommonModule, OverlayModule, FunctionalModule ],
  declarations:     [ ...components ],
  entryComponents:  [ ...entryComponents ],
  exports:          [ ...components, ...additionalExportingComponents ]
})
export class BasicsModule { }
