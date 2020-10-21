// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { FormModule } from '../form';
import { CodeModule } from '../code';

// Import components and (re)export components
import { PlaygroundComponent, PlaygroundTextareaDirective } from './playground';
export { PlaygroundComponent, PlaygroundTextareaDirective };

/**
 * IQ UI NGX Elements' showcasing module
 * Implements helpful utilities for building showcase applications
 */
@NgModule({
  imports: [
    CommonModule, FormModule, CodeModule
  ],
  declarations: [
    PlaygroundComponent, PlaygroundTextareaDirective
  ],
  exports: [
    // Export dependency modules
    FormModule, CodeModule,
    // Export child components
    PlaygroundComponent, PlaygroundTextareaDirective
  ]
})
export class ShowcasingModule { }
