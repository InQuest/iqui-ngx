// Basics Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { BasicsModule } from './';
import { CodeModule } from '../code';
import { ShowcasingModule } from '../showcasing';

// Import showcase components
import { ButtonShowcaseComponent } from './button/_showcase';
export { ButtonShowcaseComponent } from './button/_showcase';
import { DropdownButtonShowcaseComponent } from './dropdown-button/_showcase';
export { DropdownButtonShowcaseComponent } from './dropdown-button/_showcase';
import { PhraseInputShowcaseComponent } from './phrase-input/_showcase';
export { PhraseInputShowcaseComponent } from './phrase-input/_showcase';

// IQ UI NGX Elements' Basic elements module
@NgModule({
  imports: [CommonModule, BasicsModule, CodeModule, ShowcasingModule],
  declarations: [ButtonShowcaseComponent, DropdownButtonShowcaseComponent, PhraseInputShowcaseComponent],
  exports: [
    // Export dependency modules
    BasicsModule,
    CodeModule,
    ShowcasingModule,
    // Export child components
    ButtonShowcaseComponent,
    DropdownButtonShowcaseComponent,
    PhraseInputShowcaseComponent,
  ],
})
export class BasicsShowcaseModule {}
