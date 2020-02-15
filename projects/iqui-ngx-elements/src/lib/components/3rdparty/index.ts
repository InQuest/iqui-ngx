// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import components and (re)export components
import { HighlightJsComponent, highlightJsRegisterLanguage } from './highlight-js';
export { HighlightJsComponent, highlightJsRegisterLanguage };

/**
 * IQ UI NGX Elements' 3rd party wrappers module
 * Implements wrappers around useful 3rd party modules
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightJsComponent
  ],
  exports: [
    HighlightJsComponent
  ]
})
export class ThirdPartyModule { }
