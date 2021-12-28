// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Import dependency modules
import { FunctionalModule } from '../functional';
import { FormModule } from '../form';

// Import components
import { DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective } from '../functional/dropdown';
// Import components and (re)export components
import { ButtonComponent, ButtonComponentTheme, TButtonComponentTheme, ButtonComponentSize, TButtonComponentSize } from './button';
export { ButtonComponent, ButtonComponentTheme, TButtonComponentTheme, ButtonComponentSize, TButtonComponentSize };
import {
  DropdownButtonComponent,
  DropdownButtonComponentTheme,
  TDropdownButtonComponentTheme,
  DropdownButtonComponentSize,
  TDropdownButtonComponentSize,
  DropdownButtonComponentRelativePositioning,
  TDropdownButtonComponentRelativePositioning,
} from './dropdown-button';
export {
  DropdownButtonComponent,
  DropdownButtonComponentTheme,
  TDropdownButtonComponentTheme,
  DropdownButtonComponentSize,
  TDropdownButtonComponentSize,
  DropdownButtonComponentRelativePositioning,
  TDropdownButtonComponentRelativePositioning,
};
import { PhraseInputComponent } from './phrase-input';
export { PhraseInputComponent };

/**
 * IQ UI NGX Elements' Basic elements module
 * Implements components that are basic building blocks of any application or more-complex component
 */
@NgModule({
  imports: [CommonModule, RouterModule, FunctionalModule, FormModule],
  declarations: [ButtonComponent, DropdownButtonComponent, PhraseInputComponent],
  exports: [
    // Export angular dependencies
    CommonModule,
    RouterModule,
    // Export dependency modules
    FunctionalModule,
    FormModule,
    // Export child components
    ButtonComponent,
    DropdownButtonComponent,
    DropdownHeaderDirective,
    DropdownBodyDirective,
    DropdownFooterDirective,
    PhraseInputComponent,
  ],
})
export class BasicsModule {}
