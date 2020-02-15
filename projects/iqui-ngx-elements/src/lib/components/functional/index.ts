// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

// Import components and (re)export components
import { TooltipComponent, TooltipDirective } from './tooltip';
export { TooltipComponent, TooltipDirective };
import { DropdownComponent, DropdownDirective, DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective } from './dropdown';
export { DropdownComponent, DropdownDirective, DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective };

/**
 * IQ UI NGX Elements' Functional elements module
 * Implements functional directives that augment behavior of their parent element or component
 */
@NgModule({
  imports: [
    CommonModule, OverlayModule
  ],
  declarations: [
    TooltipComponent, TooltipDirective,
    DropdownComponent, DropdownDirective, DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective
  ],
  exports: [
    TooltipDirective,
    DropdownDirective, DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective
  ]
})
export class FunctionalModule { }
