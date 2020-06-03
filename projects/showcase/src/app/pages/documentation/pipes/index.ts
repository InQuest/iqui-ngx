// Pipes Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import showcase components
import { FilterShowcaseComponent } from './Filter';

// IQ UI NGX Elements' Code/Syntax module
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // Declare showcasing components
    FilterShowcaseComponent
  ],
  exports: [
    // Export child components
    FilterShowcaseComponent
  ]
})
export class PipesShowcaseModule { }
