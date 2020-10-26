// Code/Syntax utilities Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { CodeModule } from './';
import { ShowcasingModule } from '../showcasing';

// Import showcase components and (re)export components
import { HighlightJsShowcaseComponent } from './highlight-js/_showcase';
export { HighlightJsShowcaseComponent } from './highlight-js/_showcase';

// IQ UI NGX Elements' Code/Syntax module
@NgModule({
  imports: [CommonModule, CodeModule, ShowcasingModule],
  declarations: [HighlightJsShowcaseComponent],
  exports: [
    // Export dependency modules
    CodeModule,
    ShowcasingModule,
    // Export child components
    HighlightJsShowcaseComponent,
  ],
})
export class CodeShowcaseModule {}
