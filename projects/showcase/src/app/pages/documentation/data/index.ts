// Data Models Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Import modules
import { CodeModule, ShowcasingModule } from '../../../../../../iqui-ngx/src/public-api';

// Import showcase components
import { PhraseShowcaseComponent } from './Phrase';
import { PaginationShowcaseComponent } from './Pagination';

// IQ UI NGX Elements' Code/Syntax module
@NgModule({
  imports: [
    CommonModule, RouterModule, CodeModule, ShowcasingModule
  ],
  declarations: [
    PhraseShowcaseComponent,
    PaginationShowcaseComponent
  ],
  exports: [
    // Export dependency modules
    CodeModule, ShowcasingModule,
    // Export child components
    PhraseShowcaseComponent,
    PaginationShowcaseComponent
  ]
})
export class DataShowcaseModule { }
