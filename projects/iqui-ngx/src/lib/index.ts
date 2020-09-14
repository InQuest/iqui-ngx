// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

// Import and (re)export modules
import { FunctionalModule, BookmarkableService } from './components/functional';
export { FunctionalModule, BookmarkableService } from './components/functional'; // Required IVY hinting
export * from './components/functional';
import { BasicsModule } from './components/basics';
export { BasicsModule } from './components/basics'; // Required IVY hinting
export * from './components/basics';
import { FormModule } from './components/form';
export { FormModule } from './components/form'; // Required IVY hinting
export * from './components/form';
import { CodeModule } from './components/code';
export { CodeModule } from './components/code'; // Required IVY hinting
export * from './components/code';
import { ShowcasingModule } from './components/showcase';
export { ShowcasingModule } from './components/showcase'; // Required IVY hinting
export * from './components/showcase';
const modules = [
  FunctionalModule,
  BasicsModule,
  FormModule,
  CodeModule,
  ShowcasingModule
];

// Import and (re)export types
export * from './types';

// Import and (re)export pipes
import { FilterPipe, SortPipe, PaginatePipe, SlicePipe } from './pipes';
export * from './pipes';
const pipes = [
  FilterPipe,
  SortPipe,
  PaginatePipe,
  SlicePipe
];

// Import and (re)export data
export * from './data';

// Import and (re)export services
import { ClipboardService } from './services';
export * from './services';

// Compose and export all providers
const providers = [
  BookmarkableService,
  ClipboardService
];
export { providers };

/**
 * IQ UI NGX Elements' module
 * InQuest NGX reusable Elements based of Angular material CDK and Bootstrap
 */
@NgModule({
  imports: [
    // Import angular dependencies
    CommonModule,
    BrowserModule,
    // Import individual modules
    ...modules
  ],
  declarations: [
    // Declare pipes
    ...pipes
  ],
  providers: [
    ...providers,
  ],
  exports: [
    // (Re)export individual modules, making them included into any app the root module is included in
    ...modules,
    // Re export pipes
    ...pipes
  ]
})
export class IqUiNgxModule { }
