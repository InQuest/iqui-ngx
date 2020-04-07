// Code/Syntax utilities Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { CodeModule, ShowcasingModule } from '../../../../../../ngx-iqui/src';

// Import showcase components
import { HighlightJsShowcaseComponent } from './highlight-js';

// IQ UI NGX Elements' Code/Syntax module
@NgModule({
  imports: [
    CommonModule, CodeModule, ShowcasingModule
  ],
  declarations: [
    HighlightJsShowcaseComponent
  ],
  exports: [
    HighlightJsShowcaseComponent
  ]
})
export class CodeShowcaseModule { }
