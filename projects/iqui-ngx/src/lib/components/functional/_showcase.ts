// Functional Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { FunctionalModule } from './';
import { BasicsModule } from '../basics';
import { CodeModule } from '../code';
import { ShowcasingModule } from '../showcasing';

// Import showcase components and (re)export components
import { DeclareShowcaseComponent } from './declare/_showcase';
export { DeclareShowcaseComponent } from './declare/_showcase';
import { Copy2ClipboardShowcaseComponent } from './copy2clipboard/_showcase';
export { Copy2ClipboardShowcaseComponent } from './copy2clipboard/_showcase';
import { TooltipShowcaseComponent } from './tooltip/_showcase';
export { TooltipShowcaseComponent } from './tooltip/_showcase';
import { DropdownShowcaseComponent } from './dropdown/_showcase';
export { DropdownShowcaseComponent } from './dropdown/_showcase';
import { CollapseShowcaseComponent } from './collapse/_showcase';
export { CollapseShowcaseComponent } from './collapse/_showcase';
import { ModalShowcaseComponent } from './modal/_showcase';
export { ModalShowcaseComponent } from './modal/_showcase';
import { ToastShowcaseComponent } from './toast/_showcase';
export { ToastShowcaseComponent } from './toast/_showcase';
import { BookmarkableShowcaseComponent } from './bookmarkable/_showcase';
export { BookmarkableShowcaseComponent } from './bookmarkable/_showcase';

// IQ UI NGX Elements' Functional elements module
@NgModule({
  imports: [CommonModule, BasicsModule, FunctionalModule, CodeModule, ShowcasingModule],
  declarations: [
    DeclareShowcaseComponent,
    Copy2ClipboardShowcaseComponent,
    TooltipShowcaseComponent,
    DropdownShowcaseComponent,
    CollapseShowcaseComponent,
    ModalShowcaseComponent,
    ToastShowcaseComponent,
    BookmarkableShowcaseComponent,
  ],
  exports: [
    // Export dependency modules
    BasicsModule,
    FunctionalModule,
    CodeModule,
    ShowcasingModule,
    // Export child components
    Copy2ClipboardShowcaseComponent,
    TooltipShowcaseComponent,
    DropdownShowcaseComponent,
    CollapseShowcaseComponent,
    ModalShowcaseComponent,
    ToastShowcaseComponent,
    BookmarkableShowcaseComponent,
  ],
})
export class FunctionalShowcaseModule {}
