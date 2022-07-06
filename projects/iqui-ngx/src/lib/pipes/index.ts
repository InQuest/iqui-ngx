// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

// Import pipes and (re)export pipes
import { CallbackPipe } from './Callback';
export { CallbackPipe } from './Callback';
import { FilterPipe } from './Filter';
export { FilterPipe } from './Filter';
import { PaginatePipe } from './Paginate';
export { PaginatePipe } from './Paginate';
import { SlicePipe } from './Slice';
export { SlicePipe } from './Slice';
import { SortPipe } from './Sort';
export { SortPipe } from './Sort';

/**
 * IQ UI NGX Elements' Pipes module
 * Implements commonly used pipes
 */
@NgModule({
  imports: [CommonModule, OverlayModule],
  declarations: [CallbackPipe, FilterPipe, PaginatePipe, SlicePipe, SortPipe],
  exports: [CallbackPipe, FilterPipe, PaginatePipe, SlicePipe, SortPipe],
})
export class PipesModule {}
