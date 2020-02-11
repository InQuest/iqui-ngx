// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

// Import components
import { TooltipDirective, TooltipComponent } from './tooltip';
import { DropdownDirective, DropdownComponent,
         DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective } from './dropdown';

// Compose components
const components = [
  TooltipDirective, TooltipComponent,
  DropdownDirective, DropdownComponent, DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective
];

/**
 * IQ UI NGX Elements' Functional elements module
 * Implements functional directives that augment behavior of their parent element or component
 */
@NgModule({
  imports:          [ CommonModule, OverlayModule ],
  declarations:     [ ...components ],
  exports:          [ ...components ]
})
export class FunctionalModule { }
