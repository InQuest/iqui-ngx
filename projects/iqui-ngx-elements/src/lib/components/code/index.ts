// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { FormModule } from '../form';

// Import components and (re)export components
import { HighlightJsComponent, highlightJsRegisterLanguage } from './highlight-js';
export { HighlightJsComponent, highlightJsRegisterLanguage };
import { PlaygroundComponent } from './playground';
export { PlaygroundComponent };

/**
 * IQ UI NGX Elements' 3rd party wrappers module
 * Implements wrappers around useful 3rd party modules
 */
@NgModule({
  imports: [
    CommonModule, FormModule
  ],
  declarations: [
    HighlightJsComponent, PlaygroundComponent
  ],
  exports: [
    HighlightJsComponent, PlaygroundComponent
  ]
})
export class CodeModule { }
