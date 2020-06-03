// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

// Import components and (re)export components
import { Copy2ClipboardDirective } from './copy2clipboard';
export { Copy2ClipboardDirective } from './copy2clipboard';
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
import { CollapseDirective } from './collapse';
export { CollapseDirective };
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
    Copy2ClipboardDirective,
    TooltipComponent, TooltipDirective,
    DropdownComponent, DropdownDirective, DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective,
    CollapseDirective,
    ModalComponent, ModalDirective, ModalDialogDirective
  ],
  exports: [
    // Export dependency modules
    OverlayModule,
    // Export child components
    Copy2ClipboardDirective,
    TooltipDirective,
    DropdownDirective, DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective,
    CollapseDirective,
    ModalComponent, ModalDirective, ModalDialogDirective
  ]
})
export class FunctionalModule { }
