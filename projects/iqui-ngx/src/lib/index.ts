// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

// Import and (re)export modules
import { FunctionalModule } from './components/functional';
export * from './components/functional';
import { BasicsModule } from './components/basics';
export * from './components/basics';
import { FormModule } from './components/form';
export * from './components/form';
import { CodeModule } from './components/code';
export * from './components/code';
import { ShowcasingModule } from './components/showcase';
export * from './components/showcase';

// Import and (re)export data
export * from './data';

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
    FunctionalModule,
    BasicsModule,
    FormModule,
    CodeModule,
    ShowcasingModule
  ],
  declarations: [],
  exports: [
    // (Re)export individual modules, making them included into any app the root module is included in
    FunctionalModule,
    BasicsModule,
    FormModule,
    CodeModule,
    ShowcasingModule
  ]
})
export class IqUiNgxModule { }
