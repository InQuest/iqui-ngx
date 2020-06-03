// Data Models Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { CodeModule, ShowcasingModule } from '../../../../../../iqui-ngx/src';

// Import showcase components
import { PhraseShowcaseComponent } from './Phrase';

// IQ UI NGX Elements' Code/Syntax module
@NgModule({
  imports: [
    CommonModule, CodeModule, ShowcasingModule
  ],
  declarations: [
    PhraseShowcaseComponent
  ],
  exports: [
    // Export dependency modules
    CodeModule, ShowcasingModule,
    // Export child components
    PhraseShowcaseComponent
  ]
})
export class DataShowcaseModule { }
