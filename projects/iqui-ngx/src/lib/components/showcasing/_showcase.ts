// Showcasing Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { ShowcasingModule } from './';
import { CodeModule } from '../code';

// Import showcase components
import { PlaygroundShowcaseComponent } from './playground/_showcase';
export { PlaygroundShowcaseComponent } from './playground/_showcase';

// IQ UI NGX Elements' Showcasing module
@NgModule({
  imports: [
    CommonModule, CodeModule, ShowcasingModule
  ],
  declarations: [
    PlaygroundShowcaseComponent
  ],
  exports: [
    // Export dependency modules
    CodeModule, ShowcasingModule,
    // Export child components
    PlaygroundShowcaseComponent
  ]
})
export class ShowcasingShowcaseModule { }
