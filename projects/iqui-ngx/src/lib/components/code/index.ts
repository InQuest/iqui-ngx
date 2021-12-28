// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { BasicsModule } from '../basics';
import { FormModule } from '../form';

// Import components and (re)export components
import {
  HighlightJsComponent,
  HighlightJsTextareaDirective,
  HighlightJsInjectTopDirective,
  HighlightJsInjectBottomDirective,
  highlightJsRegisterLanguage,
} from './highlight-js';
export { HighlightJsComponent, HighlightJsTextareaDirective, HighlightJsInjectTopDirective, HighlightJsInjectBottomDirective, highlightJsRegisterLanguage };

/**
 * IQ UI NGX Elements' code/syntax utilities module
 * Implements code/syntax utilities
 */
@NgModule({
  imports: [CommonModule, BasicsModule, FormModule],
  declarations: [HighlightJsComponent, HighlightJsTextareaDirective, HighlightJsInjectTopDirective, HighlightJsInjectBottomDirective],
  exports: [
    // Export angular dependencies
    CommonModule,
    // Export dependency modules
    CommonModule,
    BasicsModule,
    FormModule,
    // Export child components
    HighlightJsComponent,
    HighlightJsTextareaDirective,
    HighlightJsInjectTopDirective,
    HighlightJsInjectBottomDirective,
  ],
})
export class CodeModule {}
