// Data Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Import modules
import { CodeModule } from '../components/code';
import { ShowcasingModule } from '../components/showcasing';

// Import showcase components
import { PaginationShowcaseComponent } from './Pagination/_showcase';
export { PaginationShowcaseComponent } from './Pagination/_showcase';
import { PhraseShowcaseComponent } from './Phrase/_showcase';
export { PhraseShowcaseComponent } from './Phrase/_showcase';

// IQ UI NGX Elements' Basic elements module
@NgModule({
  imports: [CommonModule, RouterModule, CodeModule, ShowcasingModule],
  declarations: [PaginationShowcaseComponent, PhraseShowcaseComponent],
  exports: [
    // Export dependency modules
    CommonModule,
    RouterModule,
    CodeModule,
    ShowcasingModule,
    // Export child components
    PaginationShowcaseComponent,
    PhraseShowcaseComponent,
  ],
})
export class DataShowcaseModule {}
