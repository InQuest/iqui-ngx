// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

// Import and (re)export modules
import { FunctionalModule, BookmarkableService } from './components/functional';
export { FunctionalModule, BookmarkableService } from './components/functional'; // Required IVY hinting
export * from './components/functional';
import { FunctionalShowcaseModule } from './components/functional/_showcase';
export { FunctionalShowcaseModule } from './components/functional/_showcase'; // Required IVY hinting
export * from './components/functional/_showcase';
import { BasicsModule } from './components/basics';
export { BasicsModule } from './components/basics'; // Required IVY hinting
export * from './components/basics';
import { BasicsShowcaseModule } from './components/basics/_showcase';
export { BasicsShowcaseModule } from './components/basics/_showcase'; // Required IVY hinting
export * from './components/basics/_showcase';
import { FormModule } from './components/form';
export { FormModule } from './components/form'; // Required IVY hinting
export * from './components/form';
import { FormShowcaseModule } from './components/form/_showcase';
export { FormShowcaseModule } from './components/form/_showcase'; // Required IVY hinting
export * from './components/form/_showcase';
import { CodeModule } from './components/code';
export { CodeModule } from './components/code'; // Required IVY hinting
export * from './components/code';
import { CodeShowcaseModule } from './components/code/_showcase';
export { CodeShowcaseModule } from './components/code/_showcase'; // Required IVY hinting
export * from './components/code/_showcase';
import { ShowcasingModule } from './components/showcasing';
export { ShowcasingModule } from './components/showcasing'; // Required IVY hinting
export * from './components/showcasing';
import { ShowcasingShowcaseModule } from './components/showcasing/_showcase';
export { ShowcasingShowcaseModule } from './components/showcasing/_showcase'; // Required IVY hinting
export * from './components/showcasing/_showcase';
import { DataShowcaseModule } from './data/_showcase';
export { DataShowcaseModule } from './data/_showcase'; // Required IVY hinting
export * from './data/_showcase';
import { PipesShowcaseModule } from './pipes/_showcase';
export { PipesShowcaseModule } from './pipes/_showcase'; // Required IVY hinting
export * from './pipes/_showcase';
import { RoutingShowcaseModule } from './services/routing/_showcase';
export { RoutingShowcaseModule } from './services/routing/_showcase'; // Required IVY hinting
export * from './services/routing/_showcase';
import { ShowcaseModule } from './_showcase';
export { ShowcaseModule } from './_showcase'; // Required IVY hinting
export * from './_showcase';
const modules = [
  // Component modules
  FunctionalModule,
  FunctionalShowcaseModule,
  BasicsModule,
  BasicsShowcaseModule,
  FormModule,
  FormShowcaseModule,
  CodeModule,
  CodeShowcaseModule,
  ShowcasingModule,
  ShowcasingShowcaseModule,
  // Data modules
  DataShowcaseModule,
  // Pipes modules
  PipesShowcaseModule,
  // Services modules
  RoutingShowcaseModule,
  // Showcase module
  ShowcaseModule
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
    // (Re)export pipes
    ...pipes
  ]
})
export class IqUiNgxModule { }
