// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { FormModule } from '../form';

// Import components and (re)export components
import { HighlightJsComponent, highlightJsRegisterLanguage } from './highlight-js';
export { HighlightJsComponent, highlightJsRegisterLanguage };

/**
 * IQ UI NGX Elements' code/syntax utilities module
 * Implements code/syntax utilities
 */
@NgModule({
  imports: [
    CommonModule, FormModule
  ],
  declarations: [
    HighlightJsComponent
  ],
  exports: [
    HighlightJsComponent
  ]
})
export class CodeModule { }
