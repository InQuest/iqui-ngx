// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import components
import { HighlightJsComponent } from './highlight-js';

// Compose components
const components = [
  HighlightJsComponent
];

/**
 * IQ UI NGX Elements' 3rd party wrappers module
 * Implements wrappers around useful 3rd party modules
 */
@NgModule({
  imports:          [ CommonModule ],
  declarations:     [ ...components ],
  exports:          [ ...components ]
})
export class ThirdPartyModule { }
