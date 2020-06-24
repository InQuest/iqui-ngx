// Pipes Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Import showcase components
import { FilterShowcaseComponent } from './Filter';
import { SortShowcaseComponent } from './Sort';
import { PaginateShowcaseComponent } from './Paginate';
import { SliceShowcaseComponent } from './Slice';

// IQ UI NGX Elements' Code/Syntax module
@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [
    // Declare showcasing components
    FilterShowcaseComponent,
    SortShowcaseComponent,
    PaginateShowcaseComponent,
    SliceShowcaseComponent
  ],
  exports: [
    // Export child components
    FilterShowcaseComponent,
    SortShowcaseComponent,
    PaginateShowcaseComponent,
    SliceShowcaseComponent
  ]
})
export class PipesShowcaseModule { }
