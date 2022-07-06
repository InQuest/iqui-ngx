// Pipes Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Import showcase components
import { CallbackShowcaseComponent } from './Callback/_showcase';
export { CallbackShowcaseComponent } from './Callback/_showcase';
import { FilterShowcaseComponent } from './Filter/_showcase';
export { FilterShowcaseComponent } from './Filter/_showcase';
import { SortShowcaseComponent } from './Sort/_showcase';
export { SortShowcaseComponent } from './Sort/_showcase';
import { PaginateShowcaseComponent } from './Paginate/_showcase';
export { PaginateShowcaseComponent } from './Paginate/_showcase';
import { SliceShowcaseComponent } from './Slice/_showcase';
export { SliceShowcaseComponent } from './Slice/_showcase';

// IQ UI NGX Elements' Code/Syntax module
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    // Declare showcasing components
    CallbackShowcaseComponent,
    FilterShowcaseComponent,
    SortShowcaseComponent,
    PaginateShowcaseComponent,
    SliceShowcaseComponent,
  ],
  exports: [
    // Export child components
    CallbackShowcaseComponent,
    FilterShowcaseComponent,
    SortShowcaseComponent,
    PaginateShowcaseComponent,
    SliceShowcaseComponent,
  ],
})
export class PipesShowcaseModule {}
