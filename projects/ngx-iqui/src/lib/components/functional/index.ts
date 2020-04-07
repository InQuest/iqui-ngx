// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

// Import components and (re)export components
import { TooltipComponent, TooltipDirective,
         TooltipRelativePositioning, TTooltipRelativePositioning } from './tooltip';
export { TooltipComponent, TooltipDirective,
         TooltipRelativePositioning, TTooltipRelativePositioning };
import { DropdownComponent, DropdownDirective,
         DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective,
         DropdownRelativePositioning, TDropdownRelativePositioning } from './dropdown';
export { DropdownComponent, DropdownDirective,
         DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective,
         DropdownRelativePositioning, TDropdownRelativePositioning };
import { ModalComponent, ModalDirective, ModalDialogDirective } from './modal';
export { ModalComponent, ModalDirective, ModalDialogDirective };

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
    DropdownComponent, DropdownDirective, DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective,
    ModalComponent, ModalDirective, ModalDialogDirective
  ],
  exports: [
    TooltipDirective,
    DropdownDirective, DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective,
    ModalComponent, ModalDirective, ModalDialogDirective
  ]
})
export class FunctionalModule { }
