// 3rd party Showcase module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import modules
import { CodeModule } from '../../../../../iqui-ngx-elements/src';

// Import showcase components
import { HighlightJsShowcaseComponent } from './highlight-js';
import { PlaygroundShowcaseComponent } from './playground';

// IQ UI NGX Elements' Basic elements module
@NgModule({
  imports: [
    CommonModule, CodeModule
  ],
  declarations: [
    HighlightJsShowcaseComponent, PlaygroundShowcaseComponent
  ],
  exports: [
    HighlightJsShowcaseComponent, PlaygroundShowcaseComponent
  ]
})
export class CodeShowcaseModule { }
