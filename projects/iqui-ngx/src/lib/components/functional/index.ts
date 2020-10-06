// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

// Import components and (re)export components
import { DeclareDirective } from './declare';
export { DeclareDirective } from './declare';
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
import { BookmarkableDirective, BookmarkableService } from './bookmarkable';
export { BookmarkableDirective, BookmarkableService };

/**
 * IQ UI NGX Elements' Functional elements module
 * Implements functional directives that augment behavior of their parent element or component
 */
@NgModule({
  imports: [
    CommonModule, OverlayModule
  ],
  declarations: [
    DeclareDirective,
    Copy2ClipboardDirective,
    TooltipComponent, TooltipDirective,
    DropdownComponent, DropdownDirective, DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective,
    CollapseDirective,
    ModalComponent, ModalDirective, ModalDialogDirective,
    BookmarkableDirective
  ],
  exports: [
    // Export dependency modules
    OverlayModule,
    // Export child components
    DeclareDirective,
    Copy2ClipboardDirective,
    TooltipDirective,
    DropdownDirective, DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective,
    CollapseDirective,
    ModalComponent, ModalDirective, ModalDialogDirective,
    BookmarkableDirective
  ]
})
export class FunctionalModule { }
