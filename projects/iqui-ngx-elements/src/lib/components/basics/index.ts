// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import dependency modules
import { FunctionalModule } from '../functional';

// Import components and (re)export components
import { ButtonComponent } from './button';
export { ButtonComponent };
import { DropdownButtonComponent } from './dropdown-button';
export { DropdownButtonComponent };
import { DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective } from '../functional/dropdown';

/**
 * IQ UI NGX Elements' Basic elements module
 * Implements components that are basic building blocks of any application or more-complex component
 */
@NgModule({
  imports: [
    CommonModule, FunctionalModule
  ],
  declarations: [
    ButtonComponent,
    DropdownButtonComponent
  ],
  exports: [
    ButtonComponent,
    DropdownButtonComponent, DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective
  ]
})
export class BasicsModule { }
