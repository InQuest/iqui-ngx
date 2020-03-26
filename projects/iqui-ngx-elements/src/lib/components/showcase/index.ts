// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { FormModule } from '../form';
import { CodeModule } from '../code';

// Import components and (re)export components
import { PlaygroundComponent } from './playground';
export { PlaygroundComponent };

/**
 * IQ UI NGX Elements' showcasing module
 * Implements helpful utilities for building showcase applications
 */
@NgModule({
  imports: [
    CommonModule, FormModule, CodeModule
  ],
  declarations: [
    PlaygroundComponent
  ],
  exports: [
    PlaygroundComponent
  ]
})
export class ShowcasingModule { }
